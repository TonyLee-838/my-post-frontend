import React from "react";
import IconItem from "../common/IconItem";

const PostCategoryItem = ({ category }) => {
  const styles = {
    icon: {
      color: category.color,
    },
    label: {
      color: category.color,
    },
  };

  return (
    <IconItem icon={category.icon} label={category.name} styles={styles} />
  );
};

export default PostCategoryItem;
