import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import PieceContent from "./pieces/PieceContent";
import PieceList from "./pieces/PieceList";
import { getPieces, PieceType } from "../api/pieces";
import Main from "./common/Main";
import ToolBar from "./common/toolBar/ToolBar";
import Separator from "./common/Separator";
import colors from "../config/color";

const PieceMain = () => {
  // eslint-disable-next-line
  const [pieces, setPieces] = useState<PieceType[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [positionIndex, setPositionIndex] = useState(0);
  const classes = useStyle();

  useEffect(() => {
    async function fetchData() {
      const data = await getPieces();
      setPieces(data);
    }

    fetchData();
  }, []);

  const handleSelect = (id: string, index: number) => {
    if (selectedId) setSelectedId("");

    // Reselect piece itself, reset everything.
    if (selectedId === id) return;

    setTimeout(() => {
      setPositionIndex(index);
      setSelectedId(id);
    }, 100);
  };

  const handleClose = () => {
    setSelectedId("");
  };

  return (
    <Main>
      <div className={classes.container}>
        <PieceList
          pieces={pieces}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
        <PieceContent
          id="piece-content"
          positionIndex={positionIndex}
          piece={pieces.find((piece) => piece.id === selectedId)}
          selectedId={selectedId}
          onClose={handleClose}
        />
      </div>
    </Main>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    overflow: "clip",
  },
});

export default PieceMain;
