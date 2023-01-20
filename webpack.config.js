const path = require('path')
const miniCss = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: './src/js/main.js',
        custom: './src/js/custom.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: '[name].css'
        }),
    ]
}
