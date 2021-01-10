import * as React from "react";
import { useTableHeaderStyles } from "./TableHeader.styles";

type colorType = "basic" | "enterprice" | "standard";

interface TableHeaderProps {
  title: string;
  color: colorType;
}

export const TableHeader: React.FC<TableHeaderProps> = (props) => {
  const classes = useTableHeaderStyles();
  return (
    <div
      className={
        props.color === "basic"
          ? classes.basic
          : props.color === "enterprice"
          ? classes.enterprice
          : classes.standard
      }
    >
      {props.title}
    </div>
  );
};
