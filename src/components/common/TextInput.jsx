import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";

/**
 * @param value the value of the input box.
 * @param {boolean} multiColumn allow enter content in multiple lines. By default the value is false.
 */

const TextInput = ({ multiColumn = false, onChange, placeholder = "" }) => {
  const classes = useStyle();

  const Input = () =>
    multiColumn ? (
      <textarea className={`${classes.input} ${classes.multiple}`} />
    ) : (
      <input className={classes.input} />
    );

  return (
    <Input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

const useStyle = createUseStyles({
  input: {
    width: "75%",
    height: "35px",
    fontSize: "1.15rem",
    borderStyle: "none",
    boxShadow: " 0px 0px 2px " + colors.lightBlue,

    "&:active": {
      transition: "all 200ms ease",
      borderColor: "red",
    },
  },
  multiple: {
    height: "200px",
    resize: "none",
  },
});

export default TextInput;
