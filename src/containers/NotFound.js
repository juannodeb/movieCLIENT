import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  notFound: {
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
    marginBottom: '3rem',
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
}));

const NotFound = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Zoom in={checked}>
      <div className={classes.notFound}>
        <Typography variant="h2" className={classes.title}>This page does not exist</Typography>
        <Typography variant="body" className={classes.subtitle}>
          Go <Link to={'/'} key={'Root'} className={classes.links}>back</Link>
          to the home page
        </Typography>
      </div>
    </Zoom>
  )
}

export default NotFound;
