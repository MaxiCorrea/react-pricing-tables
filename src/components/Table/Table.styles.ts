import { createUseStyles } from "react-jss";

export const useTableStyles = createUseStyles({
  root: {
    textAlign : "center",
    margin : "20px",
    boxShadow : "1px 0 10px 15px rgba(0,0,0,.1)",
    transition : "transform 1.6s",
    '&:hover': {
      transform : "scale(1.1)",
    }
  },
});
