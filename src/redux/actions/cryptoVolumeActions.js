import axios from "axios";
import {
  CRYPTO_COMPARE_VOLUME_REQUEST,
  CRYPTO_COMPARE_VOLUME_SUCCESS,
  CRYPTO_COMPARE_VOLUME_FAILURE,
} from "./types.js";
import { API_URL } from "./authActions.js";

export const fetchTopVolume = () => (dispatch) => {
    dispatch({ type: CRYPTO_COMPARE_VOLUME_REQUEST });
  
    return axios
      .get(`${API_URL}/api/crypto/top/volume?currency=EUR&limit=5`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Risposta ricevuta:", response.data);
  
        if (!response.data.Data || !Array.isArray(response.data.Data)) {
          throw new Error("La risposta del server non contiene dati validi.");
        }
  
        // Estrazione dei dati
        const topVolume = response.data.Data.slice(0, 5).map((crypto) => ({
          name: crypto.CoinInfo.FullName,
          symbol: crypto.CoinInfo.Name,
          volume: crypto.RAW.EUR.VOLUME24HOUR,
          percentChange24h: crypto.RAW.EUR.CHANGEPCT24HOUR, // Aggiunto campo variazione
          imageUrl: `https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`,
        }));
  
        dispatch({ type: CRYPTO_COMPARE_VOLUME_SUCCESS, payload: topVolume });
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error.message);
        dispatch({ type: CRYPTO_COMPARE_VOLUME_FAILURE, payload: error.message });
      });
  };