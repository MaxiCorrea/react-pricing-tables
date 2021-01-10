import * as React from "react";
import { useTableButtonStyles } from "./TableButton.styles";

type colorType = "basic" | "enterprice" | "standard";

interface TableButtonProps {
  caption: string;
  color: colorType;
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
