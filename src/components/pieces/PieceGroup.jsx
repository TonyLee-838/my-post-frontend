import React from "react";
import { createUseStyles } from "react-jss";
import Piece from "./Piece";

const PieceGroup = ({ pieces, onSelect, selectedId }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {pieces.map((piece) => (
        <Piece
          piece={piece}
          isActive={selectedId}
          isSelected={selectedId === piece.id}
          onSelect={onSelect}
        />
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
});

export default PieceGroup;
