import { useEffect } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalletAndPrices } from "../redux/actions/walletActions";

const MyWalletCard = () => {
  const dispatch = useDispatch();

  const wallet = useSelector((state) => state.wallet.wallet);
  const cryptoPrices = useSelector((state) => state.cryptoPrice.cryptoPrice);
  const loading = useSelector((state) => state.wallet.loading);
  const error = useSelector((state) => state.wallet.error);

  useEffect(() => {
    dispatch(fetchWalletAndPrices());
  }, [dispatch]);

  if (loading) return <p>Loading wallet...</p>;
  if (error) return <p>Error: {error}</p>;

  const calculateTotalBalance = () => {
    if (!wallet || !cryptoPrices) return 0;

    return wallet.importo + wallet.walletCryptoList.reduce((total, crypto) => {
      const price = cryptoPrices[crypto.simbolo]?.USD || 0;
      return total + crypto.saldo * price;
    }, 0);
  };

  if (loading) {
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
    <Card className="my-wallet-card text-center" bg="dark" text="light">
      <Card.Body>
        <Card.Title>Total Balance</Card.Title>
        <Card.Text className="fs-4">
          ${calculateTotalBalance().toFixed(2)} USD
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyWalletCard