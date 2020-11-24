import React from "react";
import { createUseStyles } from "react-jss";
import boxShadows from "../../../config/boxShadow";

import colors from "../../../config/color";
import IconItem from "../IconItem";
import TextInput from "../TextInput";

const SearchBox = ({ terms, notFound, onTermsChange, onTermsClear }) => {
  const classes = useStyle({ notFound });

  return (
    <div className={classes.container}>
      <IconItem icon="MdSearch" className={classes.searchIcon} />
      <TextInput
        value={terms}
        onChange={onTermsChange}
        className={classes.searchField}
        onClear={onTermsClear}
      />
      <IconItem
        icon="MdClear"
        className={classes.deleteIcon}
        onClick={onTermsClear}
      />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  deleteIcon: {
    cursor: "pointer",
    position: "relative",
    right: "30px",
    borderRadius: "50%",
    opacity: 0.5,
    "& *": {
      fontSize: "1.1rem",
      color: colors.light,
    },
    backgroundColor: colors.dark,
  },
  searchIcon: {
    "& *": {
      color: colors.white,
    },
  },

  searchField: {
    transition: "box-shadow 200ms ease,color 200ms ease",
    backgroundColor: colors.medium,
    marginLeft: "10px",
    color: ({ notFound }) => (notFound ? colors.warning : colors.black),
    boxShadow: ({ notFound }) => (notFound ? boxShadows.warning : ""),
    "&:focus": {
      outline: "none",
    },
  },
});

export default SearchBox;
