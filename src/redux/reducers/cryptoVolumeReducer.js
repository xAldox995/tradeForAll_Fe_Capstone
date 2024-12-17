import {
    CRYPTO_COMPARE_VOLUME_REQUEST,
    CRYPTO_COMPARE_VOLUME_SUCCESS,
    CRYPTO_COMPARE_VOLUME_FAILURE,
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    topVolume: [],
    error: null,
  };
  
  const cryptoVolumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case CRYPTO_COMPARE_VOLUME_REQUEST:
        return { ...state, loading: true, error: null };
      case CRYPTO_COMPARE_VOLUME_SUCCESS:
        return { ...state, loading: false, topVolume: action.payload };
      case CRYPTO_COMPARE_VOLUME_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default cryptoVolumeReducer;