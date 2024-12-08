import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useSelector((state) => state.tema.tema);
  console.log("Rendering Sidebar");
  return (
    <>
      {/* Sidebar Desktop */}
      <Nav className={`sidebar d-none d-md-flex flex-column ${theme}`}>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Wallet
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Navbar Mobile */}
      <Nav
        className={`nav-mobile d-md-none fixed-bottom justify-content-around ${theme}`}
      >
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Wallet
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#" className="text-white">
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
