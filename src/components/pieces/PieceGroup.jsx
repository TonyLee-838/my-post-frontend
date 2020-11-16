import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import TimeItem from "../common/TimeItem";

const PieceGroup = ({ pieces, onSelect, selectedId }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`${classes.pieces} ${
            selectedId === piece.id ? classes.selected : ""
          }`}
          onClick={() => onSelect(piece.id)}
        >
          {piece.title}
        </div>
      ))}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    width: "100%",
    display: "grid",
    padding: "30px",
    gridTemplateColumns: "21% 21% 21%",
    gridAutoRows: "150px",
  },
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

export default PieceGroup;
