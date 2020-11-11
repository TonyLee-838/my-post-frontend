import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import BackgroundView from "../common/BackgoundView";
import CategoryPanel from "../components/CategoryPanel";
import PostList from "../components/PostList";
import { getCategories } from "../api/categories";

function PostListScreen() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getCategories();
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <SideBar>
        <CategoryPanel categories={categories} />
      </SideBar>
      <BackgroundView>
        <PostList />
      </BackgroundView>
    </>
  );
}

export default PostListScreen;
