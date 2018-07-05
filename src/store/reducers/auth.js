import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};
const reducer=(state=initialState,action)=>{
    switch( action.type ) {
        case actionTypes.AUTH_START: return state;
        case actionTypes.AUTH_SUCCESS: return state;
        case actionTypes.AUTH_FAIL: return state;
        case actionTypes.AUTH_LOGOUT: return state;
        case actionTypes.SET_AUTH_REDIRECT_PATH: return state;
        default: return state;
}
}
export default reducer;
