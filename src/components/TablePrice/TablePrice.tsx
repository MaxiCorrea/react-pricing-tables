import * as React from "react";
import { useTablePriceStyles } from "./TablePrice.styles";

interface TablePriceProps {
  price: number;
}

export const TablePrice: React.FC<TablePriceProps> = (props) => {
  const classes = useTablePriceStyles();
  return (
    <h4 className={classes.priceValue}>
      <small className={classes.priceSimbol}>{"$"}</small>
      {props.price}
    </h4>
  );
};
