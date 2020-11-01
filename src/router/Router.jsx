import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import PostContentScreen from "../screen/PostContentScreen";
import PostListScreen from "../screen/PostListScreen";

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path="/posts/:id" component={PostContentScreen} />
        <Route path="/posts" component={PostListScreen} />
        <Route path="/" component={HomeScreen} />
        {/* <Route path="/learning-pieces" component={LearningPiecesScreen} />
        <Route path="/projects" component={ProjectsScreen} /> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
