import * as React from "react";

interface TablePriceProps {
  price: number;
}

export const TablePrice: React.FC<TablePriceProps> = (props) => {
  return (
    <h4>
      <small>{"$" + props.price}</small>
    </h4>
  );
};
