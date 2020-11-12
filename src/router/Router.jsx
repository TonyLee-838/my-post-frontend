import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getCategories } from "../api/categories";
import CategoryPanel from "../components/CategoryPanel";
import PostContent from "../components/PostContent";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";

function Router() {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    async function fetchData() {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchData();
  }, []);

  const handleSelect = (category) => {
    if (selectedId === category._id) return setSelectedId("");
    setSelectedId(category._id);
  };

  const CategoriesSideBar = () => (
    <SideBar>
      <CategoryPanel
        categories={categories}
        onSelect={handleSelect}
        selectedId={selectedId}
      />
    </SideBar>
  );

  const routes = [
    {
      id: "route-posts-content",
      path: "/posts/:id",
      sidebar: CategoriesSideBar,
      main: () => <PostContent />,
    },
    {
      id: "route-post-lists",
      path: "/posts",
      sidebar: CategoriesSideBar,
      main: () => (
        <PostList
          categories={categories}
          onSelect={handleSelect}
          selectedId={selectedId}
        />
      ),
    },
    {
      id: "route-home",
      path: "/",
      sidebar: CategoriesSideBar,
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
                <route.sidebar />
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
