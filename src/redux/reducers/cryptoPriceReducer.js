import { CRYPTO_COMPARE_HISTORY_SUCCESS, CRYPTO_COMPARE_PREZZO_FAILURE, CRYPTO_COMPARE_PREZZO_REQUEST } from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    cryptoPrice: {},
};

export const cryptoPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case CRYPTO_COMPARE_PREZZO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CRYPTO_COMPARE_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                cryptoPrice: { ...state.cryptoPrice, [action.payload.symbol]: action.payload },
            };

        case CRYPTO_COMPARE_PREZZO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}