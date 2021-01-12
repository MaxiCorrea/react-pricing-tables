import * as React from "react";
import { MagicSpinner } from "react-spinners-kit";
import { useSpinnerStyles } from "./Spinner.styles";

export const Spinner: React.FC = () => {
  const classes = useSpinnerStyles();
  return (
    <div className={classes.root}>
      <MagicSpinner size={100} color="#000" loading />
    </div>
  );
};
