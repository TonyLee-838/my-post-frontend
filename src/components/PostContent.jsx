import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts";

import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
import Markdown from "./Markdown";

function PostContent() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPostById(id);
      setMarkdown(data[0].contentMd);
      setTitle(data[0].title);
    };

    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <Markdown markdown={markdown} />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    padding: "3%",
    flex: 1,
    backgroundColor: colors.white,
    boxShadow: "-3px -2px 7px 1px" + colors.black,
  },
  title: {
    fontWeight: 850,
    fontSize: "3.8rem",
    fontFamily: fontFamilies.headline,
    textDecoration: "none",
    color: colors.black,
    margin: {
      top: 0,
      bottom: 0,
    },
    transition: "all 0.2s ease",
    wordWrap: "break-word",
    "&:hover": {
      color: colors.primary,
      textDecoration: "underline",
    },
  },
});

export default PostContent;
