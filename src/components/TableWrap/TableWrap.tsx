import * as React from "react";
import { useTableWrapStyles } from "./TableWrap.styles";

interface TableWrapProps {
  children?: React.ReactNode;
}

export const TableWrap: React.FC<TableWrapProps> = (props) => {
  const classes = useTableWrapStyles();
  return <div className={classes.root}>{props.children}</div>;
};
