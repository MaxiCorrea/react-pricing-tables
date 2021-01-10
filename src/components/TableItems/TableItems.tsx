import * as React from "react";
import { useTableItemsStyles } from "./TableItems.styles";

interface TableItemsProps {
  children?: React.ReactNode;
}

export const TableItems: React.FC<TableItemsProps> = (props) => {
  const classes = useTableItemsStyles();
  return <ul className={classes.root}>{props.children}</ul>;
};
