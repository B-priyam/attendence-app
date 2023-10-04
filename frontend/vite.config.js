import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/": "http://localhost:5000",
      // "/teachers": "http://localhost:5000",
      // "/students": "http://localhost:5000",
      // "/getTT": "http://localhost:5000",
      // "/getTT/teacher/": "http://localhost:5000",
      // "/getstudents": "http://localhost:5000",
      // "/postAttendence": "http://localhost:5000",
      // "/signin/teacher": "http://localhost:5000",
      // "/signin/student": "http://localhost:5000",
      // "/deletestudent": "http://localhost:5000",
      // "/updatestudent": "http://localhost:5000",
      // "/editProfile": "http://localhost:5000",
      // "/updateProfilePic": "http://localhost:5000",
      // "/postnotice": "http://localhost:5000",
      // "/getnotice": "http://localhost:5000",
      // "/deleteNotice": "http://localhost:5000",
      // "/updateTT": "http://localhost:5000",
    },
  },
  plugins: [react()],
});
