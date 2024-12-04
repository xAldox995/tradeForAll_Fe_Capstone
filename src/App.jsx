import { useState } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from 'react-bootstrap';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const themeStyles = {
    backgroundColor: isDarkMode ? "#0b080c" : "#f0ffff",
    color: isDarkMode ? "#f0ffff" : "#000f0f",
  };

  return (
    <Container fluid className="p-4" style={themeStyles}>
      
      <div className="d-flex justify-content-end mb-3">
        <Button
          onClick={toggleTheme}
          variant={isDarkMode ? "light" : "dark"}
          className="px-4"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      {/* Header */}
      {/* <Header isDarkMode={isDarkMode} /> */}

      {/* Main Content */}
      <Row>
        <Col lg={3} md={4} sm={12}>
          {/* <WalletCard isDarkMode={isDarkMode} /> */}
        </Col>
        <Col lg={6} md={8} sm={12}>
          {/* <TradingChart isDarkMode={isDarkMode} /> */}
        </Col>
        <Col lg={3} md={4} sm={12}>
          {/* <MoneyTransferCard isDarkMode={isDarkMode} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App
