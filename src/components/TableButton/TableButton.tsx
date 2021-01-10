import * as React from "react";

interface TableButtonProps {
  caption: string;
}

export const TableButton: React.FC<TableButtonProps> = (props) => {
  return <a href={"#"}> {props.caption}</a>;
};
