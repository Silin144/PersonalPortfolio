import { useEffect, useRef, useState } from 'react';

const ParticleTrail = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
  const animationFrameRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const colors = ['#60a5fa', '#22d3ee', '#3b82f6', '#0ea5e9'];
  const maxParticles = 150; // Increased for burst effect

  class Particle {
    constructor(x, y, speedX = 0, speedY = 0, isBurst = false) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 2;
      this.baseSize = this.size;
      this.speedX = isBurst ? speedX * 2 : speedX * 0.3;
      this.speedY = isBurst ? speedY * 2 : speedY * 0.3;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.targetColor = colors[Math.floor(Math.random() * colors.length)];
      this.colorProgress = 0;
      this.life = 1;
      this.decay = isBurst ? Math.random() * 0.02 + 0.01 : Math.random() * 0.01 + 0.005;
      this.alpha = 1;
      this.composite = Math.random() > 0.5 ? 'screen' : 'lighter';
      this.angle = isBurst ? Math.random() * Math.PI * 2 : 0;
      this.spin = (Math.random() - 0.5) * 0.1;
      this.isBurst = isBurst;
    }

    update() {
      if (this.isBurst) {
        this.angle += this.spin;
        this.speedX *= 0.98;
        this.speedY *= 0.98;
        this.speedY += 0.1; // Gravity for burst particles
      }
      
      this.x += this.speedX + (this.isBurst ? Math.cos(this.angle) * 0.2 : 0);
      this.y += this.speedY + (this.isBurst ? Math.sin(this.angle) * 0.2 : 0);
      
      if (!this.isBurst) {
        this.speedX *= 0.99;
        this.speedY *= 0.99;
      }

      // Color transition
      this.colorProgress += 0.02;
      if (this.colorProgress >= 1) {
        this.color = this.targetColor;
        this.targetColor = colors[Math.floor(Math.random() * colors.length)];
        this.colorProgress = 0;
      }

      this.life -= this.decay;
      this.size = this.baseSize * (this.life * 0.8 + 0.2);
      this.alpha = this.life;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalCompositeOperation = this.composite;
      
      // Create gradient for each particle
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );

      // Interpolate between colors
      const currentColor = this.color;
      const nextColor = this.targetColor;
      
      gradient.addColorStop(0, `${currentColor}ff`);
      gradient.addColorStop(0.5, `${nextColor}8f`);
      gradient.addColorStop(1, `${currentColor}00`);

      // Draw main particle with gradient
      ctx.globalAlpha = this.alpha * 0.8;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Add bloom effect
      ctx.globalAlpha = this.alpha * 0.4;
      ctx.filter = 'blur(4px)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  const createParticles = (x, y, speedX = 0, speedY = 0, isBurst = false) => {
    if (particlesRef.current.length < maxParticles) {
      const count = isBurst ? 20 : Math.min(3, maxParticles - particlesRef.current.length);
      for (let i = 0; i < count; i++) {
        if (isBurst) {
          const angle = (Math.PI * 2 * i) / count;
          const speed = 5 + Math.random() * 5;
          const burstSpeedX = Math.cos(angle) * speed;
          const burstSpeedY = Math.sin(angle) * speed;
          particlesRef.current.push(new Particle(x, y, burstSpeedX, burstSpeedY, true));
        } else {
          particlesRef.current.push(new Particle(x, y, speedX, speedY, false));
        }
      }
    }
  };

  const animate = () => {
    if (!contextRef.current || !isReady) return;
    const ctx = contextRef.current;
    
    // Clear with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Calculate mouse movement speed
    const dx = mouseRef.current.x - mouseRef.current.lastX;
    const dy = mouseRef.current.y - mouseRef.current.lastY;
    const speed = Math.sqrt(dx * dx + dy * dy);

    // Create particles based on mouse movement
    if (mouseRef.current.x > 0 && mouseRef.current.y > 0 && speed > 0) {
      createParticles(
        mouseRef.current.x,
        mouseRef.current.y,
        dx,
        dy
      );
    }

    // Update mouse last position
    mouseRef.current.lastX = mouseRef.current.x;
    mouseRef.current.lastY = mouseRef.current.y;

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.update();
      particle.draw(ctx);
      return particle.life > 0;
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize canvas context
    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false
    });
    
    contextRef.current = ctx;

    // Set canvas size with performance optimizations
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = 'source-over';
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    updateCanvasSize();
    setIsReady(true);

    const debouncedResize = debounce(() => {
      updateCanvasSize();
    }, 250);

    const handleMouseMove = throttle((e) => {
      mouseRef.current = {
        ...mouseRef.current,
        x: e.clientX,
        y: e.clientY
      };
    }, 16);

    const handleClick = (e) => {
      createParticles(e.clientX, e.clientY, 0, 0, true);
    };

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setIsReady(false);
      contextRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 100
      }}
    />
  );
};

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export default ParticleTrail;