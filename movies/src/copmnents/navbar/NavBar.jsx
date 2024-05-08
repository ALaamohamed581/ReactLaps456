import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
function NavBar() {
  const routes = [
    { titile: "home", href: "/home" },
    { titile: "About us", href: "/aboutus" },
    { titile: "Contact us", href: "/contactus" },
    { titile: "Movies", href: "/Movies" },
    { titile: "FavourtieMovies", href: "/favorutesMovies" },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            {routes.map((el) => {
              return (
                <NavLink
                  key={el.href}
                  className={({ isActive }) => {
                    return isActive ? styles.acv : "";
                  }}
                  to={el.href}
                >
                  {el.titile}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
