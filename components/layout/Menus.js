// @flow

import React, {
  PureComponent
}                     from 'react';
// import Router         from 'next/router';
import Link           from 'next/link';
import {
  ListItem,
  ListItemIcon,
  ListItemText
}                     from 'material-ui/List';
import InfoIcon       from 'material-ui-icons/Info';
import Home           from 'material-ui-icons/Home';
import appConfig      from '../../config/appConfig';

// #region flow types
type Sidemenu = {
  id: string,
  label: string,
  link: string,
  icon: React$Element
};

type Navigation = {
  sidemenu: Sidemenu
};

type Props = {
  ...any
};

type State = {
  nav: Navigation,
  ...any
}
// #endregion

class Menus extends PureComponent<Props, State> {
  state = {
    nav: appConfig.navigation.sidemenu
  };

  render() {
    const {
      nav
    } = this.state;

    return (
      <div>
        {
          nav.map(
            (menu, menuIdx) => {
              return (
                <ListItem
                  key={menuIdx}
                  button
                >
                  <Link
                    prefetch
                    href={'/'}
                  >
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                  </Link>
                  <ListItemText primary={'label'} />
                </ListItem>
              );
            }
          )
        }
      </div>
    );
  }
  // linkTo = (menuId: string) => (event: SyntheticEvent<>) => {
  //   if (event) {
  //     event.preventDefault();
  //   }

  //   switch (menuId) {
  //   case '':

  //     break;

  //   default:
  //     break;
  //   }

  //   Router.push({ pathname: '/' }); // back to Home
  // }
}


export default Menus;
