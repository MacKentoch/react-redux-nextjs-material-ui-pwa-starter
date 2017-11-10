// @flow

// #region imports
import React, {
  PureComponent
}                             from 'react';
import Button                 from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
}                             from 'material-ui/Dialog';
import Typography             from 'material-ui/Typography';
import { withStyles }         from 'material-ui/styles';
import withRoot               from '../HOC/withRoot';
// import { bindActionCreators } from 'redux';
// import withRedux              from 'next-redux-wrapper';
// import configureStore         from '../redux/store/configureStore';
// import * as fakeFetchActions  from '../redux/modules/fakeModuleWithFetch';
// import * as userAuthActions   from '../redux/modules/userAuth';
// import Header                 from '../components/header/Header';
// import Jumbotron              from 'react-bootstrap/lib/Jumbotron';
// import Button                 from 'react-bootstrap/lib/Button';
// import Router                 from 'next/router';
// #endregion

// #region flow types
type Props = {
  // // fakeModuleWithFetch:
  // isFetching: boolean;
  // fakeData: any,
  // fakeFetchIfNeeded: () => Promise<any>,
  // // userAuth:
  // isAuthenticated: boolean,
  // disconnectUser: () => any,

  classes: any,
  ...any
};

type State = {
  open: boolean,
  ...any
};

// type InitialProps = {
//   req: any,
//   res: any,
//   pathname: string,
//   query: any,
//   asPath: string,
//   isServer: boolean,
//   store?: any,
//   ...any
// }
// #endregion

// #region styles
const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200
  }
};
// #endregion
class Index extends PureComponent<Props, State> {
  // #region props initialization
  // static async getInitialProps({
  //   isServer,
  //   store
  // }: InitialProps) {
  //   const SIDE = isServer ? 'SERVER SIDE' : 'FRONT SIDE';

  //   try {
  //     const response = await store.dispatch(fakeFetchActions.fakeFetchIfNeeded());
  //     const {
  //       payload: {
  //         data
  //       }
  //     } = response;
  //     // NOTE: you will see this log in your server console (where you `npm run dev`):
  //     /* eslint-disable no-console */
  //     console.log(`getInitialProps - ${SIDE} - fake fetch result: `, data);
  //   } catch (error) {
  //     console.error(`getInitialProps - ${SIDE} - fake fetch failed: `, error);
  //     /* eslint-enable no-console */
  //   }
  // }
  // #endregion

  state = {
    open: false
  };

  // #region component lifecycle methods
  render() {
    return (
      <div className={this.props.classes.root}>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <DialogTitle>
            Super Secret Password
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              1-2-3-4-5
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={this.handleRequestClose}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Typography
          type="display1"
          gutterBottom
        >
          Material-UI
        </Typography>

        <Typography
          type="subheading"
          gutterBottom
        >
          example project
        </Typography>

        <Button
          raised
          color="accent"
          onClick={this.handleClick}
        >
          Super Secret Password
        </Button>
      </div>
    );
  }
  // #endregion

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };
}

// // #region redux state and dispatch map to props
// const mapStateToProps = (
//   state: any
// ) => ({
//   // fakeModuleWithFetch:
//   isFetching: state.fakeModuleWithFetch.isFetching,
//   fakeData:   state.fakeModuleWithFetch.data,
//   // userAuth:
//   isAuthenticated: state.userAuth.isAuthenticated
// });

// const mapDispatchToProps = (
//   dispatch: (...any) => any
// ) => {
//   return {
//     ...bindActionCreators(
//       {
//         // fakeModuleWithFetch:
//         ...fakeFetchActions,
//         // userAuth:
//         ...userAuthActions
//       },
//       dispatch)
//   };
// };
// // #endregion

// export default withRedux(
//   configureStore,
//   mapStateToProps,
//   mapDispatchToProps
// )(Index);

export default withRoot(withStyles(styles)(Index));

