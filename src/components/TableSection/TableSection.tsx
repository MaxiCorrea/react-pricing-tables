import * as React from "react";
import { useTableSectionStyles } from "./TableSection.styles";

export const TableSection: React.FC = (props) => {
  const classes = useTableSectionStyles();
  return <section className={classes.root}>{props.children}</section>;
};
