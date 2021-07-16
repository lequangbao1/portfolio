import { About, Icons } from "../components";
// import AboutImg from "../img/about.png";

export default function AboutContainer() {
  return (
    <About id="about">
      <About.Subtitle>my intro</About.Subtitle>
      <About.Title>About me</About.Title>
      <About.Wrapper>
        <About.Row>
          <About.Text mb40>
            In 2011, I wrote my first line of code 💻 with 2 more friends in a
            contest of robot programming 🤖 and won the gold medal 🥇 in the
            final round. But sadly 😥, I did not choose it when entering the
            university. After completing the bachelor degree, I didn't know what
            to do in life, so I was working some of office jobs 🏢 and learning
            in my leisure time. The journey of teaching programming to myself 👨‍🏫
            has been started off with CS50 - a fantastic and brilliant course 🔥
            from Harvard by David J. Malan that give me confidence to build up
            cool projects.
          </About.Text>
        </About.Row>
        <About.Row>
          <About.Text mb40>
            The learning curve was difficult and tough, sometimes I have to
            spend my whole rest day 📅 just to figure out a small issue.
            However, the feeling of searching through Google or StackOverflow
            and solve out the problems pays off 🤗. Along the journey, the
            online resources from FreeCodeCamp, Udemy and a lot of tutorials on
            Youtube was also really helpful 💕. Now, I'm still on the way and
            finding 👀 a full-time job in web development so if anyone would
            like to discuss, feel free to reach out to me anytime. I really
            appreciate you came here. Have a good day ahead 🙋‍♂️ !!!.
          </About.Text>
        </About.Row>

        <About.Column>
          <About.Row>
            <About.SectionTitle>Information</About.SectionTitle>
            <About.Pane normal>
              <Icons.Pane>
                <Icons.User />
              </Icons.Pane>
              <About.Text>Le Quang Bao</About.Text>
            </About.Pane>
            <About.Pane normal>
              <Icons.Pane>
                <Icons.Phone />
              </Icons.Pane>
              <About.Text>(+84) 782 320 392</About.Text>
            </About.Pane>
            <About.Pane normal>
              <Icons.Pane>
                <Icons.Mail />
              </Icons.Pane>
              <About.Text>quangbao1712@gmail.com</About.Text>
            </About.Pane>
          </About.Row>
          <About.Row>
            <About.SectionTitle>Experience and Support</About.SectionTitle>
            <About.Pane normal>
              <Icons.Pane>
                <Icons.Medal />
              </Icons.Pane>
              <About.Pane>
                <About.Text>{">"} 1 Years Self-Learning</About.Text>
                <About.Text>Experience</About.Text>
              </About.Pane>
            </About.Pane>
            <About.Pane normal>
              <Icons.Pane>
                <Icons.Checked />
              </Icons.Pane>
              <About.Pane>
                <About.Text>25+ Pet Projects</About.Text>
                <About.Text>Completed</About.Text>
              </About.Pane>
            </About.Pane>
            <About.Pane normal>
              <Icons.Pane>
                <Icons.Support />
              </Icons.Pane>
              <About.Pane>
                <About.Text>Support</About.Text>
                <About.Text>Online 24/7</About.Text>
              </About.Pane>
            </About.Pane>
          </About.Row>
        </About.Column>
      </About.Wrapper>
    </About>
  );
}
