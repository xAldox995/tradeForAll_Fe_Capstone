import axios from "axios";
import { API_URL } from "./authActions";
import { WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./types";


export const fetchWallet = () => (dispatch) => {
    dispatch({ type: WALLET_REQUEST });
    axios
      .get(`${API_URL}/wallets/me`, {
       headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
       }
      })
      .then((response) => {
        dispatch({ type: WALLET_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: WALLET_FAILURE,
          payload: error.response?.data?.message || error.message,
        });
      });
}
