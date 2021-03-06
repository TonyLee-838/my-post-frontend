/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import PostCard from "./PostCard";
import Separator from "../common/Separator";
import ScrollUpButton from "../common/ScrollUpButton";
import { getPosts } from "../../api/posts";
import ToolBar from "../common/toolBar/ToolBar";
import PostNotFound from "./PostNotFound";

function PostList({ categories, onSelect, selectedId }) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [terms, setTerms] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await getPosts();
      setPosts(result);
    }
    fetchData();
  }, []);

  //unit test:
  const filteredByCategory = selectedId
    ? posts.filter((post) => post.categoryId === selectedId)
    : posts;

  const filteredByTerms = terms
    ? filteredByCategory.filter((post) => post.title.includes(terms))
    : filteredByCategory;

  const notFound = terms && !filteredByTerms.length;

  return (
    <div className={classes.container}>
      {filteredByTerms.map((post) => (
        <div key={post.id}>
          <PostCard
            post={post}
            onIconClick={onSelect}
            // eslint-disable-next-line
            category={categories.find((c) => c._id === post.categoryId)}
          />
          <Separator />
        </div>
      ))}
      {notFound && <PostNotFound />}
      <ToolBar
        terms={terms}
        onSearch={setTerms}
        notFound={notFound}
        onClear={() => {
          setTerms("");
        }}
      />
      <ScrollUpButton />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    flex: 1,

    "@media (min-width:688px)": {
      marginRight: 0,
      marginLeft: "auto",
    },
  },
});

export default PostList;
