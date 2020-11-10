import React from "react";
import Icon from "./Icon";

function ListItem({
  icon,
  label,
  styles = { container: "", label: "", icon: "" },
}) {
  return (
    <div className={styles.container}>
      <Icon name={icon} styles={styles.icon} />
      <label className={styles.label}>{label}</label>
    </div>
  );
}

export default ListItem;
