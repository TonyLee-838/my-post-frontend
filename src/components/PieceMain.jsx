import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
import Fade from "./common/animation/Fade";
import PieceContent from "./pieces/PieceContent";

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

const PieceMain = (props) => {
  const [pieces, setPieces] = useState(data);
  const [selectedId, setSelectedId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (id) => {
    if (visible) setVisible(false);
    setTimeout(() => {
      setSelectedId(id);
      setVisible(true);
    }, 100);
  };

  const handleClose = () => {
    setVisible(false);
    setSelectedId("");
  };

  const classes = useStyle();

  return (
    <div id="piece-container" className={classes.container}>
      {pieces.map((piece) => (
        <>
          <div
            key={piece.id}
            className={classes.pieces}
            onClick={() => handleClick(piece.id)}
          >
            {piece.title}
          </div>
        </>
      ))}
      <Fade triggerProp={visible} className={classes.content}>
        <PieceContent
          id="piece-content"
          piece={pieces.find((piece) => piece.id === selectedId)}
          onClose={handleClose}
        />
      </Fade>
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
  content: {
    position: "fixed",
    top: "60px",
    right: "60px",
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

export default PieceMain;
