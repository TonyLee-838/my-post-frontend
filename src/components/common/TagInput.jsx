import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";

import Tag from "./Tag";

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

  const handleChange = (e) => {
    if (isConfirmKey(e.target.value)) return;
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (value && isConfirmKey(e.key)) {
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
    paddingLeft: ({ padding }) => `${padding}px`,
    width: "100%",
    height: "40px",
  },
  tags: {
    position: "absolute",
    marginTop: "5px",
    paddingLeft: "10px",
    height: "30px",
  },
});

export default TagInput;
