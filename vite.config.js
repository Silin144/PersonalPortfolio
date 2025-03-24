import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tempo } from "tempo-devtools/dist/vite"; // Add Tempo import

// Add conditional plugins for Tempo
const conditionalPlugins = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push("tempo-devtools/dist/babel-plugin");
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...conditionalPlugins],
      },
    }),
    tailwindcss(),
    tempo(), // Add the tempo plugin
  ],
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
});
