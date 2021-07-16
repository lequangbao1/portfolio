import React from "react";
import {
  Container,
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Wrapper,
  Box,
  User,
  Phone,
  Mail,
  Checked,
  Medal,
  Support,
  Link,
  Pane,
} from "./styles/Icons";

export default function Icons({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Icons.Box = function IconsBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Icons.Wrapper = function IconsWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Icons.Pane = function IconsPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Icons.Facebook = function IconsFacebook({ children, ...restProps }) {
  return <Facebook />;
};

Icons.Github = function IconsGithub({ children, ...restProps }) {
  return <Github />;
};

Icons.Linkedin = function IconsLinkedin({ children, ...restProps }) {
  return <Linkedin />;
};
Icons.Twitter = function IconsTwitter({ children, ...restProps }) {
  return <Twitter />;
};
Icons.Instagram = function IconsInstagram({ children, ...restProps }) {
  return <Instagram />;
};
Icons.User = function IconsUser({ children, ...restProps }) {
  return <User />;
};
Icons.Phone = function IconsPhone({ children, ...restProps }) {
  return <Phone />;
};
Icons.Mail = function IconsMail({ children, ...restProps }) {
  return <Mail />;
};
Icons.Medal = function IconsMedal({ children, ...restProps }) {
  return <Medal />;
};
Icons.Checked = function IconsChecked({ children, ...restProps }) {
  return <Checked />;
};
Icons.Support = function IconsSupport({ children, ...restProps }) {
  return <Support />;
};
Icons.Link = function IconsLink({ children, ...restProps }) {
  return <Link />;
};
