import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

/**
 * @param value the value of the input box.
 * @param {boolean} multiColumn allow enter content in multiple lines. By default the value is false.
 */

const TextInput = ({
  multiColumn = false,
  onChange,
  placeholder = "",
  className,
  ...props
}) => {
  const classes = useStyle();

  return multiColumn ? (
    <textarea
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      {...props}
      className={`${classes.input} ${classes.multiple} ${className}`}
    />
  ) : (
    <input
      className={`${classes.input} ${className}`}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      {...props}
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
