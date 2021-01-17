import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from '@material-ui/core';
import { LocalMovies as Logo } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flexNavbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#fff',
  },
});


const navLinks = [
  { title: 'Sign In', path: '/sign_in' },
  { title: 'Sign Up', path: '/sign_up' },
  { title: 'Movies', path: '/movies' },
  { title: 'Favorites', path: '/favorites' },
  { title: 'Sign Out', path: '/sign_out' },
]

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.flexNavbar}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Logo fontSize="large" />
          </IconButton>
          <List component="nav" aria-labelledby="main navigation" className={classes.flexNavbar}>
            {navLinks.map(({ title, path }) => (
              <Link to={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;