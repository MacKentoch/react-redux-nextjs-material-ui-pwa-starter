// #flow

import React, {
  PureComponent
}                     from 'react';
import Router         from 'next/router';
import {
  ListItem,
  ListItemIcon,
  ListItemText
}                     from 'material-ui/List';
import HomeIcon       from 'material-ui-icons/Home';
import LockIcon       from 'material-ui-icons/Lock';
import InfoIcon       from 'material-ui-icons/Info';
import appConfig      from '../config/appConfig';

// #region flow types
type Sidemenu = {
  label: string,
  link: string
};

type Navigation = {
  sidemenu: Sidemenu
};
// #endregion

const nav: Navigation = appConfig.navigation.sidemenu;

class Menus extends PureComponent<Props, State> {
  render() {
    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Protected" />
        </ListItem>
        <ListItem button>
          <ListItemIcon onPress={this.linkTo('/about')}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </div>
    );
  }

  linkTo = (menuId: string) => (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }

    Router.push({ pathname: '/' }); // back to Home
  }
}


export default Menus;
