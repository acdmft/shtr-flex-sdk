const sharetribeSdk = require('sharetribe-flex-sdk');
const sdk = sharetribeSdk.createInstance({
    clientId: process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID
  });

 // Action Types
const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_ERROR = 'user/LOGIN_ERROR';
const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'user/SIGNUP_ERROR';

// Initial State
const initialState = {
    isAuthenticated: false,
    // auth info
    authInfoLoaded: false,
    // login
    loginError: null,
    loginInProgress: false,
    // logout
    logoutError: null,
    // signup
    signupError: null,
    signupInProgress: false,

}

// Reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginInProgress: true,
                loginError: null,
                logoutError: null,
                signupError: null,
              };
        case LOGIN_SUCCESS:
            return { ...state, loginInProgress: false, isAuthenticated: true };
        case SIGNUP_REQUEST:
            return { ...state, signupInProgress: true, loginError: null, signupError: null}
        default:
            return state;
    }
}

// Action Creators
export const login = (username, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    sdk.authInfo().then((authinfo)=> {
        console.log('authinfo', authinfo);
        return sdk.login({username, password})
    }).then((resp) => {
        dispatch({ type: LOGIN_SUCCESS })
        console.log('resp ', resp);
    }).catch((err)=>{
        console.log('error ', err);
    })
    // console.log('login called')

}

export const signup = (credentials) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    sdk.currentUser.create(credentials)
    .then((resp)=> console.log('signup res', resp) )
    .catch((err) => console.log('error ', err))

}

export const authInfo = () => {
    // return "test"
    sdk.authInfo().then(authInfo => {
        if (authInfo && authInfo.isAnonymous === false) {
          console.log("User is logged in.");
            return "is logged in"
        } else {
            return "is not logged in"
        //   console.log("User is NOT logged in.")
        }
        // return authInfo && authInfo.isAnonymous;
      })
}