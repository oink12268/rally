module.exports = {
  //추가
  outputDir: "../src/main/resources/static",
  indexPath: "../static/index.html",

  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        // target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
