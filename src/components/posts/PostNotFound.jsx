import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

function PostNotFound() {
  const classes = useStyle();
  return (
    <div className={classes.card}>
      <h2 className={classes.message}>
        Oops! Nothing has been found!
        <span role="img" aria-label="cry">
          😢
        </span>
      </h2>
    </div>
  );
}

const useStyle = createUseStyles({
  card: {
    backgroundColor: colors.white,
    padding: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontWeight: 850,
    fontSize: "2rem",
    fontFamily: fontFamilies.headline,
  },
});

export default PostNotFound;
