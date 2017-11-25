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
import HomeIcon       from 'material-ui-icons/Home';
import LockIcon       from 'material-ui-icons/Lock';
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
            ({ label, icon, link }, menuIdx) => {
              let Icon = null;
              switch (icon) {
              case 'home':
                Icon = (props) => <HomeIcon {...props} />;
                break;
              case 'protected':
                Icon = (props) => <LockIcon {...props} />;
                break;
              case 'about':
                Icon = (props) => <InfoIcon {...props} />;
                break;
              default:
                Icon = (props) => <InfoIcon {...props} />;
              }

              return (
                <ListItem
                  key={menuIdx}
                  button
                >
                  <Link
                    prefetch
                    href={link}
                  >
                    <ListItemIcon>
                      {Icon}
                    </ListItemIcon>
                  </Link>
                  <ListItemText primary={label} />
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
