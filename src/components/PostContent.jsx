import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";
import AppMarkdown from "./AppMarkdown";

const md = `
# SVG notes

---

## What is SVG?

- SVG is short for **Scalable vector graphics**
- It provides perfect shapes that are independent to screen solution. It doesn't get pixilated when zooming in.

- SVG describes _two-dimensional_ graphics in **XML**. It allows two-dimensional images(texts,shapes...) to be described in code as _vector points_. As vectors describe _relative points_, they are easy-scalable to any size without losing any fidelity(meaning precision in picture).
- **Tiny** file scale compared to JPEG,GIF,PNG.

## SVG under the hood

- SVG is written in **Extensible Markup Language (XML)**.

  ## SVG tags:

  ### 1. svg tag \`<svg>\`

  - root element of every SVG.
  - _width & height_ attributes: create a viewport where we can define our shape. When size of content is greater than the viewport they defines, it's going to be hidden from the current view.
  - _viewbox_ attribute: defines the _coordinate system_ where all the shapes of SVG have to be placed.

    \`\`\`txt
    viewbox=" min-x min-y max-x max-y"
    \`\`\`

    With viewbox, we can _zoom in_ or _zoom our_ by changing the values of viewbox.

  - _xmlns(XML Namespace)_ It references the programs that generated it. Most of the time it's unneeded out of optimization process for reducing the size of SVG.

    Here's an example:

  \`\`\`xml
    <svg width="198px" height="198px" viewbox="0 0 99 94"  xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
    </svg>
    \`\`\`
`;

function PostContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppMarkdown markdown={md} />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    marginTop: "60px",
    width: "100%",
    padding: {
      left: "20px",
      right: "40px",
    },
    backgroundColor: colors.white,
    boxShadow: "-3px -2px 7px 1px" + colors.black,
  },
});

export default PostContent;
