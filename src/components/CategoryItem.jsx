import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

const CategoryItem = ({ category, isSelected, onSelect }) => {
  const classes = useStyle();
  return (
    <div
      className={classes.container}
      style={{
        color: isSelected ? colors.lightBlue : "",
        fontWeight: isSelected ? "bold" : "",
      }}
      key={category.id}
    >
      <label onClick={() => onSelect(category)}>{category.name}</label>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    borderRadius: "15px",
    fontFamily: fontFamilies.round,
    fontSize: "1.15rem",
    padding: "10px 8px 10px 8px",
    width: "135px",
    color: colors.dark,

    "& *": {
      transition: "all 0.1s ease 0s",
      cursor: "pointer",
    },
    "&:hover": {
      "& *": {
        color: colors.lightBlue,
      },
    },
  },
});

export default CategoryItem;
