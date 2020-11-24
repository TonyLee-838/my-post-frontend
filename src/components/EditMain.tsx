import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import CodeEditor from "./common/CodeEditor";
import TextInput from "./common/TextInput";
import Dropdown from "./common/dropdown/Dropdown";
import TagInput from "./common/TagInput";
import Main from "./common/Main";
import fontFamilies from "../config/fontFamily";
import Button from "./common/Button.tsx";
import TypeBar from "./edit/TypeBar";

const fakeOptions = [
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

const EditMain = () => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState([""]);
  // eslint-disable-next-line
  const [options, setOptions] = useState(fakeOptions);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  const handleSelect = (value: string) => {
    setCategoryId(value);
  };

  const handleTagCreate = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleTagDelete = (index: number) => {
    setTags(tags.filter((_, i) => index !== i));
  };

  const handleSubmit = () => {
    console.log("submit: ", {
      title,
      description,
      content,
      tags,
      categoryId,
    });
  };

  return (
    <Main>
      <div className={classes.container}>
        <TypeBar />
        <div className={classes.inputContainer}>
          <h2>Title</h2>
          <TextInput
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter your title here..."
          />
          <div className={classes.content}>
            <h2>Content</h2>
            <CodeEditor content={content} onChange={handleContentChange} />
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
              value={description}
              className={classes.description}
              onChange={handleDescription}
              placeholder="Enter your description here..."
              multiColumn
            />
          </div>

          <div className={classes.buttons}>
            <Button label="Cancel" theme="warning" onClick={() => {}} />
            <Button label="Submit" theme="success" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </Main>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },

  inputContainer: {
    flex: 1,
    padding: "30px 60px 30px 30px",
    height: "max-content",
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
    marginTop: "40px",
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
