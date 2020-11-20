import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Tag from "./Tag";

const TagInput = (props) => {
  const [tags, setTags] = useState(["1", "2"]);
  const [value, setValue] = useState("");
  const [padding, setPadding] = useState(0);

  const classes = useStyle({ padding });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key.match(/[, ]|^Enter$/)) {
      setPadding(padding + e.target.value.length * 9 + 40);
      setTags([...tags, e.target.value.replace(/,/, "")]);
      setValue("");
    }
  };

  const handleDelete = (e, index) => {
    const charNum = e.target.parentElement.firstChild.innerText.length;
    const paddingExtra = padding - charNum * 9 - 40;

    setPadding(paddingExtra > 0 ? paddingExtra : 0);
    setTags(tags.filter((_, i) => index !== i));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.tags}>
          {tags.map((tag, index) => (
            <Tag
              content={tag}
              key={`tag-${index}`}
              onDelete={(e) => handleDelete(e, index)}
            />
          ))}
        </div>
        <input
          value={value}
          className={classes.input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

const useStyle = createUseStyles({
  container: {
    width: "70%",
  },
  input: {
    paddingLeft: ({ padding }) => `${padding + 5}px`,
    width: "100%",
    height: "40px",
  },
  tags: {
    position: "absolute",
    marginTop: "15px",
    paddingLeft: "5px",
    height: "30px",
  },
});

export default TagInput;
