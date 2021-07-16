import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0 32px;
  margin-bottom: 64px;

  @media screen and (max-width: 1023px) {
    margin: 0 16px;
    margin-bottom: 32px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #cc4b2c;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: capitalize;
`;
export const Subtitle = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #290f09;
  font-weight: 700;
  text-transform: capitalize;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 32px;
  column-gap: 80px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const Data = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  top: 100%;
  left: 0;
  background-color: rgba(204, 75, 44, 0.7);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  &:hover > ${Data} {
    top: 0;
  }
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Name = styled.p`
  margin-top: 16px;
  font-size: 24px;
  color: #fffafa;
  text-align: center;
  padding: 0 24px;
`;
