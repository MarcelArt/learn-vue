module.exports = {
  publicPath: "/",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'http://localhost:3000/login',
}
};
