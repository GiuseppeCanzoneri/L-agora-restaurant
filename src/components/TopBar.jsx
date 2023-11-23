import { Container, NavLink, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand>
          {" "}
          <img src={logo} alt="logo" height={70} width={60} />
        </Navbar.Brand>
        <NavLink>
          {" "}
          <h1 className="display-3 ">L'Agora</h1>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default TopBar;
