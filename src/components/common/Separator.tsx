import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";

interface SeparatorProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  vertical?: boolean;
}

const Separator = ({
  color,
  width,
  vertical = false,
  height,
}: SeparatorProps) => {
  const styles = useStyle({ color, width, vertical });

  return <div className={styles.line}></div>;
};

const useStyle = createUseStyles({
  line: {
    width: ({ width, vertical }) => (width ? width : vertical ? "2px" : "100%"),
    height: ({ height, vertical }) =>
      height ? height : vertical ? "auto" : "2px",
    opacity: "0.8",
    backgroundColor: ({ color }) => (color ? color : colors.light),
  },
});

export default Separator;
