


import { Container, Button } from 'react-bootstrap';

const HeroSection = ({onLogin,onRegister}) => {
  return (
    
      <Container>
        <h1 className="hero-title">Benvenuto su Trade for All</h1>
        <p className="hero-description">
          Il miglior simulatore di trading più affidabile e sicura per le criptovalute.
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