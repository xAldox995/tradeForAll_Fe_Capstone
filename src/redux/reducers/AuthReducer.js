import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT:
            return { ...state, user: null, error: null };
        default:
            return state;
    }
}
export default AuthReducer