import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";

function ListItem({ icon, label }) {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>{label}</h4>
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    cursor: "pointer",
    padding: "5px 0px 5px 0px",
    borderRadius: "2px",
    "&:hover": {
      backgroundColor: colors.black,
      transition: "background-color 0.3s ease",
    },
  },
  label: {
    transform: "translateX(1.5%)",
    margin: 0,
  },
});

export default ListItem;
