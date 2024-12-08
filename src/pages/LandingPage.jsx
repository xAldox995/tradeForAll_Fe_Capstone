import { useState } from "react";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  console.log("Apertura Login Modal", showLogin);
  console.log("Apertura Register Modal", showRegister);
  return (
    <div className="landing-page">
      <h1>Benvenuto nella nostra piattaforma</h1>
      <button className="btn btn-primary" onClick={() => setShowLogin(true)}>
        Login
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setShowRegister(true)}
      >
        Register
      </button>

      {/* Modali */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <RegisterModal
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
    </div>
  );
};

export default LandingPage;
