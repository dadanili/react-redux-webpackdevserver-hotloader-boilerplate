//File contains the route setup to be exported to be used by App.js
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './home/container';
import { connect } from 'react-redux'


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    </Route>
  </Router>
)

export default routes;