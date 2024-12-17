import axios from "axios";
import { API_URL } from "./authActions";
import { TRANSACTION_FAILURE, TRANSACTION_REQUEST, TRANSACTION_SUCCESS } from "./types";

export const executeTransaction = (transactionData) => (dispatch) => {
    const { idWallet, symbol, quantita, tipoTransazione } = transactionData;
  
    dispatch({ type: TRANSACTION_REQUEST });
  
    const token = localStorage.getItem("token");
  
    console.log("Eseguendo transazione con i seguenti parametri:");
    console.log("URL:", `${API_URL}/api/transazioni?symbol=${symbol}&currency=EUR`);
    console.log("Payload:", {
      idWallet,
      quantita,
      tipoTransazione,
    });
  
    return axios
      .post(
        `${API_URL}/api/transazioni?symbol=${symbol}`,
        {
          idWallet,
          quantita,
          tipoTransazione,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log("Risposta dal server:", response.data);
        dispatch({ type: TRANSACTION_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.error("Errore dal backend:", error.response?.data || error.message);
        dispatch({
          type: TRANSACTION_FAILURE,
          payload: error.response?.data?.message || "Errore durante la transazione.",
        });
        throw error;
      });
  };