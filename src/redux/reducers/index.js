import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import AuthReducer from "./AuthReducer";
import { walletReducer } from "./walletReducer";
import { cryptoPriceReducer } from "./cryptoPriceReducer";
import { transactionReducer } from "./transactionReducer";

const rootReducer = combineReducers({
    wallet: walletReducer,
    cryptoPrice: cryptoPriceReducer,
    transaction: transactionReducer ,
    tema: themeReducer,
    auth: AuthReducer
})

export default rootReducer