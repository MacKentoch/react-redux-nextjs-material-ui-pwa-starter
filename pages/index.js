// @flow

// #region imports
import React, {
  PureComponent
}                             from 'react';
import Router                 from 'next/router';
import Button                 from 'material-ui/Button';
import Typography             from 'material-ui/Typography';
import { withStyles }         from 'material-ui/styles';
import withRoot               from '../HOC/withRoot';
import Layout                 from '../components/layout/Layout';
// #endregion

// #region flow types
type Props = {
  classes: any,
  ...any
};

type State = {
  ...any
};
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


  // #region component lifecycle methods
  render() {
    return (
      <Layout>
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
          Login
        </Button>
      </Layout>
    );
  }
  // #endregion

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    Router.push('/login');
  };
}

export default withRoot(withStyles(styles)(Index));

