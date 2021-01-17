import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieContainer from './containers/MovieContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NotFound from './containers/NotFound';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/" component={MovieContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
