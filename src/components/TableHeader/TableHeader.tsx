import * as React from "react";

interface TableHeaderProps {
  title: string;
}

export const TableHeader: React.FC<TableHeaderProps> = (props) => {
  return <div>{props.title}</div>;
};
