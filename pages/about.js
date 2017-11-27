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

class About extends PureComponent<Props, State> {
  // #region component lifecycle methods
  render() {
    return (
      <Layout>
        <Typography
          type="display1"
          gutterBottom
        >
          About
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
          Go back Home
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
    Router.push('/');
  };
}

export default withRoot(withStyles(styles)(About));

