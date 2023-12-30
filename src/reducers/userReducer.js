const initialState = {
    userData: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, userData: action.payload };
        // other cases
        default:
            return state;
    }
}

export default userReducer;