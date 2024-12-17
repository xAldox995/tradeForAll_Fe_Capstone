import { CRYPTO_COMPARE_HISTORY_FAILURE, CRYPTO_COMPARE_HISTORY_REQUEST, CRYPTO_COMPARE_HISTORY_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    marketHistory: {},
}

export const marketHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case CRYPTO_COMPARE_HISTORY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CRYPTO_COMPARE_HISTORY_SUCCESS:
        return {
          ...state,
          loading: false,
          history: {
            ...state.history,
            [action.payload.symbol]: action.payload.history,
          },
        };
      case CRYPTO_COMPARE_HISTORY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };