import React, { useEffect, useState } from 'react';
// import auth from './auth/auth';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Zoom, TextField, Button } from '@material-ui/core';
import { AccountCircle as User, VpnKey as Password } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  signIn: {
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

const SignIn = (props) => {
  // const SIGN_IN_ENDPOINT = process.env.REACT_APP_SIGN_IN_ENDPOINT;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const body = { email: email, password: password };
  console.log('body: ', body);

  // async function sendCredentials(url = SIGN_IN_ENDPOINT, data = body) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: { 'Content-Type': 'application/json'},
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer',
  //     body: JSON.stringify(data)
  //   })

  //   if (response.status === 200) {
  //     history.push('/movies');
  //   }
  // }
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[])

  return (
    <Zoom in={checked}>
      <div className={classes.signIn}>
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
            // auth.login(() => {
            //   props.history.push('/movies');
            // })
            alert('I want to Sign In')
          }}
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to={'/sign_up'}
          size="large"
          variant="outlined"
          color="primary"
          className={classes.secondaryButton}
        >
          Sign Up
        </Button>
      </div>
    </Zoom>
  )
}

export default SignIn;
