import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.babel';
import path from 'path';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});