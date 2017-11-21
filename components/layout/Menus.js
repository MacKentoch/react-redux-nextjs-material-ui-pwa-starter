// #flow
import React          from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText
}                     from 'material-ui/List';
import HomeIcon       from 'material-ui-icons/Home';
import LockIcon       from 'material-ui-icons/Lock';
import InfoIcon       from 'material-ui-icons/Info';
// import DraftsIcon     from 'material-ui-icons/Drafts';

export const Menu1 = (
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
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem> */}
  </div>
);
