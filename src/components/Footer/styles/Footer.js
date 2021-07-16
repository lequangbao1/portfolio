import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #290f09;
  text-align: center;
  padding: 48px 8px;
  border-radius: 8px;
  margin: 0 32px;
  margin-top: 64px;
  margin-bottom: 32px;

  @media screen and (max-width: 1023px) {
    border-radius: 0;
    margin: 0 -12px;
    margin-top: 64px;
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  color: #eae7e6;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Text = styled.p`
  color: #eae7e6;
  font-weight: 500;
  margin-bottom: 24px;
  padding-left: 48px;
  padding-right: 48px;
`;
export const Pane = styled.div``;
export const Copyright = styled.span`
  margin-top: 48px;
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #54423d;
`;
