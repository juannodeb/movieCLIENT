import { useEffect, useState } from 'react';

export default function UseAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [navLinks, setNavLinks] = useState([
    { title: 'Sign In', path: '/sign_in' },
    { title: 'Sign Up', path: '/sign_up' }
  ]);

  useEffect(() => {
    
    setIsLoggedIn(JSON.parse(localStorage.getItem('authenticated')));
    if (isLoggedIn) {
      setNavLinks([
        { title: 'Movies', path: '/movies' },
        // { title: 'Favorites', path: '/favorites' },
        { title: 'Sign Out', path: '/sign_out' }
      ])
    } else {
      setNavLinks([
        { title: 'Sign In', path: '/sign_in' },
        { title: 'Sign Up', path: '/sign_up' }
      ])
    }
  }, [isLoggedIn])

  const handleUser = (boolean) => {
    localStorage.setItem('authenticated', JSON.stringify(boolean));
    setIsLoggedIn(boolean)
  }

  return [isLoggedIn, handleUser, navLinks]
};
