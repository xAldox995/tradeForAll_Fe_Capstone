import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ModeButton from "./ModeButton";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import logo from "../assets/img/TradeForAll-03.svg";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to landing page after logout
  };

  const renderButtons = () => {
    if (!user) {
      return (
        <>
          <Nav.Item className="nav-item-spacing">
            <Button className="sidebar-btn" onClick={() => setShowLoginModal(true)}> {/* Opens Login Modal */}
              <LoginIcon /> Login
            </Button>
          </Nav.Item>
          <Nav.Item className="nav-item-spacing">
            <Button className="sidebar-btn" onClick={() => setShowRegisterModal(true)}> {/* Opens Register Modal */}
              <AccountBalanceWalletIcon /> Register
            </Button>
          </Nav.Item>
        </>
      );
    } else {
      return (
        <>
          <Nav.Item className="nav-item-spacing">
            <Button className="sidebar-btn" onClick={handleLogout}> {/* Logout */}
              <LogoutIcon /> Logout
            </Button>
          </Nav.Item>
          <Nav.Item className="nav-item-spacing">
            <Button className="sidebar-btn" onClick={() => navigate("/transactions")}> {/* Transactions */}
              <SwapHorizIcon /> Transactions
            </Button>
          </Nav.Item>
        </>
      );
    }
  };

  return (
    <>
      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      <RegisterModal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />
      {isMobile ? (
        <Navbar fixed="bottom" bg="light" className="mobile-navbar">
          <Nav className="w-100 d-flex justify-content-between align-items-center">
            <Nav.Item className="nav-item-spacing">
              <img src={logo} alt="TradeForAll Logo" className="mobile-logo" />
            </Nav.Item>
            <Nav.Item className="nav-item-spacing">
              <ModeButton />
            </Nav.Item>
            <Nav.Item className="nav-item-spacing">
              <Button className="sidebar-btn" onClick={() => navigate("/market")}> {/* Market */}
                <HomeIcon />
              </Button>
            </Nav.Item>
            {renderButtons()}
          </Nav>
        </Navbar>
      ) : (
        <div className="sidebar">
          <div className="sidebar-header">
            <img src={logo} alt="TradeForAll Logo" className="sidebar-logo" />
            <ModeButton />
          </div>
          <Nav className="flex-column">
            <Nav.Item className="nav-item-spacing">
              <Button className="sidebar-btn" onClick={() => navigate("/market")}> {/* Market */}
                <HomeIcon /> Market
              </Button>
            </Nav.Item>
            {renderButtons()}
          </Nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
