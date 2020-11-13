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
        color: category.color,
        backgroundColor: isSelected ? colors.blue : "",
      }}
      key={category.id}
    >
      <label onClick={() => onSelect(category)}>{"#" + category.name}</label>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    borderRadius: "15px",
    fontFamily: fontFamilies.round,
    fontSize: "1.3rem",
    padding: "15px 8px 15px 8px",
    textAlign: "center",
    transition: "background-color 0.1s ease 0s",
    width: "135px",

    "&:hover": {
      backgroundColor: colors.blue,
      "& *": {
        cursor: "pointer",
      },
    },
  },
});

export default CategoryItem;
