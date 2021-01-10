import * as React from "react";

interface TableProps {
  children? : React.ReactNode;
}

export const Table: React.FC<TableProps> = (props) => {
  return <div>{props.children}</div>;
};
