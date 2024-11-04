import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "handlebars-reload",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".hbs")) {
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        }
      },
    },
  ],
});
