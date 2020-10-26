import React from "react";

import Panel from "../common/Panel";
function RecentPostPanel() {
  const content = (
    <p>
      My personal Introduction here!My personal Introduction here!My personal
      Introduction here!My personal Introduction here!My personal Introduction
      here!
    </p>
  );

  return <Panel label="Recent Post" Content={() => content} />;
}

export default RecentPostPanel;
