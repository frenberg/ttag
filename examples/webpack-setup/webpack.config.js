const webpack = require('webpack');

module.exports = ({ extract, locale } = {}) => {
    // webpack 2 can accept env object
    const c3po = {};

    if (extract) {
        c3po.extract = { output: 'template.pot' }; // translations will be extracted to template.pot
    }

    if (locale) {
        // add locale setting for ttag babel plugin
        c3po.resolve = { translations: locale !== 'default' ? `${locale}.po` : 'default' };
    }

    return {
        entry: './app.js',
        output: {
            filename: locale ? `./dist/app_${locale}.js` : './dist/app.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: 'babel-loader',
                        options: { plugins: [['ttag', c3po]] },
                    },
                },
                { test: /\.po$/, loader: 'json-loader!po-gettext-loader' },
            ],
        },
        resolve: {
            alias: {
                ttag: locale ? 'ttag/dist/mock' : 'ttag',
            },
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'debug') }),
        ],
    };
};
