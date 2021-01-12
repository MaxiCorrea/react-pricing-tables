import * as React from "react";
import { Color } from "../../domains/Color";
import { useTableButtonStyles } from "./TableButton.styles";

interface TableButtonProps {
  caption: string;
  color: Color;
  href : string;
}

export const TableButton: React.FC<TableButtonProps> = (props) => {
  const classes = useTableButtonStyles();
  return (
    <a
      href={props.href}
      className={
        props.color === "basic"
          ? classes.basic
          : props.color === "enterprice"
          ? classes.enterprice
          : classes.standard
      }
    >
      {props.caption}
    </a>
  );
};
