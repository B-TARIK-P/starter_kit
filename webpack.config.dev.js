

export default {
    devtool: 'inline-source-map',
    target: 'web',
    entry: {
        app: __dirname + '/src/index.js'
    },
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ] 
            }
        ]
    }
};