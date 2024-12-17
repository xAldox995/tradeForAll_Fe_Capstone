import { Container, Row, Col } from "react-bootstrap";
import MyAssetCarousel from "../components/MyAssetCarousel";
import MyWalletCard from "../components/MyWalletCard";
import TopVolumeCard from "../components/TopVolumeCard";
import "./Dashboard.css";
import "./Cards.css";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container h-100">
      {/* Riga con My Wallet e Top Volume */}
      <Row className="justify-content-center mb-4">
        <Col md={4} className="dashboard-card cards my-wallet">
          <MyWalletCard />
        </Col>
        <Col md={4} className="dashboard-card cards top-volume">
          <TopVolumeCard />
        </Col>
      </Row>

      {/* Carosello */}
      <Row className="history-prices cards">
        <Col>
          <MyAssetCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;