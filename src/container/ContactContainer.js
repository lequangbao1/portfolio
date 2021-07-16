import { Contact } from "../components";

export default function ContactContainer() {
  return (
    <Contact id="contact">
      <Contact.Subtitle>Contact Me</Contact.Subtitle>
      <Contact.Title>Get In Touch</Contact.Title>
      <Contact.Wrapper>
        <Contact.Column>
          <Contact.Row grid>
            <Contact.Input type="text" placeholder="Name" />
            <Contact.Input type="email" placeholder="Email" />
          </Contact.Row>
          <Contact.Input type="text" placeholder="Project" />
          <Contact.InputArea
            cols="0"
            rows="8"
            type="text"
            placeholder="Message"
          />
          <Contact.Button>Send Message</Contact.Button>
        </Contact.Column>
        <Contact.Column>
          <Contact.Row pl48>
            <Contact.SectionTitle>Call me</Contact.SectionTitle>
            <Contact.Row>
              <Contact.Text>(+84) 782 320 392</Contact.Text>
            </Contact.Row>
          </Contact.Row>
          <Contact.Row pl48>
            <Contact.SectionTitle>Email</Contact.SectionTitle>
            <Contact.Row>
              <Contact.Text>quangbao1712@gmail.com</Contact.Text>
            </Contact.Row>
          </Contact.Row>
          <Contact.Row pl48>
            <Contact.SectionTitle>Location</Contact.SectionTitle>
            <Contact.Row>
              <Contact.Text>Vietnam</Contact.Text>
            </Contact.Row>
          </Contact.Row>
        </Contact.Column>
      </Contact.Wrapper>
    </Contact>
  );
}
