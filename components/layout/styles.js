// @flow

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: 'calc(100%)'
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    zIndex: 1,
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100vh', // IMPORTANT use 100vh and not 100% which would not work
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  flexible: {
    flex: 1
  }
});

// const styles = theme => ({
//   root: {
//     width: '100%',
//     height: 430,
//     marginTop: theme.spacing.unit * 3,
//     zIndex: 1,
//     overflow: 'hidden',
//   },
//   appFrame: {
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//   },
//   appBar: {
//     position: 'absolute',
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   drawerHeader: theme.mixins.toolbar,
//   drawerPaper: {
//     width: 250,
//     [theme.breakpoints.up('md')]: {
//       width: drawerWidth,
//       position: 'relative',
//       height: '100%',
//     },
//   },
//   content: {
//     backgroundColor: theme.palette.background.default,
//     width: '100%',
//     padding: theme.spacing.unit * 3,
//     height: 'calc(100% - 56px)',
//     marginTop: 56,
//     [theme.breakpoints.up('sm')]: {
//       height: 'calc(100% - 64px)',
//       marginTop: 64,
//     },
//   },
// });

export default styles;
