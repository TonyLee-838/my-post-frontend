import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import PostCategoryItem from "./PostCategoryItem";
import TimeItem from "../common/TimeItem";

function PostCard({ post, category, onIconClick }) {
  const { id, title, timeUpdated, description } = post;

  const classes = useStyle();
  return (
    <div className={classes.card}>
      <TimeItem
        className={classes.postDetails}
        time={timeUpdated}
        label={"Updated at:"}
      />
      <Link className={classes.title} to={`/posts/${id}`}>
        {title}
      </Link>

      <p className={classes.description}>{description}</p>

      {category && (
        <PostCategoryItem
          category={category}
          onClick={() => onIconClick(category)}
        />
      )}

      <div className={classes.tags}>
        Tags:
        <label>#React</label>
        <label>#Functional Components</label>
      </div>
    </div>
  );
}

const useStyle = createUseStyles({
  card: {
    backgroundColor: colors.white,
    padding: "60px",
  },
  description: {
    color: colors.dark,
    fontSize: "1.15rem",
    fontFamily: fontFamilies.text,
    wordWrap: "break-word",
    margin: "50px 0 30px 0",
  },
  postDetails: {
    float: "right",
    marginTop: "20px",
  },
  tags: {
    fontSize: "1.25rem",
    fontFamily: fontFamilies.round,

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
    fontFamily: fontFamilies.headline,
    margin: {
      top: 0,
      bottom: 0,
    },
    wordWrap: "break-word",
    transition: "all 0.2s ease",
    textDecoration: "none",
    color: colors.black,

    "&:hover": {
      color: colors.primary,
      textDecoration: "underline",
    },
  },
});

export default PostCard;
