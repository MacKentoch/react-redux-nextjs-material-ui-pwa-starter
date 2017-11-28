// @flow

// #region imports
import React, {
  PureComponent
}                             from 'react';
// import Router                from 'next/router';
import Link                   from 'next/link';
import {
  ListItem,
  ListItemIcon,
  ListItemText
}                             from 'material-ui/List';
import InfoIcon               from 'material-ui-icons/Info';
import HomeIcon               from 'material-ui-icons/Home';
import LockIcon               from 'material-ui-icons/Lock';
// #endregion

// #region flow types
type Props = {
  ...any
};
// #endregion

class Menus extends PureComponent<Props, State> {
  render() {
    return (
      <div>
        <Link
          prefetch
          href={'/'}
          passHref
        >
          <ListItem
            button
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>

            <ListItemText
              primary={'Home'}
            />
          </ListItem>
        </Link>
        <Link
          prefetch
          href={'/protected'}
          passHref
        >
          <ListItem
            button
          >
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Protected'}
            />
          </ListItem>
        </Link>
        <Link
          prefetch
          href={'/about'}
          passHref
        >
          <ListItem
            button
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>

            <ListItemText
              primary={'About'}
            />
          </ListItem>
        </Link>
      </div>
    );
  }
}

export default Menus;


