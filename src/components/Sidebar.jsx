import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Nav, Button } from "react-bootstrap";
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
          <Nav  className="w-100 d-flex align-items-center justify-content-between fixed-bottom px-2">
            <Nav.Item>
              <img src={logo} alt="TradeForAll Logo" className="mobile-logo p-0 w-25" />
            </Nav.Item>
            <div className="d-flex align-center justify-content-between gap-2">
            <Nav.Item >
              <ModeButton />
            </Nav.Item>
            <Nav.Item>
              <Button className="sidebar-btn" onClick={() => navigate("/market")}> {/* Market */}
                <HomeIcon />
              </Button>
            </Nav.Item>
            {renderButtons()}
            </div>

          </Nav>
      ) : (
        <div className="sidebar gap-4">
          <div className="sidebar-header">
            <img src={logo} alt="TradeForAll Logo" className="sidebar-logo" />
            <ModeButton  className="my-3"/>
          </div>
          <Nav className="flex-column gap-3">
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
