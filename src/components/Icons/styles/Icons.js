import styled from "styled-components/macro";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiUser, FiPhone, FiMail, FiCheckSquare, FiLink } from "react-icons/fi";
import { RiMedalLine, RiInstagramFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const Container = styled.div``;

export const Pane = styled.div`
  display: flex;
  align-items: center;
  color: #cc4b2c;
  font-size: 24px;
  margin-right: 32px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cc4b2c;
  background-color: #fff;
  font-size: 24px;
  padding: 6px;
  border-radius: 4px;
`;

export const Wrapper = styled.a`
  display: inline-flex;
  background-color: #cc4b2c;
  color: #fffafa;
  border-radius: 50%;
  padding: 6.4px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 8px;
  font-size: 17.6px;
  &:hover {
    background-color: ${({ hoverInversed }) =>
      hoverInversed ? "#fffafa" : "#662616"};
    color: ${({ hoverInversed }) => (hoverInversed ? "#cc4b2c" : "#fffafa")};
  }
`;

export const Facebook = styled(FaFacebookF)``;

export const Github = styled(FaGithub)``;

export const Linkedin = styled(FaLinkedinIn)``;

export const Twitter = styled(FaTwitter)``;

// export const Instagram = styled(FaInstagram)``;
export const Instagram = styled(RiInstagramFill)``;

export const User = styled(FiUser)``;
export const Phone = styled(FiPhone)``;
export const Mail = styled(FiMail)``;
export const Medal = styled(RiMedalLine)``;
export const Checked = styled(FiCheckSquare)``;
export const Support = styled(BiSupport)``;
export const Link = styled(FiLink)``;
