import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import UseAuth from './auth/UseAuth';

const useStyles = makeStyles((theme) => ({
  signOut: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90vh',
  },
}));

const SignOut = (props) => {
  const [isLoggedIn, handleUser, navLinks] = UseAuth();
  const classes = useStyles();
  const SIGN_OUT_ENDPOINT = process.env.REACT_APP_SIGN_OUT_ENDPOINT;
  const headers = {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid'),
  };

  function triggerLogOut() {
    axios.delete(SIGN_OUT_ENDPOINT, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('authenticated');

        handleUser(false);
        props.history.push('/');
      }
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div className={classes.signOut}>
      <Button variant="contained" color="primary" onClick={() => triggerLogOut()}>
        Sign Out
      </Button>
    </div>
  )
}

export default SignOut;
