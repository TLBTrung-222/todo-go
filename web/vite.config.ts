import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/tasks": "https://todo-go-g2zv.onrender.com",
        },
    },
});
