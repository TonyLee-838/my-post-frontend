import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import FadeDiv from "../common/animated/FadeDiv";
import Markdown from "../common/Markdown";

const POSITIONS = [20, 6, 41, 26];

const PieceContent = ({
  onClose,
  piece,
  positionIndex: index,
  selectedId,
  ...props
}) => {
  const classes = useStyle({ index });

  return (
    <FadeDiv triggerProp={selectedId} className={classes.container} {...props}>
      <div className={classes.controlBar}>
        <div className={classes.closeButton} onClick={onClose}></div>
      </div>

      {piece && (
        <Markdown markdown={piece.markdown} className={classes.content} />
      )}
    </FadeDiv>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "fixed",
    top: "5%",
    right: ({ index }) => `${POSITIONS[index]}%`,
    borderRadius: "10px",
    padding: "30px",
    width: "30%",
    height: "80%",
    boxShadow: "3px 3px 4px" + colors.medium,
    backgroundColor: colors.light,
    overflowX: "hidden",
  },
  content: {
    "& h1": {
      textAlign: "center",
      fontWeight: "700",
    },
  },
  controlBar: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "100%",
    height: "30px",
    backgroundColor: colors.medium,
  },
  closeButton: {
    cursor: "pointer",
    position: "fixed",
    top: "5px",
    left: "5px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: colors.secondary,
  },
});

export default PieceContent;
