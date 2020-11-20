import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import { compiler } from "markdown-to-jsx";
import CodeEditor from "./common/CodeEditor";
import colors from "../config/color";
import TextInput from "./common/TextInput";
import Dropdown from "./common/dropdown/Dropdown";

const EditMain = () => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleTitleChange = (value) => {
    setTitle(value);
  };
  const handleDescription = (value) => {
    setDescription(value);
  };

  const options = [
    {
      id: "o1",
      value: "React",
      Component: () => <div>React</div>,
    },
    {
      id: "o2",
      value: "Javascript",
      Component: () => <div>Javascript</div>,
    },
  ];

  const handleSelect = (value) => {
    // setSelected(categoryId);
    console.log("value : ", value);
  };

  return (
    <div className={classes.container}>
      <h2>Title</h2>
      <TextInput
        onChange={handleTitleChange}
        placeholder="Enter your title here..."
      />
      <CodeEditor
        className={classes.content}
        value={content}
        onChange={handleContentChange}
        placeholder={"Enter something here..."}
      />
      <h2>Description</h2>
      <TextInput
        onChange={handleDescription}
        placeholder="Enter your title here..."
        multiColumn
      />
      <Dropdown onSelect={handleSelect} options={options} />;
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
    borderStyle: "none",
    boxShadow: " 0px 0px 2px " + colors.dark,
    padding: "0px 5px 0px 5px",
  },
});

export default EditMain;
