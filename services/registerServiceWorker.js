// @flow

/* eslint-disable no-process-env */

// no more used since using workbox (it does the job for us)
async function registerServiceWorker() {
  if (process.env === 'production') {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          // $FlowIgnore
          await navigator.serviceWorker.register('/sw');
        } catch (error) {
          /* eslint-disable no-console */
          console.error('Service worker registration failed, error: ', error);
          /* eslint-enable no-console */
        }
      });
    } else {
      /* eslint-disable no-console */
      console.log('Service worker is not supported...');
      /* eslint-enable no-console */
    }
    return;
  }
  return;
}

export default registerServiceWorker;
