import styled from "styled-components/macro";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

export const Container = styled.nav``;

export const BarVertical = styled.div`
  display: flex;
  align-items: center;
  min-width: 324px;
  background-color: #cc4b2c;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s;
  padding: 48px;
  z-index: 999;
  @media screen and (max-width: 1024px) {
    left: ${({ showMenu }) => (showMenu ? "0" : "-100%")};
  }
`;
export const Pane = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(LinkS)`
  text-transform: uppercase;
  color: #fffafa;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 32px;
  transition: 0.25s;

  &:hover {
    color: #54423d;
  }

  &.active {
    color: #54423d;
  }
  @media screen and (max-width: 568px) {
    font-size: 15px;
  }
`;

export const BarHorizontal = styled.div`
  min-height: 48px;
  background-color: #fffafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const MenuIcon = styled(FaBars)`
  color: #54423d;
  font-size: 16px;
  cursor: pointer;
`;
export const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 997px) {
    font-size: 15px;
  }
`;

export const CloseButton = styled(MdClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 28px;
  color: #662616;
  cursor: pointer;

  &:hover {
    color: #290f09;
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
