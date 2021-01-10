import * as React from "react";
import { useTableStyles } from "./Table.styles";

interface TableProps {
  children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = (props) => {
  const classes = useTableStyles();
  return <div className={classes.root}>{props.children}</div>;
};
