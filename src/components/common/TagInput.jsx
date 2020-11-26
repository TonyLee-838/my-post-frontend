import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";

import Tag from "./Tag";
import TextInput from "./TextInput";

const isConfirmKey = (key) => key.match(/^,| |Enter$/);

const TagInput = ({
  onTagCreate,
  onTagDelete,
  tags,
  className = "",
  tagClassName = "",
}) => {
  const [value, setValue] = useState("");
  const [padding, setPadding] = useState(0);

  const TagContainer = useRef();

  const classes = useStyle({ padding });

  useEffect(() => {
    setPadding(TagContainer.current.offsetWidth);
  }, [tags]);

  const handleChange = (value) => {
    console.log("value : ", value);
    if (isConfirmKey(value)) return;
    setValue(value);
  };

  const handleKeyDown = (e) => {
    console.log("e.key : ", e.key);
    if (value && isConfirmKey(e.key)) {
      console.log("e.target.value : ", e.target.value);
      onTagCreate(e.target.value);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    onTagDelete(index);
  };

  return (
    <>
      <div className={`${classes.container} ${className}`}>
        <div className={classes.tags} ref={TagContainer}>
          {tags.map((tag, index) => (
            <Tag
              className={tagClassName}
              content={tag}
              key={`tag-${index}`}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>

        <TextInput
          value={value}
          className={classes.input}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

const useStyle = createUseStyles({
  container: {
    width: "100%",
  },
  input: {
    paddingLeft: ({ padding }) => `${padding}px`,
    width: ({ padding }) => `calc(100% - ${padding}px)`,
    height: "45px",
  },
  tags: {
    position: "absolute",
    marginTop: "5px",
    height: "30px",
    paddingLeft: "10px",
  },
});

export default TagInput;
