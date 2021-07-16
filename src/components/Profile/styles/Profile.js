import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Pane = styled.div``;

export const AvatarWrapper = styled.div`
  width: 160px;
  height: 160px;
  padding-top: 16px;
  padding-left: 10px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #cc4b2c;
  margin-bottom: 16px;
`;
export const Avatar = styled.img`
  filter: brightness(130%);
  transform: scale(2.4);
  max-width: 155px;
  height: auto;
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 36px;
  color: #cc4b2c;
  text-align: center;
`;

export const Job = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #662616;
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 80px;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
  background-color: #cc4b2c;
  color: #fffafa;
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  text-align: center;
  &:hover {
    background-color: #662616;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
