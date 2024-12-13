import { TRANSACTION_REQUEST, TRANSACTION_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    transactions: null,
};

export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TRANSACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.payload,
            };
        default:
            return state;
    }
};
