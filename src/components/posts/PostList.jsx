import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import PostCard from "./PostCard";
import colors from "../../config/color";
import Separator from "../common/Separator";
import ScrollUpButton from "../common/ScrollUpButton";
import { getPosts } from "../../api/posts";

function PostList({ categories, onSelect, selectedId }) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getPosts();
      setPosts(posts);
    }
    fetchData();
  }, []);

  const filtered = selectedId
    ? posts.filter((post) => post.categoryId === selectedId)
    : posts;

  return (
    <div className={classes.container}>
      {filtered.map((post) => (
        <div key={post.id}>
          <PostCard
            post={post}
            onIconClick={onSelect}
            category={categories.find((c) => c._id === post.categoryId)}
          />
          <Separator />
        </div>
      ))}
      <ScrollUpButton />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    flex: 1,

    "@media (min-width:688px)": {
      marginRight: 0,
      marginLeft: "auto",
    },
  },
});

export default PostList;
