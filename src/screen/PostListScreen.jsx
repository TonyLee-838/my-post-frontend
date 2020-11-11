import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import BackgroundView from "../common/BackgroundView";
import CategoryPanel from "../components/CategoryPanel";
import PostList from "../components/PostList";
import { getCategories } from "../api/categories";
import { getPosts } from "../api/posts";

function PostListScreen() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await getCategories();
      setCategories(categories);

      const posts = await getPosts();
      setPosts(posts);
    }
    fetchData();
  }, []);

  return (
    <>
      <SideBar>
        <CategoryPanel categories={categories} />
      </SideBar>
      <BackgroundView>
        <PostList posts={posts} categories={categories} />
      </BackgroundView>
    </>
  );
}

export default PostListScreen;
