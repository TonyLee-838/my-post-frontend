import React from "react";
import { createUseStyles } from "react-jss";

import IconItem from "../common/IconItem";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

const PostCategoryItem = ({ category, onClick }) => {
  const classes = useStyle({ category });

  return (
    <IconItem
      icon={category.icon}
      label={category.name}
      className={classes.container}
      iconClassName={classes.icon}
      onClick={onClick}
    />
  );
};

const useStyle = createUseStyles({
  container: {
    transition: "all 0.1s",
    marginBottom: "1%",
    backgroundColor: colors.dark,
    borderRadius: "10px",
    padding: "1.5px",

    "&:hover": {
      opacity: 0.8,
    },
    "& *": {
      color: ({ category }) => category.color,
      borderRadius: "8px",
      padding: "3px",
      margin: "1px",
      cursor: "pointer",
      fontFamily: fontFamilies.round,
    },
  },
});

export default PostCategoryItem;
