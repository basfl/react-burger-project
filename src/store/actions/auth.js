import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart=()=>{
   
    return ({
        type:actionTypes.AUTH_START
    })
}
export const authSuccess = ( token, userId ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};
export const authFailure = ( error ) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const logout=()=>{
    return ({
        type: actionTypes.AUTH_LOGOUT
    });
}
export const checkAuthTimeout=(expirationTime)=>{
    return ( (dispatch)=>{
        
        setTimeout(function() {
            dispatch(logout());
        }, expirationTime*1000);
    }

    );
}
export const auth=(email,password,isSignup)=>{
    return (dispatch=>{
        dispatch(authStart());
        const authData={
            email:email, 
            password:password,
            returnSecureToken:true
        }
        console.log("email is ",authData.email+" password is ", authData.password);
        let url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAjQONrdle4GFnN2EVrw0mO9JeHkImaT2E";
        if(!isSignup){
           url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAjQONrdle4GFnN2EVrw0mO9JeHkImaT2E";
        }
     
        axios.post(url, authData)
        .then( response => {
           console.log(response);
           dispatch( authSuccess( response.data.idToken, response.data.localId ) );
           dispatch(checkAuthTimeout(response.data.expireIn));
    
        })
        .catch(err => {
            dispatch( authFailure( err.response.data.error ) );
        
});
        
        
    });
}