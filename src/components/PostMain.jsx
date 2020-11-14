import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCategories } from "../api/categories";
import CategoryList from "./categoryBar/CategoryList";

const PostMain = ({ Component }) => {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchData();
  }, []);

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
