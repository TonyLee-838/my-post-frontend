import React, { useEffect, useState } from "react";
import { getCategories } from "../api/categories";
import CategoryList from "../components/CategoryList";

const PostMain = ({ Component }) => {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();

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
