import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../../config/color";
import IconItem from "../IconItem";
import TextInput from "../TextInput";

const SearchBox = ({ onTermsChange, onSubmit }) => {
  const classes = useStyle();
  console.log("classes : ", classes);
  return (
    <div className={classes.container}>
      <TextInput onChange={onTermsChange} className={classes.searchField} />
      <IconItem
        icon="MdSearch"
        className={classes.searchIcon}
        onClick={onSubmit}
      />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    "& *": {
      color: colors.white,
    },
  },
  searchIconContainer: {
    display: "flex",
  },

  searchField: {
    backgroundColor: colors.medium,
    margin: "0px 20px 0px 15px",
  },
});

export default SearchBox;
