import * as React from "react";

interface TableItemProps {
  text: string;
}

export const TableItem: React.FC<TableItemProps> = (props) => {
  return <li>{props.text}</li>;
};
