import * as React from "react";
import { useHeaderStyles } from "./Header.styles";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useHeaderStyles();
  return (
    <header className={classes.root}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
};
