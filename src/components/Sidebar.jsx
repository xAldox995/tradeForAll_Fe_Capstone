import { Nav } from "react-bootstrap";
import ModeButton from "./ModeButton";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import logo from "../assets/img/logoTradeForAll-03.png";
import "./Sidebar.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <>
      {/* Sidebar per Desktop/Tablet */}
      <Nav className="sidebar d-none d-md-flex flex-column">
        <div className="logo-container">
          <img src={logo} alt="TradeForAll Logo" className="logo w-100" />
        </div>
        <Nav.Item>
          <Nav.Link className="nav-link">Mercato</Nav.Link>
        </Nav.Item>
        {user && user.username ? (
          <Nav.Item>
            <p>Welcome, {user.username}</p>
          </Nav.Item>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link className="nav-link" onClick={() => setShowLogin(true)}>
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav-link"
                onClick={() => setShowRegister(true)}
              >
                Registrati
              </Nav.Link>
            </Nav.Item>
          </>
        )}

        <div className="theme-switcher">
          <ModeButton />
        </div>
      </Nav>

      {/* Navbar per Mobile */}
      <Nav className=" d-md-none fixed-bottom justify-content-around">
        <Nav.Item>
          <Nav.Link>
            <img src={logo} alt="Logo" className="mobile-logo w-25" />
          </Nav.Link>
        </Nav.Item>
        {user && user.username ? (
          <Nav.Item>
            <p>Welcome, {user.username}</p>
          </Nav.Item>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setShowRegister(true)}>
                Registrati
              </Nav.Link>
            </Nav.Item>
          </>
        )}
        <Nav.Item>
          <ModeButton />
        </Nav.Item>
      </Nav>

      {/* Modali */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <RegisterModal
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
    </>
  );
};
export default Sidebar;
