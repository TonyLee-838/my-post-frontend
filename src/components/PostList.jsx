import React from "react";
import { createUseStyles } from "react-jss";

import PostCard from "./PostCard";
import colors from "../config/color";
import Separator from "../common/Separator";

function PostList({ posts, categories }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard
            post={post}
            category={categories.find((c) => c._id === post.categoryId)}
          />
          <Separator />
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
