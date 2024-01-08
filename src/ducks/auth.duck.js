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
        case SIGNUP_REQUEST:
            return { ...state, }
    }
}

// Action Creators
export const login = (credentials) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    sdk.authInfo().then((authinfo)=> {
        console.log('authinfo', authinfo);
        return sdk.login(credentials)
    }).then((resp) => {
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
