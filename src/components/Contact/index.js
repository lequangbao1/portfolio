import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Input,
  InputArea,
  Row,
  Column,
  Button,
  Wrapper,
  SectionTitle,
  Text,
} from "./styles/Contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Contact.Subtitle = function ContactSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Contact.Input = function ContactInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};
Contact.InputArea = function ContactInputArea({ children, ...restProps }) {
  return <InputArea {...restProps} />;
};

Contact.Wrapper = function ConctactWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Contact.Row = function ContactRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Contact.Column = function ContactColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Contact.SectionTitle = function ContactSectionTitle({
  children,
  ...restProps
}) {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Contact.Button = function ContactButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
