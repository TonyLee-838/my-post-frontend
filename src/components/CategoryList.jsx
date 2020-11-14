import React from "react";
import { createUseStyles } from "react-jss";

import Separator from "../common/Separator";
import CategoryItem from "./CategoryItem";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

const CategoryList = ({ categories, onSelect, selectedId }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Categories</h3>
      <Separator color={colors.light} />
      <div className={classes.categories}>
        {categories.map((category, i) => (
          <>
            <CategoryItem
              category={category}
              isSelected={selectedId === category._id}
              onSelect={onSelect}
            />
            {i !== categories.length - 1 && <Separator color={colors.white} />}
          </>
        ))}
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    width: "13%",
    padding: "80px 60px 20px 20px",
  },
  heading: {
    color: colors.black,
    fontFamily: fontFamilies.headline,
    fontSize: "1.8rem",
    margin: 0,
    marginBottom: "10px",
  },
});

export default CategoryList;
