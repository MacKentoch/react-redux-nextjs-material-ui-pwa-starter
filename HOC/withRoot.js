// @flow

// #region imports
import React, {
  Component
}                       from 'react';
import {
  withStyles,
  MuiThemeProvider
}                       from 'material-ui/styles';
import wrapDisplayName  from 'recompose/wrapDisplayName';
import getContext       from '../styles/getContext';
// #endregion

// #region Apply some style reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale'    // Antialiasing.
    },
    body: {
      margin: 0
    }
  }
});
// #endregion

// #region AppWrapper component
let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);
// #endregion

// #region flow types
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

// #region withRoot HOC
function withRoot(BaseComponent) {
  class WithRoot extends Component {
    static getInitialProps(ctx: InitialProps) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }
      return {};
    }

    // #region lifecycle methods
    componentWillMount() {
      this.styleContext = getContext();
    }

    componentDidMount() {
      // register service worker:
      this.registerServiceWorker();
      // install banner notification:
      this.registerBeforeinstallprompt();
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.styleContext.theme}
          sheetsManager={this.styleContext.sheetsManager}
        >
          <AppWrapper>
            <BaseComponent {...this.props} />
          </AppWrapper>
        </MuiThemeProvider>
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
  /* eslint-disable no-process-env */
  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot');
  }
  /* eslint-enable no-process-env */
  return WithRoot;
}
// #endregion

export default withRoot;
