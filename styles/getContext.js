// @flow

// region imports
import {
  create,
  SheetsRegistry
}                               from 'jss';
import preset                   from 'jss-preset-default';
import { createMuiTheme }       from 'material-ui/styles';
import createGenerateClassName  from 'material-ui/styles/createGenerateClassName';
import blue                     from 'material-ui/colors/blue';
import yellow                   from 'material-ui/colors/yellow';
// #endregion

// #region Mui theme configuration:
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow
  }
});
// #endregion

// #region Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
// #endregion

// #region jss store
export default function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
// #endregion
