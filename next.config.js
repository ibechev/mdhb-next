const withSvg = require("next-react-svg");
const path = require("path");

module.exports = withSvg({
  include: path.resolve(__dirname, "static"),

  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      });
    }
    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/i,
      exclude: /node_modules/,
      loader: "url-loader",
      options: {
        limit: 50000,
        prefix: "image",
        name: "[name].[ext]",
        outputPath: "static"
      }
    });
    return config;
  }
});
