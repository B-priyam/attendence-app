import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // ...other Vite configuration...
  plugins: [react()],
});
