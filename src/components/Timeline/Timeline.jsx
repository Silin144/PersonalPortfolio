import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import './Timeline.css';

const TimelineItem = ({ date, title, description, logo, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: index % 2 === 0 ? -30 : 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.2,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    }
  };

  const formatDescription = (desc) => {
    return <span>{desc}</span>;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ y }}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
    >
      <motion.div
        className="timeline-content"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="timeline-header">
          {logo && (
            <motion.img
              src={logo}
              alt={`${title} logo`}
              className="timeline-logo"
              whileHover={{
                scale: 1.2,
                rotateZ: 5,
                transition: { duration: 0.3, type: "spring" }
              }}
            />
          )}
          <motion.div
            className="timeline-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            {date}
          </motion.div>
        </div>
        <motion.h3
          className="timeline-title"
          variants={{
            hover: {
              y: -5,
              color: "#00d8ff",
            }
          }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="timeline-description"
          variants={{
            hover: {
              y: 5,
              opacity: 0.9,
            }
          }}
        >
          {formatDescription(description)}
        </motion.div>
        <div className="timeline-dot">
          <motion.div
            className="dot-outer"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="dot-inner"
              animate={{
                scale: [1, 1.1, 1],
                rotate: isHovered ? 360 : 0,
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 0.5,
                }
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = ({ data }) => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const lineGlow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0px 0px 10px rgba(0, 216, 255, 0.3)",
     "0px 0px 20px rgba(0, 216, 255, 0.6)",
     "0px 0px 10px rgba(0, 216, 255, 0.3)"]
  );

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-line">
        <motion.div
          className="line-progress"
          style={{
            scaleY: lineHeight,
            boxShadow: lineGlow
          }}
        >
          <motion.div
            className="line-glow"
            animate={{
              height: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
      <motion.div
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d"
        }}
      >
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            date={item.date}
            title={item.title}
            description={item.description}
            logo={item.logo}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;