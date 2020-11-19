import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import { compiler } from "markdown-to-jsx";
import CodeEditor from "./common/CodeEditor";
import colors from "../config/color";

const EditMain = () => {
  const classes = useStyle();
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div className={classes.container}>
      <h2>Title</h2>
      <input
        className={classes.title}
        type="text"
        placeholder="Input title here:"
      />

      <CodeEditor
        className={classes.content}
        value={content}
        onChange={handleChange}
        placeholder={"Enter something here..."}
      />

      <h2>Description</h2>

      <textarea className={classes.description} />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <div>
        <input type="text" placeholder="Tags" />
      </div>
      <div>
        <button>cancel</button>
        <button>submit</button>
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    width: "75%",
    height: "800px",
    margin: "30px",
  },
  description: {
    width: "75%",
    height: "200px",
    resize: "none",
    marginBottom: "30px",
  },
  title: {
    width: "75%",
    height: "35px",
    fontSize: "1.15rem",
    borderColor: colors.light,

    borderRadius: "0.5px",
  },
});

export default EditMain;
