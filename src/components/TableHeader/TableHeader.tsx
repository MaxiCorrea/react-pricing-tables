import * as React from "react";
import { ColorType } from "../../domains/ColorType";
import { useTableHeaderStyles } from "./TableHeader.styles";

interface TableHeaderProps {
  title: string;
  color: ColorType;
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
