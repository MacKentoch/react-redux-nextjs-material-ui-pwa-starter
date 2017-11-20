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

import InboxIcon      from 'material-ui-icons/MoveToInbox';
import DraftsIcon     from 'material-ui-icons/Drafts';
import StarIcon       from 'material-ui-icons/Star';
import SendIcon       from 'material-ui-icons/Send';
import MailIcon       from 'material-ui-icons/Mail';
import DeleteIcon     from 'material-ui-icons/Delete';
import ReportIcon     from 'material-ui-icons/Report';

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
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

// export const Menu2 = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <MailIcon />
//       </ListItemIcon>
//       <ListItemText primary="All mail" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <DeleteIcon />
//       </ListItemIcon>
//       <ListItemText primary="Trash" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ReportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Spam" />
//     </ListItem>
//   </div>
// );

