import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PostContent from "../components/PostContent";
import PostList from "../components/PostList";
import PostMain from "../components/PostMain";
import SideBar from "../components/SideBar";

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
      id: "route-home",
      path: "/",
      main: () => <h1>Home</h1>,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            children={
              <>
                <SideBar />
                <route.main />
              </>
            }
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
