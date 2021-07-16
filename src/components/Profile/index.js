import React from "react";
import {
  Container,
  AvatarWrapper,
  Avatar,
  Name,
  Job,
  Pane,
  Button,
} from "./styles/Profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.AvatarWrapper = function ProfileAvatarWrapper({
  children,
  ...restProps
}) {
  return <AvatarWrapper {...restProps}>{children}</AvatarWrapper>;
};
Profile.Avatar = function ProfileAvatar({ children, ...restProps }) {
  return <Avatar {...restProps} />;
};
Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Profile.Job = function ProfileJob({ children, ...restProps }) {
  return <Job {...restProps}>{children}</Job>;
};
Profile.Pane = function ProfilePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
