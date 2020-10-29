import React from "react";
import Markdown from "markdown-to-jsx";
import colors from "../config/color";

// Custom Markdown Html Element
const AppH1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

const AppCodeBlock = ({ children, ...props }) => (
  <pre {...props}>{children}</pre>
);

function AppMarkdown({ markdown }) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: AppH1,
            props: { style: style.h1 },
          },
          pre: {
            component: AppCodeBlock,
            props: { style: style.pre },
          },
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}

const style = {
  h1: {
    textAlign: "center",
  },
  pre: {
    backgroundColor: colors.light,
  },
};

export default AppMarkdown;
