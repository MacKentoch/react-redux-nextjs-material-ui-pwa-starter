// @flow

/* eslint no-process-env:0 */

if (process.env.NODE_ENV === 'production') {
  module.exports = async () => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      try {
        // $FlowIgnore
        await navigator.serviceWorker.register('/service-worker.js');
      } catch (error) {
        /* eslint-disable no-console */
        console.error('Service worker registration failed, error: ', error);
        /* eslint-enable no-console */
      }
    } else {
      /* eslint-disable no-console */
      console.log('Service worker is not supported...');
      /* eslint-enable no-console */
    }
  };
} else {
  // no sw in dev or test mode (sw-precache-webpack-plugin won't work in dev - it is not compatible with web dev server)
  module.exports = () => {};
}
