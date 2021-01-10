import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
  header : {
    textAlign : "center",
    padding : "25px",
  },
  title: {
    fontFamily:"Rubik",
    fontSize : "40px",
    letterSpacing : "2px",
  },
  subtitle : {
    fontFamily:"Rubik",
    fontSize : "20px",
    letterSpacing : "2px",
    textAlign : "center",
  }
});
