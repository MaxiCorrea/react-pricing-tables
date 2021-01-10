import { createUseStyles } from "react-jss";

export const useTableHeaderStyles = createUseStyles({ 
  basic: {
    fontSize : "30px",
    padding : "20px",
    borderTopLeftRadius : "4px",
    borderTopRightRadius : "4px",
    backgroundColor : "red"
  },
  enterprice : {
    fontSize : "30px",
    padding : "20px",
    borderTopLeftRadius : "4px",
    borderTopRightRadius : "4px",
    backgroundColor : "blue"
  },
  standard : {
    fontSize : "30px",
    padding : "20px",
    borderTopLeftRadius : "4px",
    borderTopRightRadius : "4px",
    backgroundColor : "green"
  },
});