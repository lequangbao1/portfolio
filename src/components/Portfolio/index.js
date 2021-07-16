import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Wrapper,
  Item,
  Image,
  Data,
  Name,
} from "./styles/Portfolio";

export default function Portfolio({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Portfolio.Title = function PortfolioTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Portfolio.Subtitle = function PortfolioSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Portfolio.Name = function PortfolioName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Portfolio.Wrapper = function PortfolioWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Portfolio.Item = function PortfolioItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Portfolio.Image = function PortfolioImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};

Portfolio.Data = function PortfolioData({ children, ...restProps }) {
  return <Data {...restProps}>{children}</Data>;
};
