import React from "react";
import { Container, Title, Text, Pane, Copyright } from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Pane = function FooterPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
  return <Copyright {...restProps}>{children}</Copyright>;
};
