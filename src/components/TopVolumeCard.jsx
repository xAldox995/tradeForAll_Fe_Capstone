
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopVolume } from "../redux/actions/cryptoVolumeActions";
import { Card, ListGroup, Spinner, Alert } from "react-bootstrap";

const TopVolumeCard = () => {
  const dispatch = useDispatch();

  // Stato Redux
  const { topVolume, loading, error } = useSelector((state) => state.crypto);

  // Fetch dei dati al montaggio del componente
  useEffect(() => {
    dispatch(fetchTopVolume());
  }, [dispatch]);

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Top Volume Cryptos</Card.Title>
        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {!loading && !error && (
          <ListGroup>
            {topVolume.map((crypto, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={crypto.imageUrl}
                    alt={crypto.name}
                    style={{ width: "30px", height: "30px", marginRight: "10px" }}
                  />
                  <div>
                    <strong>{crypto.symbol}</strong>
                    <div style={{ fontSize: "12px", color: "gray" }}>
                      {crypto.percentChange24h > 0 ? (
                        <span style={{ color: "green" }}>
                          +{crypto.percentChange24h.toFixed(2)}%
                        </span>
                      ) : (
                        <span style={{ color: "red" }}>
                          {crypto.percentChange24h.toFixed(2)}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span>Vol: {crypto.volume.toLocaleString()} EUR</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default TopVolumeCard;
