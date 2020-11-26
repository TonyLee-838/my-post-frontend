import React from "react";
import { createUseStyles } from "react-jss";
/* eslint-disable no-unused-vars */
import codemirror from "codemirror";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "codemirror/mode/markdown/markdown";
import "../../../assets/css/codemirror.css";

const CodeEditor = ({ onChange, className = "" }) => {
  const classes = useStyle();
  return (
    <CodeMirror
      options={{
        mode: "markdown",
        lineNumbers: true,
        theme: "base16-light",
      }}
      className={`${classes.editor} ${className}`}
      onChange={(editor, data, value) => {
        onChange(value);
      }}
    />
  );
};

const useStyle = createUseStyles({
  editor: {
    width: "100%",
    height: "100%",
  },
});

export default CodeEditor;
