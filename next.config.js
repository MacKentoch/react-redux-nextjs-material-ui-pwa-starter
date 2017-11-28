const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        staticFileGlobs: [
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
          'src/static/img/**.*',
          'src/static/**/*.png',
          'src/static/**/*.xml',
          'src/static/**/*.json',
          'src/static/**/*.txt',
          'src/static/**/*.svg',
          'src/static/css/**/*.css'
        ],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    );
    return config;
  }
};
