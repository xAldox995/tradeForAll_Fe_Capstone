import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
    tema: themeReducer,
    auth: AuthReducer
})

export default rootReducer