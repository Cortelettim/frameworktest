import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Album from "./components/album/Album";
import Post from "./components/post/Post";
import Todo from "./components/to-do/To-do";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Menu} />
    <Route path="/post" component={Post} />
    <Route path="/album" component={Album} />
    <Route path="/to-do" component={Todo} />
  </Switch>
);

export default Routes;
