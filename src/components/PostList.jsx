import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import PostCard from "./PostCard";
import colors from "../config/color";
import Separator from "../common/Separator";
import { getPosts } from "../api/posts";
const fakePosts = [
  {
    id: 1,
    title: "TitleTitleTitleTitleTitleTitleTitle",
    description:
      "description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!",
    createTime: "2020-10-25 22:35",
    lastEditTime: "2020-10-25 22:35",
    author: "Tony",
  },
  {
    id: 2,
    title: "TitleTitleTitleTitleTitleTitleTitle",
    description:
      "description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!",
    createTime: "2020-10-25 22:35",
    lastEditTime: "2020-10-25 22:35",
    author: "Tony",
  },
  {
    id: 3,
    title: "TitleTitleTitleTitleTitleTitleTitle",
    description:
      "description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!",
    createTime: "2020-10-25 22:35",
    lastEditTime: "2020-10-25 22:35",
    author: "Tony",
  },
  {
    id: 4,
    title: "TitleTitleTitleTitleTitleTitleTitle",
    description:
      "description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!",
    createTime: "2020-10-25 22:35",
    lastEditTime: "2020-10-25 22:35",
    author: "Tony",
  },
  {
    id: 5,
    title: "TitleTitleTitleTitleTitleTitleTitle",
    description:
      "description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!",
    createTime: "2020-10-25 22:35",
    lastEditTime: "2020-10-25 22:35",
    author: "Tony",
  },
  {
    id: 6,
    title: "TitleTitleTitleTitleTitleTitleTitle",
    description:
      "description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!description here!",
    createTime: "2020-10-25 22:35",
    lastEditTime: "2020-10-25 22:35",
    author: "Tony",
  },
];

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
    <div className={classes.lists}>
      {posts.map((post, i) => (
        <div key={post.id}>
          <PostCard post={post} />
          {<Separator />}
        </div>
      ))}
    </div>
  );
}

const useStyles = createUseStyles({
  backgroundContainer: {
    backgroundColor: colors.secondary,
  },
  lists: {
    marginTop: "60px",
    float: "right",
    backgroundColor: "#fff400",
    boxShadow: "-3px -2px 7px 1px" + colors.black,
  },
});

export default PostList;
