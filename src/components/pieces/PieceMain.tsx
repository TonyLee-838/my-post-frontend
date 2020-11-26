import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import PieceContent from "./PieceContent";
import PieceList from "./PieceList";
import Main from "../common/Main";
import { getPieces, PieceReceiveType } from "../../api/pieces";
import ToolBar from "../common/toolBar/ToolBar";

const PieceMain = () => {
  // eslint-disable-next-line
  const [pieces, setPieces] = useState<PieceReceiveType[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [terms, setTerms] = useState("");

  const classes = useStyle();

  useEffect(() => {
    async function fetchData() {
      const data = await getPieces();
      setPieces(data);
    }

    fetchData();
  }, []);

  const handleSelect = (id: string) => {
    if (selectedId) setSelectedId("");

    // Reselect piece itself, reset everything.
    if (selectedId === id) return;

    setSelectedId(id);
  };

  const filtered = terms
    ? pieces.filter((post) => post.title.includes(terms))
    : pieces;

  const notFound = terms && !filtered.length;

  return (
    <Main>
      <div className={classes.container}>
        <PieceList
          pieces={filtered}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
        <PieceContent selectedId={selectedId} />
        <ToolBar
          terms={terms}
          onSearch={setTerms}
          notFound={notFound}
          onClear={() => {
            setTerms("");
          }}
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
