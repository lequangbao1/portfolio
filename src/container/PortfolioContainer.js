import { Icons, Portfolio } from "../components";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import { Link } from "react-router-dom";

export default function PortfolioContainer() {
  return (
    <Portfolio id="portfolio">
      <Portfolio.Subtitle>My portfolio</Portfolio.Subtitle>
      <Portfolio.Title>Recent Works</Portfolio.Title>
      <Portfolio.Wrapper>
        <Portfolio.Item>
          <Portfolio.Image src={project1} />
          <Portfolio.Data>
            <Link
              to={{ pathname: "http://firegram2.vercel.app/" }}
              target="blank"
            >
              <Icons.Box>
                <Icons.Link />
              </Icons.Box>
            </Link>
            <Portfolio.Name>Firegram</Portfolio.Name>
          </Portfolio.Data>
        </Portfolio.Item>
        <Portfolio.Item>
          <Portfolio.Image src={project3} />
          <Portfolio.Data>
            <Link
              to={{
                pathname: "https://lequangbao1.github.io/portfolioTimeline/",
              }}
              target="blank"
            >
              <Icons.Box>
                <Icons.Link />
              </Icons.Box>
            </Link>
            <Portfolio.Name>Start Bootstrap Landing Page</Portfolio.Name>
          </Portfolio.Data>
        </Portfolio.Item>
        <Portfolio.Item>
          <Portfolio.Image src={project2} />
          <Portfolio.Data>
            <Link
              to={{ pathname: "https://todolist-bao.vercel.app/task" }}
              target="blank"
            >
              <Icons.Box>
                <Icons.Link />
              </Icons.Box>
            </Link>
            <Portfolio.Name>To-Do List</Portfolio.Name>
          </Portfolio.Data>
        </Portfolio.Item>
      </Portfolio.Wrapper>
    </Portfolio>
  );
}
