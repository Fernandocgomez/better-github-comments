const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: "**/node_modules",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const loaders = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};

const plugins = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "chrome extension",
      filename: "[name]/[name].html",
      template: "src/templates/spa.hbs",
      minify: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/extension-config/manifest.json",
        },
      ],
    }),
  ],
};

const entryAndOutput = {
  entry: {
    popup: "./src/popup/index.tsx",
  },
  output: {
    filename: "[name]/[name].js",

    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

module.exports = (env, argv) => {
  return {
    ...config,
    ...loaders,
    ...plugins,
    ...entryAndOutput,
  };
};
