import * as React from "react";
import { useHeaderStyles } from "./Header.styles";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useHeaderStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.subtitle}>{props.subtitle}</p>
    </header>
  );
};
