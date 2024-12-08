

import { Nav } from "react-bootstrap";
import ModeButton from "./ModeButton";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import logo from "../assets/img/TradeForAll-03.svg";
import "./Sidebar2.css";
import { useState } from "react";

const Sidebar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Sidebar per Desktop/Tablet */}
      <Nav className="sidebar d-none d-md-flex flex-column">
        <div className="logo-container">
          <img src={logo} alt="TradeForAll Logo" className="logo" />
        </div>
        <Nav.Item>
          <Nav.Link href="/market" className="nav-link">
            Mercato
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" onClick={() => setShowLogin(true)}>
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" onClick={() => setShowRegister(true)}>
            Registrati
          </Nav.Link>
        </Nav.Item>
        <div className="theme-switcher">
          <ModeButton />
        </div>
      </Nav>

      {/* Navbar per Mobile */}
      <Nav className="nav-mobile d-md-none fixed-bottom justify-content-around">
        <Nav.Item>
          <Nav.Link href="/market">
            <img src={logo} alt="Logo" className="mobile-logo" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setShowRegister(true)}>Registrati</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <ModeButton />
        </Nav.Item>
      </Nav>

      {/* Modali */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <RegisterModal show={showRegister} handleClose={() => setShowRegister(false)} />
    </>
  );
};
export default Sidebar;