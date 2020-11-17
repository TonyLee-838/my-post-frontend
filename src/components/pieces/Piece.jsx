import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

const Piece = ({ piece, isSelected, onSelect }) => {
  const classes = useStyle();
  return (
    <div
      key={piece.id}
      className={`${classes.pieces} ${isSelected ? classes.selected : ""}`}
      onClick={() => onSelect(piece.id)}
    >
      {piece.title}
    </div>
  );
};

const useStyle = createUseStyles({
  pieces: {
    backgroundColor: colors.light,
    borderRadius: "10px",
    boxShadow: "3px 3px 4px" + colors.medium,
    cursor: "pointer",
    fontFamily: fontFamilies.round,
    fontSize: "1.35rem",
    fontWeight: "500",
    margin: "15px",
    padding: "10px",
    transition: "all 100ms ease, transform 25ms ease-in",

    "&:hover": {
      transform: "scale(1.02,1.02)",
    },
  },
  selected: {
    backgroundColor: colors.lightBlue,
    color: colors.white,
  },
});

export default Piece;
