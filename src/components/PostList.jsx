import React from "react";
import { createUseStyles } from "react-jss";

import PostCard from "./PostCard";
import colors from "../config/color";

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
  const styles = useStyles();
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.lists}>
        {fakePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
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
