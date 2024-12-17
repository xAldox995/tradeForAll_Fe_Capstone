import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import AuthReducer from "./AuthReducer";
import { walletReducer } from "./walletReducer";
import { cryptoPriceReducer } from "./cryptoPriceReducer";
import { transactionReducer } from "./transactionReducer";
import { marketHistoryReducer } from "./marketHistoryReducer";
import cryptoVolumeReducer from "./cryptoVolumeReducer";

const rootReducer = combineReducers({
    crypto: cryptoVolumeReducer,
    marketHistory: marketHistoryReducer,
    wallet: walletReducer,
    cryptoPrice: cryptoPriceReducer,
    transaction: transactionReducer ,
    tema: themeReducer,
    auth: AuthReducer
})

export default rootReducer