
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "./Header.css";
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Crypto Wallet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Policy</Nav.Link>

                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Sign Up</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <NavDropdown title="Acount" id="basic-nav-dropdown" menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;