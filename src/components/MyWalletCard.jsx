import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWallet } from "../redux/actions/walletActions";
import { fetchCryptoPrice } from "../redux/actions/cryptoPriceActions";

const MyWalletCard = () => {
  const dispatch = useDispatch();

  // Redux state
  const { user } = useSelector((state) => state.auth);
  const { wallet, loading: walletLoading, error: walletError } = useSelector(
    (state) => state.wallet
  );
  const {
    cryptoPrices,
    loading: cryptoPricesLoading,
    error: cryptoPricesError,
  } = useSelector((state) => state.cryptoPrice);

  // Fetch wallet data
  useEffect(() => {
    if (user?.accessToken) {
      dispatch(fetchWallet());
    } else {
      console.error("User is not authenticated.");
    }
  }, [dispatch, user]);

  // Fetch crypto prices for each asset
  useEffect(() => {
    if (
      wallet &&
      wallet.walletCryptoList &&
      Array.isArray(wallet.walletCryptoList)
    ) {
      wallet.walletCryptoList.forEach((crypto) => {
        if (crypto.symbol) {
          dispatch(fetchCryptoPrice(crypto.symbol));
        }
      });
    }
  }, [dispatch, wallet]);

  // Calculate total balance
  const totalBalance = () => {
    if (!wallet || !wallet.walletCryptoList || cryptoPricesLoading) {
      return "Loading...";
    }

    const cryptoValue = wallet.walletCryptoList.reduce((acc, crypto) => {
      const price = cryptoPrices[crypto.symbol] || 0;
      return acc + crypto.saldo * price;
    }, 0);

    return (wallet.importo + cryptoValue).toFixed(2);
  };

  // Render loading/error states
  if (walletLoading) return <p>Loading wallet...</p>;
  if (walletError) return <p>Error loading wallet: {walletError}</p>;
  if (cryptoPricesError) return <p>Error loading crypto prices: {cryptoPricesError}</p>;

  // Render component
  return (
    <Card className="cards">
      <Card.Body>
        <Card.Title>My Wallet</Card.Title>
        <Card.Text>
          Total Value: €{totalBalance()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyWalletCard