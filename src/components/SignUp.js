import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Zoom, TextField, Button } from '@material-ui/core';
import { AccountCircle as User, VpnKey as Password } from '@material-ui/icons';
import UseAuth from './auth/UseAuth';

const useStyles = makeStyles((theme) => ({
  signUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90vh',
  },

  icons: {
    color: '#5c6bc0',
    fontSize: '3rem',
    marginRight: '2rem',
  },

  field: {
    marginBottom: '5rem',
  },

  mainButton: {
    width: '18rem',
    marginBottom: '2rem',
    fontWeight: '600',
  },

  secondaryButton: {
    width: '18rem',
  }
}));

const SignUp = (props) => {
  const SIGN_UP_ENDPOINT = process.env.REACT_APP_SIGN_UP_ENDPOINT;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, handleUser, navLinks] = UseAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const body = { email: email, password: password, password_confirmation: password };

  function sendCredentials() {
    axios.post(SIGN_UP_ENDPOINT, body)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        localStorage.setItem('uid', response.headers['uid']);
        // localStorage.setItem('authenticated', true);

        handleUser(true);
        props.history.push('/movies');
      }
    }, (error) => {
      console.log(error);
    });
  }

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => { setChecked(true) }, []);

  return (
    <Zoom in={checked}>
      <div className={classes.signUp}>
        <div className={classes.field}>
          <User className={classes.icons} />
          <TextField id="email_field" label="Email" type="text" onChange={handleEmail} />
        </div>
        <div className={classes.field}>
          <Password className={classes.icons} />
          <TextField id="password_field" label="Password" type="password" onChange={handlePassword} />
        </div>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.mainButton}
          onClick={() => {
            sendCredentials();
          }}
        >
          Sign Up
        </Button>
        <Button
          component={Link}
          to={'/sign_in'}
          size="large"
          variant="outlined"
          color="primary"
          className={classes.secondaryButton}
        >
          Sign In
        </Button>
      </div>
    </Zoom>
  )
}

export default SignUp;
