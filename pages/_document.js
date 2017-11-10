// @flow

// @flow

// #region imports
import React                  from 'react';
import Document, {
  Head,
  Main,
  NextScript
}                             from 'next/document';
import JssProvider            from 'react-jss/lib/JssProvider';
import getContext             from '../styles/getContext';

// #endregion

// #region flow types
type Props = {
  ...any
};

type State = any;

type InitialProps = {
  req: any,
  res: any,
  pathname: string,
  query: any,
  asPath: string,
  isServer: boolean,
  store?: any,
  ...any
}
// #endregion

class RootDocument extends Document<Props, State> {
  // #region props initialization
  static async getInitialProps(initProps: InitialProps) {
    // Resolution order
    //
    // On the server:
    // 1. page.getInitialProps
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the server with error:
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. page.getInitialProps
    // 3. page.render

    // Get the context to collected side effects.
    const context = getContext();
    const page    = initProps.renderPage(
      Component => props => (
        <JssProvider
          registry={context.sheetsRegistry}
          jss={context.jss}
        >
          <Component {...props} />
        </JssProvider>
      )
    );

    return {
      ...page,
      stylesContext: context,
      styles: (
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: context.sheetsRegistry.toString() }}
        />
      )
    };
  }
  // #endregion

  // #region component lifecycle methods
  componentDidMount() {
    // register service worker:
    this.registerServiceWorker();
    // install banner notification:
    this.registerBeforeinstallprompt();
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Next PWA Material UI Starter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

          <meta name="application-name" content="react-redux-nextjs-material-ui-pwa-starter" />
          <link rel="manifest" href="static/manifest.json" />

          <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
          <meta name="theme-color" content="#1967be" />

          <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#1967be" />
          <meta name="apple-mobile-web-app-title" content="Next PWA Starter" />
          <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
          <link rel="apple-touch-startup-image" href="static/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="react-redux-nextjs-material-ui-pwa-starter" />
          {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
  // #endregion

  // #region service worker registration

  /**
   * service worker registration
   *
   * AS _document shoudl be used on each page, it will be called for each page (as we want)
   * It does not matter you call it multiple times since once registered, navigator.serviceWorker.register() will have no more effect (see https://developers.google.com/web/fundamentals/primers/service-workers/registration#subsequent_visits)
   *
   * @memberof Layout
   * @returns {void}
   */
  registerServiceWorker = async () => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      try {
        // $FlowIgnore
        await navigator.serviceWorker.register('/sw.js');
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
  }
  // #endregion

  // #region PWA prompt user install app (add to screen)
  registerBeforeinstallprompt = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', async (e) => {
        // beforeinstallprompt Event fired
        try {
          // e.userChoice will return a Promise.
          const choiceResult = await e.userChoice;
          if(choiceResult.outcome === 'dismissed') {
            /* eslint-disable no-console */
            console.log('User cancelled home screen install');
            /* eslint-enable no-console */
          } else {
            /* eslint-disable no-console */
            console.log('User added to home screen');
            /* eslint-enable no-console */
          }
        } catch (error) {
          /* eslint-disable no-console */
          console.error('user choice prompt promise failed to resolve, error: ', error);
          /* eslint-enable no-console */
        }
      });
    }
  }
  // #endregion
}

export default RootDocument;
