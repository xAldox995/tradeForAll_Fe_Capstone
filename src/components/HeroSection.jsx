

import { color } from 'chart.js/helpers';
import { Container, Button } from 'react-bootstrap';

const HeroSection = ({onLogin,onRegister}) => {
  return (
    
      <Container>
        <h1 className="hero-title">Benvenuto su CryptoTrader</h1>
        <p className="hero-description">
          La piattaforma di trading più affidabile e sicura per le criptovalute.
        </p>
        <Button  className="me-3 button" onClick={onRegister}>
          Registrati
        </Button>
        <Button  onClick={onLogin} className='button'>
          Login
        </Button>
      </Container>
    
  );
};

export default HeroSection;