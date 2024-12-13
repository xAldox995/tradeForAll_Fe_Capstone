import axios from "axios";
import { API_URL } from "./authActions";
import { CRYPTO_COMPARE_PREZZO_FAILURE, CRYPTO_COMPARE_PREZZO_SUCCESS, WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./types";


export const fetchWalletAndPrices = () => (dispatch) => {
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
      dispatch({ type: WALLET_SUCCESS, payload: wallet });

      // Fetch prices for all symbols
      const priceRequests = wallet.walletCryptoList.map((crypto) =>
        axios.get(`${API_URL}/api/crypto/price?symbol=${crypto.simbolo}`)
      );

      return Promise.all(priceRequests)
        .then((priceResponses) => {
          const prices = priceResponses.reduce((acc, response, index) => {
            const symbol = wallet.walletCryptoList[index].simbolo;
            acc[symbol] = response.data;
            return acc;
          }, {});

          dispatch({ type: CRYPTO_COMPARE_PREZZO_SUCCESS, payload: prices });
        })
        .catch((priceError) => {
          console.error("Error fetching prices:", priceError);
          dispatch({
            type: CRYPTO_COMPARE_PREZZO_FAILURE,
            payload: priceError.message,
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

