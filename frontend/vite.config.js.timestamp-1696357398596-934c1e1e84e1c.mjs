// vite.config.js
import { defineConfig } from "file:///C:/Users/cmoko/OneDrive/Desktop/attendence-app/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/cmoko/OneDrive/Desktop/attendence-app/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/teachers": "http://localhost:5000",
      "/students": "http://localhost:5000",
      "/getTT": "http://localhost:5000",
      "/getTT/teacher/": "http://localhost:5000",
      "/getstudents": "http://localhost:5000",
      "/postAttendence": "http://localhost:5000",
      "/signin/teacher": "http://localhost:5000",
      "/signin/student": "http://localhost:5000",
      "/deletestudent": "http://localhost:5000",
      "/updatestudent": "http://localhost:5000",
      "/editProfile": "http://localhost:5000",
      "/updateProfilePic": "http://localhost:5000",
      "/postnotice": "http://localhost:5000",
      "/getnotice": "http://localhost:5000",
      "/deleteNotice": "http://localhost:5000",
      "/updateTT": "http://localhost:5000"
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjbW9rb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGF0dGVuZGVuY2UtYXBwXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjbW9rb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGF0dGVuZGVuY2UtYXBwXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9jbW9rby9PbmVEcml2ZS9EZXNrdG9wL2F0dGVuZGVuY2UtYXBwL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICBcIi90ZWFjaGVyc1wiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgICAgXCIvc3R1ZGVudHNcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIFwiL2dldFRUXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICBcIi9nZXRUVC90ZWFjaGVyL1wiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgICAgXCIvZ2V0c3R1ZGVudHNcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIFwiL3Bvc3RBdHRlbmRlbmNlXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICBcIi9zaWduaW4vdGVhY2hlclwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgICAgXCIvc2lnbmluL3N0dWRlbnRcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIFwiL2RlbGV0ZXN0dWRlbnRcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIFwiL3VwZGF0ZXN0dWRlbnRcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIFwiL2VkaXRQcm9maWxlXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICBcIi91cGRhdGVQcm9maWxlUGljXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICBcIi9wb3N0bm90aWNlXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICBcIi9nZXRub3RpY2VcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIFwiL2RlbGV0ZU5vdGljZVwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgICAgXCIvdXBkYXRlVFRcIjogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVcsU0FBUyxvQkFBb0I7QUFDbFksT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLG1CQUFtQjtBQUFBLE1BQ25CLGdCQUFnQjtBQUFBLE1BQ2hCLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLGtCQUFrQjtBQUFBLE1BQ2xCLGtCQUFrQjtBQUFBLE1BQ2xCLGdCQUFnQjtBQUFBLE1BQ2hCLHFCQUFxQjtBQUFBLE1BQ3JCLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGlCQUFpQjtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
