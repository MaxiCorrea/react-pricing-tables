import * as React from "react";
import { Color } from "../../domains/Color";
import { useTableHeaderStyles } from "./TableHeader.styles";

interface TableHeaderProps {
  title: string;
  color: Color;
}

export const TableHeader: React.FC<TableHeaderProps> = (props) => {
  const classes = useTableHeaderStyles();
  return (
    <div
      className={
        props.color === "basic"
          ? classes.basic
          : props.color === "enterprise"
          ? classes.enterprise
          : classes.standard
      }
    >
      {props.title}
    </div>
  );
};
