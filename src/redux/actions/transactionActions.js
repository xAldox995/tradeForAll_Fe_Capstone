import axios from "../config/axiosConfig"
import { API_URL } from "./authActions";
import { TRANSACTION_FAILURE, TRANSACTION_REQUEST, TRANSACTION_SUCCESS } from "./types";

export const createTransaction = (simbolo, tipo, quantita) => (dispatch) => {
    dispatch({ type: TRANSACTION_REQUEST });
    axios.post(`${API_URL}/api/transazioni?symbol=${simbolo}`, {
        tipo, quantita
    })
        .then((response) => {
            dispatch({ type: TRANSACTION_SUCCESS, payload: response.data });
        })
        .catch((error) => {
            dispatch({
                type: TRANSACTION_FAILURE,
                payload: error.response?.data?.message || error.message,
            });
        });
}