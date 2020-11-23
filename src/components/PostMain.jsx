import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Main from "./common/Main";
import CategoryList from "./categoryBar/CategoryList";
import { CategoriesContext } from "./contexts/CategoriesContext";
import ToolBar from "./common/toolBar/ToolBar";

const PostMain = ({ Component }) => {
  const [selectedId, setSelectedId] = useState();
  const categories = useContext(CategoriesContext);
  const history = useHistory();
  const classes = useStyle();

  const handleSelect = (category) => {
    if (selectedId === category._id) return setSelectedId("");
    setSelectedId(category._id);
    history.push("/posts", selectedId);
  };
  return (
    <Main>
      <div className={classes.container}>
        <ToolBar />
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
      </div>
    </Main>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
  },
});

export default PostMain;
