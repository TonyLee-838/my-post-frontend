/* eslint-disable */
import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import Markdown from "../common/Markdown";

// const POSITIONS = [20, 6, 41, 26];

const PieceContent = ({
  onClose,
  piece,
  positionIndex: index,
  selectedId,
  ...props
}) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        {piece && (
          <Markdown markdown={piece.content} className={classes.content} />
        )}
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    marginTop: "75px",
    padding: "30px 20px 30px 20px",
    width: "30%",
    height: "80%",
    overflow: "scroll",
  },

  contentContainer: {
    backgroundColor: colors.light,
    borderRadius: "10px",
    boxShadow: `3px 3px 4px${colors.medium}`,
    padding: "30px",
  },
  content: {
    "& h1": {
      textAlign: "center",
      fontWeight: "700",
    },
  },
});

export default PieceContent;
