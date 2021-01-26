import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Zoom } from '@material-ui/core';
import UseAuth from './auth/UseAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90vh',
  },

  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
    userSelect: 'none',
  },

  subtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.96rem',
    },
    userSelect: 'none',
  },

  links: {
    color: '#3f51b5',
    fontWeight: '600',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    marginRight: '.3rem',
  },

  bold: {
    fontWeight: '600',
  }
}));

const Root = () => {
  const [isLoggedIn, handleUser, navLinks] = UseAuth();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[])

  return (
    <Zoom in={checked}>
      <div className={classes.root}>
        <Typography variant="h2" className={classes.title}>Welcome to movie<span className={classes.bold}>API</span></Typography>
        { !isLoggedIn ? (
          <Typography variant="body1" className={classes.subtitle}>
            Please <Link to={'sign_in'} key={'Sign In'} className={classes.links}>sign in</Link>
            or <Link to={'sign_up'} key={'Sign Up'} className={classes.links}>sign up</Link>
            in order to see the list of available movies.
          </Typography>
        ): (<></>) }
      </div>
    </Zoom>
  )
}

export default Root;
