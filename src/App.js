import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/auth/protected.route';
import FavoriteContainer from './containers/FavoriteContainer';
import MovieContainer from './containers/MovieContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import NotFound from './containers/NotFound';
import Navbar from './components/Navbar';
import Root from './components/Root';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <ProtectedRoute exact path="/sign_out" component={SignOut} />
        <ProtectedRoute exact path="/movies" component={MovieContainer} />
        <ProtectedRoute exact path="/favorites" component={FavoriteContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
