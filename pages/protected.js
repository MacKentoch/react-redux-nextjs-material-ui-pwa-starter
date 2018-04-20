// @flow

// #region imports
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import compose from 'recompose/compose';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../HOC/withRoot';
import Layout from '../components/layout/Layout';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import configureStore from '../redux/store/configureStore';
import * as userAuthActions from '../redux/modules/userAuth';
// #endregion

// #region flow types
type Props = {
  classes: any,
  ...any,
};

type State = {
  ...any,
};
// #endregion

// #region styles
const styles = theme => ({
  card: {
    minWidth: 310,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});
// #endregion

class Protected extends PureComponent<Props, State> {
  // #region component lifecycle methods
  render() {
    return (
      <PrivateRoute fromPath="/protected">
        <Layout>
          <Typography type="display1" gutterBottom>
            Protected
          </Typography>

          <Typography type="subheading" gutterBottom>
            example project
          </Typography>

          <Button raised color="accent" onClick={this.handleClick}>
            Go back Home
          </Button>
        </Layout>
      </PrivateRoute>
    );
  }
  // #endregion

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    Router.push('/');
  };
}

// #region redux state and dispatch map to props
const mapStateToProps = (state: any) => ({
  // userAuth:
  isAuthenticated: state.userAuth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: (...any) => any) => {
  return {
    ...bindActionCreators(
      {
        // userAuth:
        ...userAuthActions,
      },
      dispatch,
    ),
  };
};
// #endregion

export default compose(
  withRedux(configureStore, mapStateToProps, mapDispatchToProps),
  withRoot,
  withStyles(styles),
)(Protected);
