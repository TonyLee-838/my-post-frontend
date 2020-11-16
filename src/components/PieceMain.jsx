import React from "react";
import { useState } from "react";
import PieceContent from "./pieces/PieceContent";
import PieceList from "./pieces/PieceList";

const data = [
  {
    id: "d1",
    timeCreated: new Date(2020, 9, 30, 12, 32, 32),
    title: `Setup custom snippets in VSCode1.`,
    markdown: `# setting up snippets:\n - Do something.\n - Do another thing.\n - 1`,
  },
  {
    id: "d2",
    timeCreated: new Date(2020, 9, 30, 12, 31, 32),
    title: `Setup custom snippets in VSCode2.`,
    markdown: `# setting up snippets:\n - Do something.\n - Do another thing.\n - 2`,
  },
  {
    id: "d3",
    timeCreated: new Date(2020, 9, 30, 12, 30, 32),
    title: `Setup custom snippets in VSCode3.`,
    markdown: `# setting up snippets:\n - Do something.\n - Do another thing.\n - 3`,
  },
  {
    id: "d4",
    timeCreated: new Date(2020, 9, 28, 11, 31, 32),
    title: `Setup custom snippets in VSCode4.`,
    markdown: `# setting up snippets:\n - Do something.\n - Do another thing.\n - 4 `,
  },
  {
    id: "d5",
    timeCreated: new Date(2020, 9, 28, 11, 28, 32),
    title: `Setup custom snippets in VSCode5.`,
    markdown: `# setting up snippets:\n - Do something.\n - Do another thing.\n -5`,
  },
  {
    id: "d6",
    timeCreated: new Date(2020, 9, 27, 11, 18, 32),
    title: `Setup custom snippets in VSCode6.`,
    markdown: `# setting up snippets:\n - Do something.\n - Do another thing.\n-6`,
  },
];

const PieceMain = () => {
  const [pieces, setPieces] = useState(data);
  const [selectedId, setSelectedId] = useState("");

  const handleSelect = (id) => {
    if (selectedId) setSelectedId("");
    setTimeout(() => {
      setSelectedId(id);
    }, 100);
  };

  const handleClose = () => {
    setSelectedId("");
  };

  return (
    <div>
      <PieceList pieces={pieces} onSelect={handleSelect} />
      <PieceContent
        id="piece-content"
        piece={pieces.find((piece) => piece.id === selectedId)}
        selectedId={selectedId}
        onClose={handleClose}
      />
    </div>
  );
};

export default PieceMain;
