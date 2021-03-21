import * as React from "react";
import { useTableStyles } from "./Table.styles";

export const Table: React.FC = (props) => {
  const classes = useTableStyles();
  return <div className={classes.root}>{props.children}</div>;
};
