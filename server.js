// @flow
/* eslint-disable no-process-env */

// #region imports
const express = require('express');
const chalk = require('chalk');
const next = require('next');
// const asyncWrap = require('./services/server/asyncWrap');
// const { createReadStream } = require('fs');
// #endregion

// #region variables/constants initialization
const port = parseInt(process.env.PORT, 10) || 3000;
const ipAdress = 'localhost';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// #endregion

// #region start next application
prepareNextApplication().catch(err =>
  console.log('server failed, error: ', err),
);

// #endregion

async function prepareNextApplication() {
  await app.prepare();

  const server = express();

  // example of custom request handlers:
  // server.get('/a', (req, res) => app.render(req, res, '/b', req.query));
  // server.get('/b', (req, res) => app.render(req, res, '/a', req.query));

  // #region handles service worker file request (NOTE: it won't work in dev mode but production only):
  server.get('/sw', (req, res) =>
    app.serveStatic(req, res, '.next/service-worker.js'),
  );
  // #endregion

  // default request handler by next handler:
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    /* eslint-disable no-console */
    console.log(`
        =====================================================================================
        -> Server (${chalk.bgBlue(
          'react-redux-nextjs-material-ui-pwa-starter',
        )}) 🏃 (running) on ${chalk.green(ipAdress)}:${chalk.green(port)}
        =====================================================================================
      `);
    /* eslint-enable no-console */
  });
}
