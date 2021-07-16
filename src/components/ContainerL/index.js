import { Container } from "./styles/ContainerL";

export default function ContainerL({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
