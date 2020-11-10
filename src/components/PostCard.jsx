import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import colors from "../config/color";
import Time from "./Time";
const description =
  "description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! ";

function PostCard({ post }) {
  const { _id, title, timeUpdated, author } = post;

  const classes = useStyle();

  return (
    <div className={classes.card}>
      <Link to={`/posts/${_id}`} className={classes.title}>
        {title}
      </Link>
      <p className={classes.description}>{description}</p>
      <div className={classes.category}>
        <span>React</span>
      </div>
      <div className={classes.tags}>
        Tags:
        <label>#React</label>
        <label>#Functional Components</label>
      </div>
      <div className={classes.postDetails}>
        <Time time={timeUpdated} label={"Updated at:"} />
        {/* <label>{`Posted by: ${author}`}</label> */}
      </div>
    </div>
  );
}

const useStyle = createUseStyles({
  category: {
    fontFamily: "Ubuntu,sans-serif",
    fontSize: "1.2rem",
  },
  card: {
    backgroundColor: colors.white,
    padding: "60px",
    width: "70vw",
  },
  description: {
    color: colors.dark,
    fontSize: "1.35rem",
    fontFamily: "Georgia, serif",
    wordWrap: "break-word",
  },
  postDetails: {
    textAlign: "right",
    fontFamily: "Georgia, serif",
  },
  tags: {
    fontSize: "1.25rem",
    fontFamily: "Ubuntu,sans-serif",

    "& > label": {
      color: colors.lightBlue,
      marginRight: "15px",
      marginLeft: "15px",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  title: {
    fontWeight: 850,
    fontSize: "3.8rem",
    fontFamily: " 'Patua One', sans-serif",
    textDecoration: "none",
    color: colors.black,
    margin: {
      top: 0,
      bottom: 0,
    },
    transition: "all 0.2s ease",
    wordWrap: "break-word",
    "&:hover": {
      color: colors.primary,
      textDecoration: "underline",
    },
  },
});

export default PostCard;
