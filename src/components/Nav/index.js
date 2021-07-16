import React from "react";
import {
  Container,
  BarVertical,
  BarHorizontal,
  Link,
  Pane,
  MenuIcon,
  Logo,
  CloseButton,
} from "./styles/Nav";

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Nav.BarVertical = function NavBarVertical({ children, ...restProps }) {
  return <BarVertical {...restProps}>{children}</BarVertical>;
};

Nav.BarHorizontal = function NavBarHorizontal({ children, ...restProps }) {
  return <BarHorizontal {...restProps}>{children}</BarHorizontal>;
};

Nav.Pane = function NavList({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Nav.Link = function NavLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Nav.MenuIcon = function NavMenuIcon({ children, ...restProps }) {
  return <MenuIcon {...restProps} />;
};

Nav.Logo = function NavLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Nav.CloseButton = function NavCloseButton({ children, ...restProps }) {
  return <CloseButton {...restProps} />;
};
