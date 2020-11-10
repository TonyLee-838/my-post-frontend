import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import PostCard from "./PostCard";
import colors from "../config/color";
import Separator from "../common/Separator";
import { getPosts } from "../api/posts";

function PostList() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          {<Separator />}
        </div>
      ))}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "75%",
    marginRight: 0,
    marginLeft: "auto",
    flex: 1,
    boxShadow: "-3px -2px 7px 1px" + colors.black,
  },
});

export default PostList;
