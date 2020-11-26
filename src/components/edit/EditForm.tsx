import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";

import Button from "../common/Button";
import CodeEditor from "../common/CodeEditor";
import Dropdown from "../common/dropdown/Dropdown";
import TagInput from "../common/TagInput";
import TextInput from "../common/TextInput";
import fontFamilies from "../../config/fontFamily";
import { TargetType } from "./TypeBar";

const fakeOptions = [
  {
    id: "o1",
    value: "React",
  },
  {
    id: "o2",
    value: "Javascript",
  },
];

const formConfig = {
  post: {
    category: true,
    tags: true,
    description: true,
  },
  piece: {
    category: true,
    tags: false,
    description: false,
  },
  project: {
    category: true,
    tags: true,
    description: true,
  },
};

interface EditFormProps {
  target: TargetType;
}
const EditForm: FC<EditFormProps> = ({
  target,
}: EditFormProps): ReactElement => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const classes = useStyle();

  const handleTagCreate = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleTagDelete = (index: number) => {
    setTags(tags.filter((_, i) => index !== i));
  };

  const handleSubmit = () => {
    console.log("submit: ", target, {
      title,
      description,
      content,
      tags,
      categoryId,
    });
  };

  return (
    <div className={classes.form}>
      <h2>Title</h2>
      <TextInput
        value={title}
        onChange={(title: string) => setTitle(title)}
        placeholder="Enter your title here..."
      />
      <div className={classes.content}>
        <h2>Content</h2>
        <CodeEditor
          content={content}
          onChange={(content: string) => setContent(content)}
        />
      </div>

      <div className={classes.categoryAndTags}>
        {formConfig[target].category && (
          <div className={classes.category}>
            <h2>Category</h2>
            <Dropdown
              onSelect={(categoryId: string) => setCategoryId(categoryId)}
              options={fakeOptions}
            />
          </div>
        )}

        {formConfig[target].tags && (
          <div className={classes.tags}>
            <h2>Tags</h2>
            <TagInput
              tags={tags}
              onTagCreate={handleTagCreate}
              onTagDelete={handleTagDelete}
            />
          </div>
        )}
      </div>

      {formConfig[target].description && (
        <div>
          <h2>Description</h2>
          <TextInput
            value={description}
            className={classes.description}
            onChange={(description: string) => setDescription(description)}
            placeholder="Enter your description here..."
            multiColumn
          />
        </div>
      )}

      <div className={classes.buttons}>
        <Button label="Cancel" theme="warning" onClick={() => {}} />
        <Button label="Submit" theme="success" onClick={handleSubmit} />
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {},
  form: {
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

export default EditForm;
