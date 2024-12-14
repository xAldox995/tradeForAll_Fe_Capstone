import axios from "axios";
import { API_URL } from "./authActions";
import { CRYPTO_COMPARE_PREZZO_FAILURE, CRYPTO_COMPARE_PREZZO_SUCCESS, WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./types";


export const fetchWalletAndPrices = () => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log("Token in localStorage:", token); // Verifica il token
  if (!token) {
    console.error("Access token is missing.");
    return;
  }

  dispatch({ type: WALLET_REQUEST });

  axios
    .get(`${API_URL}/wallets/me`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }, // Sintassi corretta
    })
    .then((walletResponse) => {
      const wallet = walletResponse.data;
      dispatch({ type: WALLET_SUCCESS, payload: wallet });

      const priceRequests = wallet.walletCryptoList.map((crypto) =>
        console.log(crypto.simbolo),
        axios.get(`${API_URL}/crypto/price?symbol=${crypto.simbolo}`)
      );

      return Promise.all(priceRequests)
        .then((priceResponses) => {
          const prices = priceResponses.reduce((acc, response, index) => {
            const symbol = wallet.walletCryptoList[index].simbolo;
            acc[symbol] = response.data;
            console.log(response);
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
      console.log(walletError.response); // Visualizza la risposta dell'errore
      dispatch({
        type: WALLET_FAILURE,
        payload: walletError.response?.data?.message || walletError.message,
      });
    });
};

