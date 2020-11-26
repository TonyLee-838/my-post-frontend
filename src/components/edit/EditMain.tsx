import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import Main from "../common/Main";
import TypeBar, { TargetType } from "./TypeBar";
import EditForm from "./EditForm";

const EditMain = () => {
  const classes = useStyle();
  const [target, setTarget] = useState<TargetType>("post");

  return (
    <Main>
      <div className={classes.container}>
        <TypeBar onSelect={(target: TargetType) => setTarget(target)} />
        <EditForm target={target} />
      </div>
    </Main>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

export default EditMain;
