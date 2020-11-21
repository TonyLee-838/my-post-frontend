import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import CodeEditor from "./common/CodeEditor";
import colors from "../config/color";
import TextInput from "./common/TextInput";
import Dropdown from "./common/dropdown/Dropdown";
import TagInput from "./common/TagInput";
import Main from "./common/Main";
import fontFamilies from "../config/fontFamily";
import Button from "./common/Button";

const EditMain = () => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

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

  const handleTagCreate = (tag) => {
    setTags([...tags, tag]);
  };

  const handleTagDelete = (index) => {
    setTags(tags.filter((_, i) => index !== i));
  };

  return (
    <Main>
      <div className={classes.container}>
        <h2>Title</h2>
        <TextInput
          className={classes.title}
          onChange={handleTitleChange}
          placeholder="Enter your title here..."
        />
        <div className={classes.content}>
          <CodeEditor
            value={content}
            onChange={handleContentChange}
            placeholder={"Enter something here..."}
          />
        </div>

        <div className={classes.categoryAndTags}>
          <div className={classes.category}>
            <h2>Category</h2>
            <Dropdown onSelect={handleSelect} options={options} />
          </div>
          <div className={classes.tags}>
            <h2>Tags</h2>
            <TagInput
              tags={tags}
              onTagCreate={handleTagCreate}
              onTagDelete={handleTagDelete}
            />
          </div>
        </div>

        <div>
          <h2>Description</h2>
          <TextInput
            className={classes.description}
            onChange={handleDescription}
            placeholder="Enter your title here..."
            multiColumn
          />
        </div>

        <div className={classes.buttons}>
          <Button label="Cancel" theme="warning" />
          <Button label="Submit" theme="success" />
        </div>
      </div>
    </Main>
  );
};

const useStyle = createUseStyles({
  container: {
    height: "100%",
    margin: "30px 15% 30px 15%",
    "& h2": {
      fontFamily: fontFamilies.text,
      marginBottom: "10px",
    },
  },

  content: {
    width: "100%",
    height: "800px",
    marginTop: "30px",
  },

  description: {
    height: "150px",
    resize: "none",
    marginBottom: "30px",
  },

  category: {
    marginRight: "40px",
  },
  tags: {
    width: "80%",
  },
  categoryAndTags: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "row",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",

    //left-align
    width: "max-content",
    marginRight: "0px",
    marginLeft: "auto",

    "& *": {
      margin: "10px",
    },
  },
});

export default EditMain;
