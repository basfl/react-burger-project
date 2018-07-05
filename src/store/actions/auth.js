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
    
        })
        .catch(err => {
          //  dispatch( authFailure( err.response.data.error ) );
        
});
        
        
    });
}