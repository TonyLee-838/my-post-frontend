import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";

function PostCard({ post }) {
  const { title, description, lastEditTime, author } = post;
  const classes = useStyle();

  return (
    <div className={classes.card}>
      <p href="#" className={classes.title}>
        {title}
      </p>
      <p className={classes.description}>{description}</p>
      <div className={classes.postDetails}>
        <label>{`Posted by: ${author}`}</label>
        <label>{`Last Edit At: ${lastEditTime}`}</label>
      </div>
    </div>
  );
}

const useStyle = createUseStyles({
  card: {
    backgroundColor: colors.white,
    padding: "30px",
  },
  title: {
    fontWeight: 900,
    fontSize: "2.65rem",
    fontFamily: "Nunito sans-serif",
    color: colors.black,
    margin: {
      top: 0,
      bottom: 0,
    },
    wordWrap: "break-word",
  },
  postDetails: {
    fontSize: "0.75rem",
    textAlign: "right",
    fontFamily: "Georgia, serif",
  },
  description: {
    color: colors.light,
    fontFamily: "Georgia, serif",
  },
});

export default PostCard;
