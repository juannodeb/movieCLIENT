import React from 'react';
import { Route } from 'react-router-dom'; //, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route { ...rest } render={
      (props) => {
        // if (localStorage.getItem('authenticated') === true) {
          return <Component { ...props }/>
        // } else {
        //   return <Redirect to={
        //     { pathname: '/', state: { from: props.location } }
        //   }/>
        // }
      }
    } />
  )
}