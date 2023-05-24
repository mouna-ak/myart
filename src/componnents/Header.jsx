import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="MounaArt">
            MounArt
            </Link>
            </Navbar.Brand>
           
            <Navbar.Toggle /> 
          
          <Link to='/about' className="nav-link text-light text-xl-left m-3">Qui sommes-nous</Link>
          <Link to='/artworks' className="nav-link text-light text-xl-left">Artworks</Link>
          
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Made By: <a href="#login">Mouna AK</a>
            </Navbar.Text>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

// service_rjihxfn
