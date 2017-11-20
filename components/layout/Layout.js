// @flow

// #region imports
import React, {
  PureComponent
}                         from 'react';
import { withStyles }     from 'material-ui/styles';
import Drawer             from 'material-ui/Drawer';
import AppBar             from 'material-ui/AppBar';
import Toolbar            from 'material-ui/Toolbar';
import Typography         from 'material-ui/Typography';
import IconButton         from 'material-ui/IconButton';
import Hidden             from 'material-ui/Hidden';
import Divider            from 'material-ui/Divider';
import MenuIcon           from 'material-ui-icons/Menu';
import {
  Menu1
  // Menu2
}                         from './Menus';
import styles             from './styles';
// #endregion

// #region flow types
type Props = {
  children: ReactNode,

  // withStyle injected
  classes: any,
  theme: any,
}

type State = {
  mobileOpen: boolean
};
// #endregion

class Layout extends PureComponent<Props, State> {
  // #region state initialization
  state = {
    mobileOpen: false,
  };
  // #endregion

  // #region component lifecycle methods
  render() {
    const {
      // withStyle HOC:
      classes,
      theme,
      // children:
      children
    } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        {Menu1}
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classes.appBar}
            elevation={0}
          >
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                PWA Next Material UI
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            { children }
          </main>
        </div>
      </div>
    );
  }
  // #endregion

  // #region drawer management
  handleDrawerToggle = () => this.setState(
    ({mobileOpen: prevMobileOpen}: State) => ({ mobileOpen: !prevMobileOpen })
  );
  // #endregion
}

export default withStyles(styles, { withTheme: true })(Layout);
