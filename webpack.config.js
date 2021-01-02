const path = require("path");
const nodeExternals = require("webpack-node-externals");

const serverConfig = {
  mode: "production",
  target: "node",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve("./dist/"),
    filename: "[name].node.js",
    library: "JsLib",
    libraryTarget: "umd"
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              [
                "@babel/plugin-transform-runtime",
                { useESModules: true, helpers: true }
              ]
            ]
          }
        }
      }
    ]
  }
};

const clientConfig = {
  mode: "production",
  target: "web",
  entry: {
    index: "./src/index.js"
  },
  devtool: "source-map",
  output: {
    path: path.resolve("./dist/"),
    filename: "[name].js",
    library: "JsLib",
    libraryTarget: "umd"
  },
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              [
                "@babel/plugin-transform-runtime",
                { useESModules: true, helpers: true }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  }
};

module.exports = [serverConfig, clientConfig];
