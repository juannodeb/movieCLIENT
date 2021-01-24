import React, { useState } from 'react';
import auth from './auth/auth';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';
import { AccountCircle as User, VpnKey as Password } from '@material-ui/icons';

const SignIn = (props) => {
  const SIGN_IN_ENDPOINT = process.env.REACT_APP_SIGN_IN_ENDPOINT;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const body = { email: email, password: password };

  async function sendCredentials(url = SIGN_IN_ENDPOINT, data = body) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json'},
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })

    if (response.status === 200) {
      history.push('/movies');
    }
  }

  return (
    <div>
      <div style={{margin: '5rem 43%'}}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <User />
          </Grid>
          <Grid item>
            <TextField id="email_field" label="Email" type="text" onChange={handleEmail}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Password />
          </Grid>
          <Grid item>
            <TextField id="password_field" label="Password" type="password" onChange={handlePassword} />
          </Grid>
        </Grid>
      </div>
      <div style={{margin: '2rem 43%'}}>
        {/* <Button variant="contained" color="primary" onClick={() => sendCredentials()}> */}
        <Button variant="contained" color="primary" onClick={() => {
          auth.login(() => {
            props.history.push('/movies');
          })
        }}>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default SignIn;
