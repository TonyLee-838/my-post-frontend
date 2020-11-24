import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PostContent from "./posts/PostContent";
import PostList from "./posts/PostList";
import PostMain from "./PostMain";
import EditMain from "./EditMain";
import SideBar from "./SideBar";
import PieceMain from "./PieceMain";
import BackgroundView from "./common/BackgroundView";
import LoginMain from "./LoginMain";

function Router() {
  const routes = [
    {
      id: "route-posts-content",
      path: "/posts/:id",
      main: () => <PostMain Component={PostContent} />,
    },
    {
      id: "route-post-lists",
      path: "/posts",
      main: () => <PostMain Component={PostList} />,
    },
    {
      id: "route-pieces",
      path: "/pieces",
      main: () => <PieceMain />,
    },
    {
      id: "route-login",
      path: "/login",
      main: () => <LoginMain />,
    },
    {
      id: "route-editing",
      path: "/edit/post",
      main: () => <EditMain />,
    },
    {
      id: "route-home",
      path: "/",
      main: () => <h1>Home</h1>,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/edit" to="/edit/post" />
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            children={
              <BackgroundView>
                <SideBar />
                <route.main />
              </BackgroundView>
            }
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
