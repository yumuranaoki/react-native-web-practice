import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import Profile from './profile';
import Post from './post';

const MyRouter = () => (
  <Router>
    <Link to='/'>Home</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/post'>Post</Link>
    <Route path='/' component={App} />
    <Route path='/profile' component={Profile} />
    <Route path='/post' component={Post} />
  </Router>
);

export default MyRouter;
