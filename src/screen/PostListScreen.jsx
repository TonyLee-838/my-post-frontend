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
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    async function fetchData() {
      const categories = await getCategories();
      setCategories(categories);

      const posts = await getPosts();
      setPosts(posts);
    }
    fetchData();
  }, []);

  const handleSelect = (category) => {
    if (selectedId === category._id) return setSelectedId("");
    setSelectedId(category._id);
  };

  const filtered = selectedId
    ? posts.filter((post) => post.categoryId === selectedId)
    : posts;

  return (
    <BackgroundView>
      <SideBar>
        <CategoryPanel
          categories={categories}
          onSelect={handleSelect}
          selectedId={selectedId}
        />
      </SideBar>
      <PostList
        posts={filtered}
        categories={categories}
        onSelect={handleSelect}
      />
    </BackgroundView>
  );
}

export default PostListScreen;
