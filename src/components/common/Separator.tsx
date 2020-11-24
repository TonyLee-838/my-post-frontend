import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";

interface SeparatorProps {
  color?: string;
  width?: string | number;
}

const Separator = ({ color, width }: SeparatorProps) => {
  const styles = useStyle({ color, width });

  return <div className={styles.line}></div>;
};

const useStyle = createUseStyles({
  line: {
    width: ({ width }) => (width ? width : "100%"),
    height: "2px",
    opacity: "0.8",
    backgroundColor: ({ color }) => (color ? color : colors.light),
  },
});

export default Separator;
