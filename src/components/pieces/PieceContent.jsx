import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import FadeDiv from "../common/animated/FadeDiv";
import Markdown from "../common/Markdown";

const PieceContent = ({ piece, onClose, selectedId, ...props }) => {
  const classes = useStyle();
  return (
    <FadeDiv triggerProp={selectedId} className={classes.container} {...props}>
      <div className={classes.closeButton} onClick={onClose}></div>
      {piece && (
        <Markdown markdown={piece.markdown} className={classes.content} />
      )}
    </FadeDiv>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "fixed",
    top: "60px",
    right: "50px",
    overflow: "scroll",
    borderRadius: "10px",
    padding: "30px",
    width: "40%",
    height: "720px",
    boxShadow: "3px 3px 4px" + colors.medium,
    backgroundColor: colors.light,
  },
  content: {
    "& h1": {
      textAlign: "center",
      fontWeight: "700",
    },
  },
  closeButton: {
    position: "fixed",
    top: "15px",
    right: "15px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: colors.dark,
  },
});

export default PieceContent;
