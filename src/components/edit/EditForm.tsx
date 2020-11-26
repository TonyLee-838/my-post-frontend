import React, { FC, ReactElement, useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

import Button from "../common/Button";
import CodeEditor from "../common/CodeEditor";
import Dropdown from "../common/dropdown/Dropdown";
import TagInput from "../common/TagInput";
import TextInput from "../common/TextInput";
import { postPiece } from "../../api/pieces";
import { postPost } from "../../api/posts";
import { TargetType } from "./TypeBar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import fontFamilies from "../../config/fontFamily";

const formConfig = {
  post: {
    category: true,
    tags: true,
    description: true,
  },
  piece: {
    category: false,
    tags: false,
    description: false,
  },
  project: {
    category: true,
    tags: true,
    description: true,
  },
};

type CategoryType = {
  _id: string;
  name: string;
  icon: string;
  color: string;
};
interface EditFormProps {
  target: TargetType;
}
const EditForm: FC<EditFormProps> = ({
  target,
}: EditFormProps): ReactElement => {
  const [categoryId, setCategoryId] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  const categories: CategoryType[] = useContext(CategoriesContext);
  const options = categories.map((c) => ({ value: c._id, label: c.name }));

  const classes = useStyle();

  const history = useHistory();

  const handleTagCreate = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleTagDelete = (index: number) => {
    setTags(tags.filter((_, i) => index !== i));
  };

  const handleSubmit = async () => {
    //TODO: data validation:
    const userId = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("x-auth-token");
    if (!token || !userId) return;

    try {
      if (target === "piece") {
        await postPiece({ title, content, userId }, token);
      } else if (target === "post") {
        await postPost(
          { title, content, userId, categoryId, description, tags },
          token
        );
      }
      history.push(`/${target}s`);
    } catch (error) {
      console.log(error);
    }
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
        <CodeEditor onChange={(content: string) => setContent(content)} />
      </div>

      <div className={classes.categoryAndTags}>
        {formConfig[target].category && (
          <div className={classes.category}>
            <h2>Category</h2>
            <Dropdown
              onSelect={(categoryId: string) => setCategoryId(categoryId)}
              options={options}
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
