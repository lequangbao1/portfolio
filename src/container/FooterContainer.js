import { Footer, Icons } from "../components";

export default function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Title>Le Quang Bao</Footer.Title>
        <Footer.Text>
          Learning everything you can, anytime you can, from anyone you can.
          There will always come a time when you will be grateful you did.
        </Footer.Text>
        <Footer.Text>--- Sara Caldwell ---</Footer.Text>
        <Footer.Pane>
          <Icons.Wrapper hoverInversed>
            <Icons.Facebook />
          </Icons.Wrapper>
          <Icons.Wrapper hoverInversed>
            <Icons.Github />
          </Icons.Wrapper>
          <Icons.Wrapper hoverInversed>
            <Icons.Linkedin />
          </Icons.Wrapper>
        </Footer.Pane>
        <Footer.Copyright>All right reserved by Bao - 2021</Footer.Copyright>
      </Footer>
    </>
  );
}
