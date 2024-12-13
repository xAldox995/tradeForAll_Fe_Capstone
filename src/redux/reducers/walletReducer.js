import { WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    wallet: null,
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
                wallet: action.payload || { walletCryptoList: [], importo: 0 },
            };
        case WALLET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:    
            return state;    
    }
};