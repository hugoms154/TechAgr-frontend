import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreatePost from '../pages/CreatePost';
import Dashboard from '../pages/Dashboard';
import Post from '../pages/Post';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/posts/:id" component={Post} />
      <Route exact path="/posts" component={CreatePost} />
    </Switch>
  );
};

export default Routes;
