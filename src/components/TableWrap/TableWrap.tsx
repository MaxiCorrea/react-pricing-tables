import * as React from "react";
import { useTableWrapStyles } from "./TableWrap.styles";

export const TableWrap: React.FC = (props) => {
  const classes = useTableWrapStyles();
  return <div className={classes.root}>{props.children}</div>;
};
