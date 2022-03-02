const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')
const webpack = require("webpack")
const fs = require("fs")


const FILE_NAME = "main.user.js"
class GenerateDevHeader {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("done", () => {
      const text = fs.readFileSync("./src/header.js").toString()
      let index = text.lastIndexOf("\n");
      let newText = text.slice(0, index) + `// @require file:///${path.join(__dirname, "/dist/" + FILE_NAME)}` + text.slice(index);
      fs.writeFileSync(path.join(__dirname, "/dist/" + FILE_NAME.replace(".js", ".dev.js")), newText);
    })
  }
}

module.exports = (env = {}) => {
  let plugins = [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      entryOnly: true,
      raw: true,
      banner: () => {
        return String(fs.readFileSync("./src/header.js"))
      }
    })
  ];
  if (!env.prod) {
    plugins.push(new GenerateDevHeader());
  }
  return {
    mode: env.prod ? 'production' : 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
      clean: true,
      path: env.prod ? path.resolve(__dirname, './dist') : path.resolve(__dirname, './dist/'),
      publicPath: '/dist/',
      filename: FILE_NAME,
    },
    resolve: {
      alias: {
        'vue': '@vue/runtime-dom',
        '@': resolve('./')
      }
    },
    externals: {
      vue: "Vue"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test:/\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: plugins,
    optimization: {
      minimize: false,
    },
  }
}
