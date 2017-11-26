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

// #region flow types
type Props = {
  ...any
};
// #endregion

class Menus extends PureComponent<Props, State> {
  render() {
    return (
      <div>
        <ListItem
          button
        >
          <Link
            prefetch
            href={'/'}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </Link>
          <ListItemText
            primary={'Home'}
          />
        </ListItem>

        <ListItem
          button
        >
          <Link
            prefetch
            href={'/protected'}
          >
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
          </Link>
          <ListItemText
            primary={'Protected'}
          />
        </ListItem>

        <ListItem
          button
        >
          <Link
            prefetch
            href={'/about'}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
          </Link>
          <ListItemText
            primary={'About'}
          />
        </ListItem>
      </div>
    );
  }
}


export default Menus;
