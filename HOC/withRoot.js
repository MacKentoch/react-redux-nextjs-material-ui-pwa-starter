// @flow

// #region imports
import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import getContext from '../styles/getContext';
import registerServiceWorker from '../services/registerServiceWorker';
import registerBeforeinstallprompt from '../services/registerBeforeinstallprompt';
// #endregion

// #region Apply some style reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
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
  ...any,
};
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

    async componentDidMount() {
      try {
        // register service worker:
        await registerServiceWorker();
        // install banner notification:
        await registerBeforeinstallprompt();
      } catch (error) {
        console.log('service worker error: ', error);
      }

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
