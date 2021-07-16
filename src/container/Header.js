import { useState } from "react";
import { Nav } from "../components/";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(() => !showMenu);
  };

  return (
    <Nav>
      <Nav.BarVertical showMenu={showMenu}>
        <Nav.Pane>
          <Nav.Link
            activeClass="active"
            spy={true}
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
          >
            home
          </Nav.Link>
          <Nav.Link
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            about
          </Nav.Link>

          {/* <Nav.Link>services</Nav.Link> */}
          <Nav.Link
            activeClass="active"
            spy={true}
            to="portfolio"
            smooth={true}
            offset={-70}
            duration={500}
          >
            works
          </Nav.Link>
          <Nav.Link
            activeClass="active"
            spy={true}
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            contact
          </Nav.Link>
        </Nav.Pane>
        <Nav.CloseButton onClick={handleShowMenu} />
      </Nav.BarVertical>
      <Nav.BarHorizontal>
        <Nav.MenuIcon onClick={handleShowMenu} />
        <Nav.Logo>Quang Bao</Nav.Logo>
      </Nav.BarHorizontal>
    </Nav>
  );
}
