import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0 32px;
  margin-bottom: 32px;

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
`;
export const Subtitle = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #290f09;
  font-weight: 700;
`;
export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #662616;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  color: #54423d;
  font-weight: 500;
`;

const RowGrid = `
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 24px;
`;

const RowNormal = `
padding-left: 16px;
margin-bottom: 24px;

@media screen and (max-width: 1023px) {
  padding-left: 0px;
}
`;

export const Row = styled.div`
  ${({ grid }) => (grid ? RowGrid : RowNormal)}
  ${({ pl48 }) => (pl48 ? "padding-left: 48px;" : null)}
`;
export const Column = styled.div`
  margin-bottom: 40px;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  background-color: #eae7e6;
  padding: 16px;
  margin-bottom: 16px;
  &::placeholder {
    font-family: "Poppins", san-serif;
    color: #54423d;
    font-weight: 500;
  }

  &:focus {
    border: 2px solid #cc4b2c;
  }
`;
export const InputArea = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  background-color: #eae7e6;
  padding: 16px;

  margin-bottom: 16px;
  &::placeholder {
    font-family: "Poppins", san-serif;
    color: #54423d;
    font-weight: 500;
  }

  &:focus {
    border: 2px solid #cc4b2c;
  }
`;
export const Button = styled.button`
  font-family: "Poppins", san-serif;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 16px;
  background-color: #cc4b2c;
  color: #fffafa;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: 0.3s;
  font-weight: 600;
  &:hover {
    background-color: #662616;
  }

  @media screen and (max-width: 1023px) {
    display: block;
    width: 100%;
  }
`;
