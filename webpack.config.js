require('dotenv').config();

const Encore = require('@symfony/webpack-encore');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .addEntry('app', './src/app/index.jsx')
    .enableReactPreset()
    .disableImagesLoader()
    .disableFontsLoader()
    .enableSassLoader()
    .enableLessLoader()
    .addLoader({
        test: /\.png$|\.jpe?g/,
        loader: 'image-webpack-loader',
        options: {
            pngquant: {
                quality: '65-90',
                speed: 4,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 80,
            },
        },
    })
    .addLoader({
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    name: 'assets/[hash]-[name].[ext]',
                    limit: 8192,
                    fallback: 'file-loader',
                },
            },
        ],
    })
    .addLoader({
        test: require.resolve('js-detect-incognito-private-browsing'),
        use: 'exports-loader?BrowsingModeDetector'
    })
    .addPlugin(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    .addPlugin(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/app/index.html'),
        env: Encore.isProduction() ? 'production' : 'development',
        inject: 'body',
        minify: {
            collapseWhitespace: Encore.isProduction(),
        },
    }))
    .addPlugin(new ExtractTextPlugin('style.css'))
    .addPlugin(new webpack.DefinePlugin({
        'DADATA_KEY': JSON.stringify(process.env.DADATA_KEY),
        'GATEWAY_URL': JSON.stringify(process.env.GATEWAY_URL),
        'ACCOUNT_URL': JSON.stringify(process.env.ACCOUNT_URL),
        'KVIKU_MARKET_LOGIN': JSON.stringify(process.env.KVIKU_MARKET_LOGIN),
        'AMPLITUDE_API_KEY': JSON.stringify(process.env.AMPLITUDE_API_KEY),
        'DADATA_API_URL': JSON.stringify(process.env.DADATA_API_URL),
        'LANDING_DOMAIN': JSON.stringify(process.env.LANDING_DOMAIN),
        'LEADGID_UTM_SOURCE': JSON.stringify(process.env.LEADGID_UTM_SOURCE),
    }))
    .addPlugin(new CopyWebpackPlugin([
        './src/img/favicon.ico',
        './src/app/sitemap.xml',
        './src/app/sw.js',
        './src/app/yandex_4c170bb05781240c.html',
        './src/app/ads.txt',
    ]))
    .configureBabel(babelConfig => {
        babelConfig.plugins = [
            'babel-plugin-styled-components',
            'transform-object-rest-spread',
            'transform-decorators-legacy',
            'transform-class-properties',
            ['babel-plugin-root-import', {
                'rootPathSuffix': 'src',
            }],
        ];
    })
;

if (Encore.isProduction()) {
    Encore
        .enableVersioning()
        .configureUglifyJsPlugin()
        .addPlugin(new StyleExtHtmlWebpackPlugin())
        .addPlugin(new webpack.NoEmitOnErrorsPlugin())
        .addPlugin(new ScriptExtHtmlWebpackPlugin({
            inline: 'modern',
        }))
        .addPlugin(new CompressionPlugin({
            asset: '[path].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.ttf$|\.html$/,
            threshold: 10240,
            minRatio: 0.9,
        }))
        .addPlugin(new CopyWebpackPlugin([
            './src/app/robots.txt'
        ]))
    ;
} else {
    Encore
        .addPlugin(new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            analyzerHost: '0.0.0.0',
            openAnalyzer: false,
        }))
        .addPlugin(new CopyWebpackPlugin([
            { from: './src/app/robotsStaging.txt', to: 'robots.txt' }
        ]))
    ;
}

module.exports = Encore.getWebpackConfig();
