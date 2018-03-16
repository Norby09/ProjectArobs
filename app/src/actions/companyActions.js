import http from '../config/http';

let id = localStorage.getItem('id');
export const createCompany = (value) => {
    return (dispatch) => {
        http.post('/companies', value)
            .then((response) =>
            {
                dispatch(onCreateCompanySuccessfull(response.data));
                dispatch(listCompanies(id))
            })
            .catch(function(error){
                dispatch(onCreateCompanyError(error))
            });
    }
}

export const onCreateCompanySuccessfull = (payload) => {
    return { type : 'ON_CREATE_COMPANY_SUCCESSFULL', payload}
};
export const onCreateCompanyError = (error) => {
    return {type : 'ON_CREATE_COMPANY_ERROR', error}
}

// export the action for deleting an user
export const deleteCompany = (value) => {
    return (dispatch) => {
        http.delete('/companies/' + value)
            .then((response) =>
            {
                dispatch(onDeleteCompanySuccessfull());
                dispatch(listCompanies(id));
            })
            .catch(function(error){
                dispatch(onDeleteCompanyError(error))
            });
    }
}

export const onDeleteCompanySuccessfull = () => {
    return { type : 'ON_DELETE_COMPANY_SUCCESSFULL'}
};
export const onDeleteCompanyError = (error) => {
    return {type : 'ON_DELETE_COMPANY_ERROR', error}
}


export const listCompanies = (value) => {
    return (dispatch) => {
        http.get('/companies/user/' + value)
            .then((response) =>
            {
                dispatch(onSuccessfullGetCompanies(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetCompanies(error))
            });
    }
}

export const onSuccessfullGetCompanies = (payload) => {
    return { type : 'ON_SUCCESSFULL_GET_COMPANIES', payload}
};
export const onErrorGetCompanies = (error) => {
    return {type : 'ON_ERROR_GET_COMPANIES', error}
}

export const updateCompany = (value,body) => {
    return (dispatch) => {
        http.put('/companies/' + value,body)
            .then((response) =>
            {
                dispatch(onUpdateCompanySuccessfull());
                dispatch(listCompanies(id));
            })
            .catch(function(error){
                dispatch(onUpdateCompanyError(error))
            });
    }
}

export const onUpdateCompanySuccessfull = () => {
    return { type : 'ON_UPDATE_COMPANY_SUCCESSFULL'}
};
export const onUpdateCompanyError = (error) => {
    return {type : 'ON_UPDATE_COMPANY_ERROR', error}
};