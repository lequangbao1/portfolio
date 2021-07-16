import React from "react";
import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  Subtitle,
  SectionTitle,
  Text,
  Image,
  Pane,
} from "./styles/About";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.Subtitle = function AboutSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

About.Column = function AboutColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

About.Row = function AboutRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
About.Pane = function AboutPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

About.Image = function AboutImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};

About.SectionTitle = function AboutSectionTitle({ children, ...restProps }) {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.Wrapper = function AboutWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
