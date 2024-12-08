
import Sidebar from "../components/Sidebar";
import "src/assets/styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Sidebar />
      <div className="content">
        <h1 className="header">Benvenuto su TradeForAll</h1>
        <p className="description">
          Il miglior simulatore di trading sicuro e affidabile per le criptovalute.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
