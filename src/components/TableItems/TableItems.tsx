import * as React from "react";

interface TableItemsProps {
  children? : React.ReactNode; 
}

export const TableItems: React.FC<TableItemsProps> = (props) => {
  return <ul>{props.children}</ul>;
};
