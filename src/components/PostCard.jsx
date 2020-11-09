import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import colors from "../config/color";

function PostCard({ post }) {
  const { _id, title, description, lastEditTime, author } = post;
  const classes = useStyle();

  return (
    <div className={classes.card}>
      <Link to={`/posts/${_id}`} className={classes.title}>
        {title}
      </Link>
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
    fontSize: "3.65rem",
    fontFamily: "Nunito sans-serif",
    textDecoration: "none",
    color: colors.black,
    margin: {
      top: 0,
      bottom: 0,
    },
    wordWrap: "break-word",
  },
  postDetails: {
    textAlign: "right",
    fontFamily: "Georgia, serif",
  },
  description: {
    fontSize: "1.35rem",
    color: colors.dark,
    fontFamily: "Georgia, serif",
  },
});

export default PostCard;
