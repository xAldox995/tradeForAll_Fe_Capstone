import {
    WALLET_REQUEST,
    WALLET_SUCCESS,
    WALLET_FAILURE,
    CRYPTO_COMPARE_PREZZO_SUCCESS,
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    error: null,
    wallet: null,
    balances: {}, // Mappa dei valori degli asset
    totalValue: 0, // Valore totale del wallet
  };
  
  export const walletReducer = (state = initialState, action) => {
    switch (action.type) {
      case WALLET_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case WALLET_SUCCESS:
        return {
          ...state,
          loading: false,
          wallet: action.payload.wallet, // Aggiorna il wallet
          totalValue: action.payload.totalValue || 0, // Aggiorna il totale del wallet
          balances: action.payload.balances || {}, // Aggiorna la mappa dei valori
        };
      case WALLET_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CRYPTO_COMPARE_PREZZO_SUCCESS:
        return {
          ...state,
          balances: action.payload.balances, // Aggiorna i valori delle criptovalute
        };
      default:
        return state;
    }
  };
  