const initialState = {
    loggedInUserInfo: null,
    isLoggedIn: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_LOGIN_SUCCESS':
            return {...state,isLoggedIn: true, loggedInUserInfo: action.payload};
        case 'ON_LOGIN_ERROR':
            return {...state,isLoggedIn: null,loggedInUserInfo: null};
        default:
            return state;
    }
};

export default reducer;