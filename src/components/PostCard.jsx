import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import colors from "../config/color";
import CategoryItem from "./CategoryItem";
import Time from "./Time";
const description =
  "description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! description! ";

function PostCard({ post, category }) {
  const { _id, title, timeUpdated } = post;

  const classes = useStyle();
  return (
    <div className={classes.card}>
      <Link to={`/posts/${_id}`} className={classes.title}>
        {title}
      </Link>
      <p className={classes.description}>{description}</p>

      {category && (
        <div className={classes.category}>
          <CategoryItem category={category} />
        </div>
      )}

      <div className={classes.tags}>
        Tags:
        <label>#React</label>
        <label>#Functional Components</label>
      </div>
      <div className={classes.postDetails}>
        <Time time={timeUpdated} label={"Updated at:"} />
      </div>
    </div>
  );
}

const useStyle = createUseStyles({
  category: {
    alignItems: "center",
    display: "flex",
    fontFamily: "Ubuntu,sans-serif",
    fontSize: "1.2rem",
    height: "50px",

    "&:hover": {
      opacity: 0.8,
    },
    "& *": {
      cursor: "pointer",
    },
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
