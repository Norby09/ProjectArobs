const initialState = {
    companyInfo : null,
    error : null,
    listOfAllCompanies: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CREATE_COMPANY_SUCCESSFULL':
            return {...state,companyInfo: action.payload};
        case 'ON_CREATE_COMPANY_ERROR':
            return {...state,error:action.error};
        case 'ON_SUCCESSFULL_GET_COMPANIES':
            return {...state,listOfAllCompanies: action.payload};
        case 'ON_ERROR_GET_COMPANIES':
            return {...state,error:action.error};
        case 'ON_DELETE_COMPANY_SUCCESSFULL':
            return {...state};
        case 'ON_DELETE_COMPANY_ERROR':
            return {...state};
        case 'ON_UPDATE_COMPANY_SUCCESSFULL':
            return {...state};
        case 'ON_UPDATE_COMPANY_ERROR':
            return {...state,error:action.error};
        default:
            return state;
    }
};

export default reducer