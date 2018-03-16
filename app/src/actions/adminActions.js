import http from '../config/http';

// creates a user
export const createUser = (value) => {
    return (dispatch) => {
        http.post('/users', value)
            .then((response) =>
            {
                dispatch(onCreateUserSuccessfull(response.data));
                dispatch(listUsers());
            })
            .catch(function(error){
                dispatch(onCreateUserError(error))
            });
    }
}

export const onCreateUserSuccessfull = (payload) => {
    return { type : 'ON_CREATE_USER_SUCCESSFULL', payload}
};
export const onCreateUserError = (error) => {
    return {type : 'ON_CREATE_USER_ERROR', error}
}


// export the action for deleting an user
export const deleteUser = (value) => {
    return (dispatch) => {
        http.delete('/users/' + value)
            .then((response) =>
            {
                dispatch(onDeleteUserSuccessfull());
                dispatch(listUsers());

            })
            .catch(function(error){
                dispatch(onDeleteUserError(error))
            });
    }
}

export const onDeleteUserSuccessfull = () => {
    return { type : 'ON_DELETE_USER_SUCCESSFULL'}
};
export const onDeleteUserError = (error) => {
    return {type : 'ON_DELETE_USER_ERROR', error}
}

// list the users
export const listUsers = () => {
    return (dispatch) => {
        http.get('/users')
            .then((response) =>
            {
                dispatch(onSuccessfullGetUsers(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetUsers(error))
            });
    }
}

export const onSuccessfullGetUsers = (payload) => {
    return { type : 'ON_SUCCESSFULL_GET_USERS', payload}
};
export const onErrorGetUsers = (error) => {
    return {type : 'ON_ERROR_GET_USERS', error}
}

// update a specific user
export const updateUsers = (value,body) => {
    return (dispatch) => {
        http.put('/users/' + value,body)
            .then((response) =>
            {
                console.log(response);
                dispatch(onUpdateUserSuccessfull());
                dispatch(listUsers());
                dispatch(onHandleClose())
            })
            .catch(function(error){
                dispatch(onUpdateUserError(error))
            });
    }
}

export const onUpdateUserSuccessfull = () => {
    return { type : 'ON_UPDATE_USER_SUCCESSFULL'}
};
export const onUpdateUserError = (error) => {
    return {type : 'ON_UPDATE_USER_ERROR', error}
};
export const onHandleOpen = () => {
    return {type: 'ON_HANDLE_OPEN'}
}
export const onHandleClose = () => {
    return {type : 'ON_HANDLE_CLOSE'}
};