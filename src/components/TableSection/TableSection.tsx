import * as React from "react";
import { useTableSectionStyles } from "./TableSection.styles";

interface TableSectionProps {
  children? : React.ReactNode;
}

export const TableSection: React.FC<TableSectionProps> = (props) => {
  const classes = useTableSectionStyles();
  return <section className={classes.root}>{props.children}</section>;
};
