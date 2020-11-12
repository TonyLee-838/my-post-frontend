import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts";

import colors from "../config/color";
import Markdown from "./Markdown";

function PostContent() {
  const { id } = useParams();
  const [md, setMd] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPostById(id);
      setMd(data[0].contentMd);
    };

    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Markdown markdown={md} />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    padding: {
      left: "20px",
      right: "40px",
    },
    backgroundColor: colors.white,
    boxShadow: "-3px -2px 7px 1px" + colors.black,
  },
});

export default PostContent;
