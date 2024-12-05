import { useState } from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const LandingPage = () => {
  const [mostraLogin, setMostraLogin] = useState(false);
  const [mostraRegister, setMostraRegister] = useState(false);

  const handleLogin = () => {
    setMostraLogin(!mostraLogin);
  };

  const handleRegister = () => {
    setMostraRegister(!mostraRegister);
  };

  return (
    <Container>
      <HeroSection onLogin={handleLogin} onRegister={handleRegister} />

      <LoginModal show={mostraLogin} close={handleLogin} />

      <RegisterModal show={mostraRegister} handleClose={handleRegister} />
    </Container>
  );
};
export default LandingPage;
