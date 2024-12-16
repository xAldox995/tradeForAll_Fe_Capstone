import { useEffect } from "react";
import { Card, Spinner, Alert, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalletAndBalance } from "../redux/actions/walletActions";

const MyWalletCard = () => {
  const dispatch = useDispatch();

  // Redux state
  const wallet = useSelector((state) => state.wallet.wallet || { walletCryptoList: [], importo: 0 });
  const balances = useSelector((state) => state.wallet.balances || {});
  const totalValue = useSelector((state) => state.wallet.totalValue || 0);
  const loading = useSelector((state) => state.wallet.loading);
  const error = useSelector((state) => state.wallet.error);
  const token = useSelector((state) => state.auth.user?.accessToken); 
  
  useEffect(() => {
    if (token) {
      dispatch(fetchWalletAndBalance());
    }
  }, [dispatch, token]);

  
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Gestione errori
  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Card className="my-wallet-card text-center" bg="dark" text="light">
      <Card.Body>
        <Card.Title>Total Wallet Balance</Card.Title>
        <Card.Text className="fs-4">
          {totalValue.toFixed(2)} EUR
        </Card.Text>
        <Card.Subtitle className="mt-3">Liquidità Disponibile</Card.Subtitle>
        <Card.Text className="fs-5">
          {wallet.importo.toFixed(2)} EUR
        </Card.Text>
        <Card.Subtitle className="mt-4">Criptovalute Possedute</Card.Subtitle>
        <ListGroup variant="flush" className="text-start mt-2">
          {wallet.walletCryptoList.length > 0 ? (
            wallet.walletCryptoList.map((crypto) => {
              const assetValue = balances[crypto.simbolo] || 0; // Valore del singolo asset
              return (
                <ListGroup.Item key={crypto.id} className="bg-dark text-light">
                  <strong>{crypto.simbolo}:</strong>
                  <br />
                  <span>Saldo: {crypto.saldo.toFixed(2)}</span>
                  <br />
                  <span>Valore Totale: {assetValue.toFixed(2)} EUR</span>
                </ListGroup.Item>
              );
            })
          ) : (
            <ListGroup.Item className="bg-dark text-light">
              Nessuna criptovaluta posseduta.
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MyWalletCard;
