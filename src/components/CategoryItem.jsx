import React from "react";
import ListItem from "../common/ListItem";

const CategoryItem = ({ category }) => {
  const styles = {
    icon: {
      color: category.color,
    },
    label: {
      color: category.color,
    },
  };

  return (
    <ListItem icon={category.icon} label={category.name} styles={styles} />
  );
};

export default CategoryItem;
