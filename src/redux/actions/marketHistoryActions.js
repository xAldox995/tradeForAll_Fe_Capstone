import axios from "axios";
import { API_URL } from "./authActions";
import {

    CRYPTO_COMPARE_HISTORY_FAILURE,
    CRYPTO_COMPARE_HISTORY_REQUEST,
    CRYPTO_COMPARE_HISTORY_SUCCESS,
} from "./types";

export const fetchMarketHistory = (symbol) => (dispatch) => {
    dispatch({ type: CRYPTO_COMPARE_HISTORY_REQUEST });
  
    const token = localStorage.getItem("token");
    axios
      .get(`${API_URL}/api/crypto/market-history?symbol=${symbol}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const historyData = response.data?.Data?.Data || [];
        dispatch({
          type: CRYPTO_COMPARE_HISTORY_SUCCESS,
          payload: { symbol, history: historyData },
        });
      })
      .catch((error) => {
        dispatch({
          type: CRYPTO_COMPARE_HISTORY_FAILURE,
          payload: error.response?.data?.message || error.message,
        });
      });
  };

