import { useEffect, useRef } from "react";
import { Carousel, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketHistory } from "../redux/actions/marketHistoryActions";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registrazione dei componenti di Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MyAssetCarousel = () => {
  const dispatch = useDispatch();

  // Redux state
  const wallet = useSelector((state) => state.wallet.wallet || { walletCryptoList: [] });
  const history = useSelector((state) => state.marketHistory.history || {});
  const loading = useSelector((state) => state.marketHistory.loading);
  const error = useSelector((state) => state.marketHistory.error);

  // Estrai i simboli degli asset dal wallet
  const assets = wallet.walletCryptoList.map((crypto) => crypto.simbolo);

  // Traccia i simboli già fetchati
  const fetchedSymbolsRef = useRef(new Set());

  // Fetch per ciascun asset al montaggio del componente
  useEffect(() => {
    assets.forEach((symbol) => {
      if (!fetchedSymbolsRef.current.has(symbol) && !history[symbol]) {
        fetchedSymbolsRef.current.add(symbol);
        dispatch(fetchMarketHistory(symbol));
      }
    });
  }, [dispatch, assets, history]);

  // Conversione data da millisecondi
  const convertDate = (ms) => {
    const date = new Date(ms * 1000); // Moltiplica per 1000 per convertire i secondi in millisecondi
    return date.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // Render del carosello
  if (loading && Object.keys(history).length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Carousel className="history-carousel">
      {assets.map((symbol) => {
        const assetHistory = history[symbol] || []; // Fallback a un array vuoto se non ci sono dati

        if (assetHistory.length === 0) {
          // Mostra un messaggio se i dati per il simbolo non sono disponibili
          return (
            <Carousel.Item key={symbol}>
              <div className="carousel-item-content text-center card-responsive">
                <h5 className="mb-3">{symbol}</h5>
                <p className="text-muted small">Dati non disponibili</p>
              </div>
            </Carousel.Item>
          );
        }

        // Prepara i dati per il grafico
        const chartData = {
          labels: assetHistory.map((entry) => convertDate(entry.time)), // Converte timestamp in data leggibile
          datasets: [
            {
              label: `Prezzo di ${symbol}`,
              data: assetHistory.map((entry) => entry.close), // Prezzi di chiusura
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 2, // Riduci la larghezza della linea
              tension: 0.4, // Smoothing della linea
            },
          ],
        };

        return (
          <Carousel.Item key={symbol}>
            <div className="carousel-item-content text-center card-responsive">
              <h5 className="mb-3">{symbol}</h5>
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false }, // Nascondi la legenda
                    tooltip: { enabled: true },
                  },
                  scales: {
                    x: {
                      ticks: { maxRotation: 0, font: { size: 12 } }, // Dimensione delle etichette
                    },
                    y: {
                      ticks: { font: { size: 12 } }, // Dimensione delle etichette
                    },
                  },
                }}
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MyAssetCarousel;
