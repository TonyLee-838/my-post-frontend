import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

/**
 * @param value the value of the input box.
 * @param {boolean} multiColumn allow enter content in multiple lines. By default the value is false.
 */

const TextInput = ({
  value,
  multiColumn = false,
  onChange,
  placeholder = "",
  className = "",
  type = "text",
}) => {
  const classes = useStyle();

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return multiColumn ? (
    <textarea
      value={value}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      className={`${classes.input} ${classes.multiple} ${className}`}
    />
  ) : (
    <input
      value={value}
      className={`${classes.input} ${className}`}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

const useStyle = createUseStyles({
  input: {
    width: "100%",
    height: "35px",
    fontSize: "1.15rem",
    fontFamily: fontFamilies.text,
    borderStyle: "none",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px " + colors.lightBlue,
  },
  multiple: {
    height: "100px",
    resize: "none",
  },
});

export default TextInput;
