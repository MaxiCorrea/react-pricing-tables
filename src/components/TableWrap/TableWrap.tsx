import * as React from "react";

interface TableWrapProps {
  children? : React.ReactNode;
}

export const TableWrap: React.FC<TableWrapProps> = (props) => {
  return <div>{props.children}</div>;
};
