import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import CategoryList from "./categoryBar/CategoryList";
import { CategoriesContext } from "./contexts/CategoriesContext";

const PostMain = ({ Component }) => {
  const [selectedId, setSelectedId] = useState();
  const categories = useContext(CategoriesContext);
  const history = useHistory();

  const handleSelect = (category) => {
    if (selectedId === category._id) return setSelectedId("");
    setSelectedId(category._id);
    history.push("/posts", selectedId);
  };
  return (
    <>
      <Component
        categories={categories}
        onSelect={handleSelect}
        selectedId={selectedId}
      />
      <CategoryList
        categories={categories}
        onSelect={handleSelect}
        selectedId={selectedId}
      />
    </>
  );
};

export default PostMain;
