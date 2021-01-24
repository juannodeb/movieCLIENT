import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Menu, Typography, useMediaQuery } from '@material-ui/core';
import { Menu as Logo } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import auth from './auth/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  wrapper: {
    width: '80%',
    margin: '0 auto',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    [theme.breakpoints.down('sm')]:{
      flexGrow: 1,
    },
    userSelect: 'none',
    fontWeight: 'bolder',
  },

  button: {
    color: '#fff',
    marginRight: '1rem',
  },

  navbarOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },

  linkTitle: {
    textDecoration: 'none',
    color: '#fff',
  },

  linkText: {
    textDecoration: 'none',
    color: '#fff',
    marginRight: '1rem',
  },

  menuLinkBlock: {
    textDecoration: 'none',
    color: '#000',
  },

  menuLinkText: {
    margin: '0',
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLoggedIn = auth.isAuthenticated();
  const navLinks = isLoggedIn ?
    [
      { title: 'Movies', path: '/movies' },
      { title: 'Favorites', path: '/favorites' },
      { title: 'Sign Out', path: '/sign_out' }
    ]:
    [
      { title: 'Sign In', path: '/sign_in' },
      { title: 'Sign Up', path: '/sign_up' }
    ]

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.wrapper}>
          <Typography variant="h6" className={classes.title}>
            <Link to={'/'} key={'Root'} className={classes.linkTitle}>movieAPI</Link>
          </Typography>
          { isMobile ? (
            <>
              <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Logo />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.menuLinkBlock}>
                  <List>
                    <ListItem>
                      <ListItemText primary={title} className={classes.menuLinkText} onClick={() => setAnchorEl(null)} />
                    </ListItem>
                  </List>
                </Link>
              ))}
            </Menu>
          </>
          ):
          (
            <div className={classes.navbarOptions}>
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <List>
                    <ListItem button>
                      <ListItemText primary={title}/>
                    </ListItem>
                  </List>
                </Link>
              ))}
            </div>
          )
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;