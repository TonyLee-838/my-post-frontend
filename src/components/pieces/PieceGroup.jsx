import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import TimeItem from "../common/TimeItem";

const PieceGroup = ({ pieces, onSelect }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {pieces.map((piece) => (
        <>
          <div
            key={piece.id}
            className={classes.pieces}
            onClick={() => onSelect(piece.id)}
          >
            {piece.title}
          </div>
        </>
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
    borderRadius: "10px",
    margin: "15px",
    padding: "10px",
    fontFamily: fontFamilies.round,
    fontSize: "1.35rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "3px 3px 4px" + colors.medium,
  },
});

export default PieceGroup;
