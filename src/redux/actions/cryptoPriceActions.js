import axios from "axios";
import { CRYPTO_COMPARE_PREZZO_FAILURE, CRYPTO_COMPARE_PREZZO_REQUEST, CRYPTO_COMPARE_PREZZO_SUCCESS } from "./types";
import { API_URL } from "./authActions";

export const fetchCryptoPrice = (symbol) => (dispatch) => {
    dispatch({ type: CRYPTO_COMPARE_PREZZO_REQUEST, payload: symbol });
    axios.get(`${API_URL}/crypto/price?symbol=${symbol}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
        .then((response) => {
            dispatch({ type: CRYPTO_COMPARE_PREZZO_SUCCESS, payload: response.data });
        })
        .catch((error) => {
            dispatch({
                type: CRYPTO_COMPARE_PREZZO_FAILURE,
                payload: error.response?.data?.message || error.message,
            });
        });
};