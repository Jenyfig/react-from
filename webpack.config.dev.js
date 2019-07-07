const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 模式 webpack4.x之后新增的
  mode: "development",
  // 入口
  entry: "./src/index.js",
  // 出口 最终生成dist目录，开发阶段不需要配置
  module: {
    rules: [
      {
        test: /.jsx?$/, // 匹配.js结尾或是.jsx结尾的文件
        exclude: /(node_modules|bower_components)/, // 第三方的我不管
        use: {
          loader: "babel-loader" // 使用babel-loader转换
          // options: {
          //   presets: ["@babel/preset-react"] // 把jsx转成浏览器能识别的es5的代码
          // }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })]
};
