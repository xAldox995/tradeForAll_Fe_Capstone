import { Container, Row, Col } from "react-bootstrap";
import MyAssetCarousel from "../components/MyAssetCarousel";
import MyWalletCard from "../components/MyWalletCard";
import TopVolumeCard from "../components/TopVolumeCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container d-flex  h-100 mt-5">
      {/* Riga con My Wallet e Top Volume */}
      <Row className="justify-content-center flex-nowrap mb-4">
        <Col md={4} className="dashboard-card my-wallet">
          <MyWalletCard />
        </Col>
        <Col md={4} className="dashboard-card top-volume">
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
