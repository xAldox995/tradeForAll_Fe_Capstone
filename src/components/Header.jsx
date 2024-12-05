import { Button, Col, Navbar, Row } from "react-bootstrap";


const Header = ({onToggleTheme}) => {

  return (
    <Row >
      <Col>
        <Navbar expand="lg" className="mb-4">
          <Navbar.Brand href="/">
          <img src="src/assets/img/logoTradeForAll-03.png" className="w-25" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-light" onClick={onToggleTheme} className="me-4">
              Toggle Theme
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
