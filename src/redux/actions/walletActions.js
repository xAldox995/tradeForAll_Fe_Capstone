import axios from "../config/axiosConfig"
import { API_URL } from "./authActions";
import { WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./types";


export const fetchWallet = () => (dispatch, getState) => {

  const token = getState().auth.user?.accessToken;
  if (!token) {
    console.error("Access token is missing.");
    return;
  }
    dispatch({ type: WALLET_REQUEST });
    axios
      .get(`${API_URL}/wallets/me`, {
       headers: {
           Authorization: `Bearer ${token}`,
       }
      })
      .then((response) => {
        console.log("Fetched Wallet:", response.data);
        dispatch({ type: WALLET_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.error("Wallet fetch error:", error)
        dispatch({
          type: WALLET_FAILURE,
          payload: error.response?.data?.message || error.message,
        });
      });
}
