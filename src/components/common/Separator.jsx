import React from "react";

import { createUseStyles } from "react-jss";

import colors from "../../config/color";

function Separator({ color }) {
  const styles = useStyle();

  return <div className={styles.line}></div>;
}

const useStyle = createUseStyles({
  line: {
    width: "100%",
    height: "2px",
    opacity: "0.8",
    backgroundColor: (color) => (color ? color : colors.light),
  },
});

export default Separator;
