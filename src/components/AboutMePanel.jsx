import React from "react";
import Panel from "../common/Panel";

function NavPanel() {
  const content = (
    <p>
      My personal Introduction here!My personal Introduction here!My personal
      Introduction here!My personal Introduction here!My personal Introduction
      here!
    </p>
  );

  return <Panel label="About Me" Content={() => content} />;
}

export default NavPanel;
