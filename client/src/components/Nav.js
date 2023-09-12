import { Navbar, Container , Nav} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../utils/Context'
function NavBar() {
  // const { user } = useAuth();
  return (
    <div style={{backgroundColor:'black'}}>
    <Navbar>
         <Container>
          <Navbar.Brand href="#home" style={{color:'white'}} >MyResidentApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="Register" style={{color:'white'}}>Register</Nav.Link>
            <Nav.Link href="/" style={{color:'white'}}>Login</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </div>
 
  );
}

export default NavBar;