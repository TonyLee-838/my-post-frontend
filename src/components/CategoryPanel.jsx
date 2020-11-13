import React from "react";
import { createUseStyles } from "react-jss";

import CategoryItem from "./CategoryItem";
import Separator from "../common/Separator";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

function CategoryPanel({ categories, onSelect, selectedId }) {
  const classes = useStyles();

  return (
    <>
      <h3 className={classes.heading}>Categories</h3>
      <Separator color={colors.white} />
      <div className={classes.container}>
        {categories.map((category) => (
          <CategoryItem
            category={category}
            isSelected={selectedId === category._id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "none",
    justifyItems: "center",
  },
  heading: {
    color: colors.white,
    fontFamily: fontFamilies.headline,
    fontSize: "1.5rem",
    textAlign: "center",
    margin: 0,
    marginBottom: "10px",
  },
  "@media (min-width:688px)": {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
    },
  },
  "@media (min-width:1312px)": {
    container: {
      gridTemplateColumns: "1fr 1fr",
    },
    heading: {
      fontSize: "1.8rem",
    },
  },
});

export default CategoryPanel;
