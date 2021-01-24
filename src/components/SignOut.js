import React from 'react';
import auth from './auth/auth';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SignOut = (props) => {
  const SIGN_OUT_ENDPOINT = process.env.REACT_APP_SIGN_OUT_ENDPOINT;

  const history = useHistory();

  // async function sendCredentials(url = SIGN_OUT_ENDPOINT) {
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

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={() => sendCredentials()}> */}
      <Button variant="contained" color="primary" onClick={() => {
        auth.logout(() => {
          props.history.push('/');
        })
      }}>
        Sign Out
      </Button>
    </div>
  )
}

export default SignOut;
