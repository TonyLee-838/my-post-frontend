import React, { useEffect, useState } from "react";

import PieceContent from "./pieces/PieceContent";
import PieceList from "./pieces/PieceList";
import { getPieces } from "../api/pieces";
import Main from "./common/Main";

const PieceMain = () => {
  // eslint-disable-next-line
  const [pieces, setPieces] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [positionIndex, setPositionIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getPieces();
      console.log("pieces : ", data);
      setPieces(data);
    }

    fetchData();
  }, []);

  const handleSelect = (id, index) => {
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
      <div>
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

export default PieceMain;
