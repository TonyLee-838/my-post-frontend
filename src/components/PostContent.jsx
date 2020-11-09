import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { getPostById } from "../api/posts";

import colors from "../config/color";
import AppMarkdown from "./AppMarkdown";

function PostContent({ id }) {
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
      <AppMarkdown markdown={md} />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    padding: {
      left: "20px",
      right: "40px",
    },
    backgroundColor: colors.white,
    boxShadow: "-3px -2px 7px 1px" + colors.black,
  },
});

export default PostContent;
