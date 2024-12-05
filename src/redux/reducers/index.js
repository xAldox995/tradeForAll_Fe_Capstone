import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    tema: themeReducer
})

export default rootReducer