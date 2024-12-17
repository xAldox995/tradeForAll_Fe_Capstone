import axios from "axios";
import { API_URL } from "./authActions";
import { WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./types";

export const fetchWalletAndBalance = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Access token is missing.");
    return;
  }

  dispatch({ type: WALLET_REQUEST });

  axios
    .get(`${API_URL}/wallets/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((walletResponse) => {
      const wallet = walletResponse.data;

      axios
        .get(`${API_URL}/wallets/me/cryptos/wallets_value`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((balanceResponse) => {
          const balances = balanceResponse.data; // Mappa valori degli asset
          const totalCryptoValue = Object.values(balances).reduce(
            (acc, value) => acc + value,
            0
          );

          const totalValue = wallet.importo + totalCryptoValue;

          dispatch({
            type: WALLET_SUCCESS,
            payload: {
              wallet,
              balances,
              totalValue,
            },
          });
        })
        .catch((error) => {
          console.error("Error fetching crypto balances:", error);
          dispatch({
            type: WALLET_FAILURE,
            payload: error.message,
          });
        });
    })
    .catch((walletError) => {
      console.error("Error fetching wallet:", walletError);
      dispatch({
        type: WALLET_FAILURE,
        payload: walletError.response?.data?.message || walletError.message,
      });
    });
};
