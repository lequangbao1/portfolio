import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 1023px) {
    margin: 0 16px;
    margin-bottom: 32px;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  column-gap: 80px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #54423d;
  font-weight: 500;
  line-height: 1.6;

  ${({ mb40 }) => (mb40 ? `margin-bottom: 40px;` : null)}
`;

const PaneNormal = `display: flex;
align-items: center;
padding-left: 24px;
margin-bottom: 24px;`;

export const Pane = styled.div`
  ${({ normal }) => (normal ? PaneNormal : null)}
  & > ${Text}:first-child {
    font-weight: 600;
  }
`;
export const Column = styled.div`
  @media screen and (min-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const RowGrid = `
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 24px;
`;

const RowNormal = `

margin-bottom: 24px;`;

export const Row = styled.div`
  ${({ grid }) => (grid ? RowGrid : RowNormal)}
  ${({ pl48 }) => (pl48 ? "padding-left: 48px;" : null)}
`;
export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 220px;
  height: auto;
  border-radius: 8px;
`;

export const SectionTitle = styled.div`
  font-size: 20px;
  color: #662616;
  font-weight: 600;
  margin-bottom: 16px;
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
