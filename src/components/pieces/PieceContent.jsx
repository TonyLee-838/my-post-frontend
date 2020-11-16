import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";

const PieceContent = ({ piece = {}, onClose, ...props }) => {
  const classes = useStyle();
  return (
    <div className={classes.container} {...props}>
      <div className={classes.closeButton} onClick={onClose}></div>
      {piece && piece.markdown}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    borderRadius: "10px",
    padding: "30px",
    width: "430px",
    height: "700px",
    boxShadow: "3px 3px 4px" + colors.medium,
    backgroundColor: colors.white,
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: colors.dark,
  },
});

export default PieceContent;
