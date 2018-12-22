import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    mode: 'development',
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./src/index.js'],
    // devServer: {
    //     hot: true,
    //     // inline: true,
    //     port: 3000,
    //     host: '0.0.0.0',
    //     disableHostCheck: true
        // historyApiFallback: true,
        // contentBase: path.join(__dirname, 'dist')
    // },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    // externals: {
    //     'cherrio': 'window',
    //     'react/lib/ExecutionEnvironment': true,
    //     'react/lib/ReactContext': true
    // },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};