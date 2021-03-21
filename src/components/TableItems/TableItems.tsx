import * as React from "react";
import { useTableItemsStyles } from "./TableItems.styles";

export const TableItems: React.FC = (props) => {
  const classes = useTableItemsStyles();
  return <ul className={classes.root}>{props.children}</ul>;
};
