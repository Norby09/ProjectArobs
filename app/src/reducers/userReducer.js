const initialState = {
    userCreated : null,
    userInfo : null,
    listOfAllUsers : null,
    open : false,
    userDetailedInfo : null,
    userEducationList : null,
    error : null,
    userExperience : null,
    userRegister : null,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CREATE_USER_SUCCESSFULL':
            return {...state,userInfo: action.payload};
        case 'ON_CREATE_USER_ERROR':
            return {...state,userInfo: null};
        case 'ON_SUCCESSFULL_GET_USERS':
            return {...state,listOfAllUsers: action.payload};
        case 'ON_ERROR_GET_USERS':
            return {...state,listOfAllUsers: null};
        case 'ON_DELETE_USER_SUCCESSFULL':
            return {...state};
        case 'ON_DELETE_USER_ERROR':
            return {...state};
        case 'ON_UPDATE_USER_SUCCESSFULL':
            return {...state};
        case 'ON_UPDATE_USER_ERROR':
            return {...state};
        case 'ON_HANDLE_OPEN':
            return {...state,open:true};
        case 'ON_HANDLE_CLOSE':
            return {...state,open:false};
        case 'ON_CREATE_USER_EDUCATION_SUCCESSFULL':
            return {...state};
        case 'ON_CREATE_USER_EDUCATION_ERROR':
            return {...state};
        case 'ON_CREATE_USER_WORK_EXPERIENCE_SUCCESSFULL':
            return {...state};
        case 'ON_CREATE_USER_WORK_EXPERIENCE_ERROR':
            return {...state};
        case 'ON_GET_USER_INFO_SUCCESSFULL':
            return {...state,userDetailedInfo:action.payload};
        case 'ON_GET_USER_INFO_ERROR':
            return {...state,userDetailedInfo:null};
        case 'ON_GET_USER_EDUCATION_SUCCESSFULL':
            return {...state,userEducationList: action.payload};
        case 'ON_GET_USER_EDUCATION_ERROR':
            return {...state,error:action.error};
        case 'ON_UPDATE_USER_EDUCATION_SUCCESSFULL':
            return {...state}
        case 'ON_UPDATE_USER_EDUCATION_ERROR':
            return {...state,error:action.error};
        case 'ON_GET_USER_WORK_EXPERIENCE_SUCCESSFULL':
            return {...state,userExperience : action.payload};
        case 'ON_GET_USER_WORK_EXPERIENCE_ERROR':
            return {...state,error:action.error};
        case 'ON_DELETE_USER_WORK_SUCCESSFULL':
            return {...state};
        case 'ON_DELETE_USER_WORK_ERROR':
            return {...state,error:action.error};
        case 'ON_REGISTER_SUCCESSFUL':
            return {...state,userRegister : action.payload};
        case 'ON_REGISTER_ERROR':
            return {...state};
        case 'ON_UPDATE_USER_WORK_SUCCESSFULL':
            return {...state};
        case 'ON_UPDATE_USER_WORK_ERROR':
            return {...state};
        default:
            return state;
    }
};

export default reducer;