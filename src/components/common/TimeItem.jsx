import React from "react";
import moment from "moment";
import fontFamilies from "../../config/fontFamily";
import IconItem from "./IconItem";
import colors from "../../config/color";

const TimeItem = ({
  time,
  format = "MMM DD HH:mm",
  hideIcon = false,
  ...props
}) => {
  return (
    <IconItem
      {...props}
      styles={styles(hideIcon)}
      icon={hideIcon ? "" : "MdDateRange"}
      label={getTimeString(time, format)}
    />
  );
};

const getTimeString = (time, format) => {
  const date = new Date(
    typeof time === "string" ? Number.parseInt(time) : time
  );
  return moment(date).format(format);
};

const styles = (hideIcon) => ({
  container: {
    alignItems: "center",
    width: "max-content",
  },
  label: {
    fontSize: "1.15rem",
    fontFamily: fontFamilies.text,
    color: colors.dark,
    marginLeft: hideIcon ? "" : "20px",
  },
});

export default TimeItem;
