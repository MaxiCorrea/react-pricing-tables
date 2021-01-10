import * as React from "react";
import { useTableItemStyles } from "./TableItem.styles";

interface TableItemProps {
  text: string;
}

export const TableItem: React.FC<TableItemProps> = (props) => {
  const classes = useTableItemStyles();
  return <li className={classes.root}>{props.text}</li>;
};
