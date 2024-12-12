// Dashboard.jsx

import { Container, Row, Col } from "react-bootstrap";
import MyAssetCarousel from "../components/MyAssetCarousel";
import MyWalletCard from "../components/MyWalletCard";
import TopVolumeCard from "../components/TopVolumeCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container h-100">
      
      <Row>
        <Col md={2} className="dashboard-sidebar">
        
        </Col>

        
        <Col md={10} className="dashboard-content">
          <Row>
            <Col md={4} className="dashboard-card my-wallet">
              <MyWalletCard />
            </Col>
            <Col md={4} className="dashboard-card top-volume">
              <TopVolumeCard />
            </Col>
            <Col md={4} className="dashboard-card transactions">
             
            </Col>
          </Row>

          <Row className="history-prices">
            <Col>
              <MyAssetCarousel />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;