import { createUseStyles } from "react-jss";

export const useTableButtonStyles = createUseStyles({
  basic: {
    fontFamily:"Rubik",
    textDecoration : "none",
    display : "block",
    margin : "0 auto",
    width : "80%",
    padding : "15px",
    borderRadius : "8px",
    backgroundColor : "#6ab04c",
    color : "#fff",
    "&:hover": {
      backgroundColor : "#78b25f",
    },
  },
  enterprise : {
    fontFamily:"Rubik",
    textDecoration : "none",
    display : "block",
    margin : "0 auto",
    width : "80%",
    padding : "15px",
    borderRadius : "8px",
    backgroundColor : "#641E16",
    color : "#fff",
    "&:hover": {
      backgroundColor : "#712c25",
    },
  },
  standard : {
    fontFamily:"Rubik",
    textDecoration : "none",
    display : "block",
    margin : "0 auto",
    width : "80%",
    padding : "15px",
    borderRadius : "8px",
    backgroundColor : "#4A235A",
    color : "#fff",
    "&:hover": {
      backgroundColor : "#6b3880",
    },
  },
});
