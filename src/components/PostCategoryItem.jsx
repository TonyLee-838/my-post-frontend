import React from "react";
import { createUseStyles } from "react-jss";

import IconItem from "../common/IconItem";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

const PostCategoryItem = ({ category, onClick }) => {
  const classes = useStyle();
  const styles = {
    icon: {
      color: category.color,
    },
    label: {
      color: category.color,
      fontFamily: fontFamilies.round,
    },
  };

  return (
    <div className={classes.container} onClick={onClick}>
      <IconItem icon={category.icon} label={category.name} styles={styles} />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    transition: "all 0.1s",
    marginBottom: "1%",

    "&:hover": {
      opacity: 0.8,
    },
    "& *": {
      padding: "3px",
      backgroundColor: colors.dark,
      borderRadius: "8px",
      cursor: "pointer",
    },
  },
});

export default PostCategoryItem;
