import http from '../config/http';
import { push } from 'react-router-redux';
// export the action for adding a user education
// http.post('/usereducations',value)
//     .then((response) => {
//         dispatch(onCreateUserEducationSuccessfull(response.data));
//         dispatch(getUserEducation(id))
//     })
//     .catch(function(error){
//         dispatch(onCreateUserEducationError(error));
//     })
let id = window.localStorage.getItem('id');
export const createUserEducation = ( body ) => {
    return async (dispatch) => {
        try {
            for (let i = 0; i < body.length; i++) {
                const education = body[i];
                const resp = await http.post('/usereducations',education);
            }
        }
        catch(error){
            dispatch(onCreateUserEducationError(error));
        }
        dispatch(getUserEducation(id));
    }
}

export const onCreateUserEducationSuccessfull = () => {
    return { type : 'ON_CREATE_USER_EDUCATION_SUCCESSFULL'}
};
export const onCreateUserEducationError = (error) => {
    return {type : 'ON_CREATE_USER_EDUCATION_ERROR', error}
}

export const updateUserEducation = (value,value1) => {
    return (dispatch) => {
        http.put('/usereducations/'+value,value1)
            .then((response) => {
                dispatch(onUpdateUserEducationSuccessfull(response.data));
                dispatch(getUserEducation(id))
            })
            .catch(function(error){
                dispatch(onUpdateUserEducationError(error));
            })
    }
};

export const onUpdateUserEducationSuccessfull = (payload) => {
    return { type : 'ON_UPDATE_USER_EDUCATION_SUCCESSFULL',payload}
};
export const onUpdateUserEducationError = (error) => {
    return {type : 'ON_UPDATE_USER_EDUCATION_ERROR', error}
};

export const updateWork = (value,value1) => {
    return (dispatch) => {
        http.put('/userworkexperiences/'+value,value1)
            .then((response) => {
                dispatch(onUpdateUserWorkSuccessfull(response.data));
                dispatch(getUserWorkExperience(id))
            })
            .catch(function(error){
                dispatch(onUpdateUserWorkError(error));
            })
    }
};

export const onUpdateUserWorkSuccessfull = (payload) => {
    return { type : 'ON_UPDATE_USER_WORK_SUCCESSFULL',payload}
};
export const onUpdateUserWorkError = (error) => {
    return {type : 'ON_UPDATE_USER_WORK_ERROR', error}
};

export const deleteUserEducation = (value) => {
    return (dispatch) => {
        http.delete('/usereducations/'+value)
            .then((response) => {
                dispatch(onDeleteUserEducationSuccessfull(response.data));
                dispatch(getUserEducation(id))
            })
            .catch(function(error){
                dispatch(onDeleteUserEducationError(error));
            })
    }
}

export const onDeleteUserEducationSuccessfull = () => {
    return { type : 'ON_DELETE_USER_EDUCATION_SUCCESSFULL'}
};
export const onDeleteUserEducationError = (error) => {
    return {type : 'ON_DELETE_USER_EDUCATION_ERROR', error}
}

export const deleteUserWork = (value) => {
    return (dispatch) => {
        http.delete('/userworkexperiences/'+value)
            .then((response) => {
                dispatch(onDeleteUserWorkExperienceSuccessfull(response.data));
                dispatch( getUserWorkExperience(id))
            })
            .catch(function(error){
                dispatch(onDeleteUserWorkExperienceError(error));
            })
    }
}

export const onDeleteUserWorkExperienceSuccessfull = (payload) => {
    return { type : 'ON_DELETE_USER_WORK_SUCCESSFULL',payload}
};
export const onDeleteUserWorkExperienceError = (error) => {
    return {type : 'ON_DELETE_USER_WORK_ERROR', error}
}

// export the action for adding a user work experience
export const createUserWorkExperience = (body) => {
    return async (dispatch) => {
        try {
            for (let i = 0; i < body.length; i++) {
                const experience = body[i];
                const resp = await http.post('/userworkexperiences',experience);
            }
        }
        catch(error){
            dispatch(onCreateUserWorkExperienceError(error));
        }
        dispatch(getUserWorkExperience(id));
    }
}

export const onCreateUserWorkExperienceSuccessfull = () => {
    return { type : 'ON_CREATE_USER_WORK_EXPERIENCE_SUCCESSFULL'}
};
export const onCreateUserWorkExperienceError = (error) => {
    return {type : 'ON_CREATE_USER_WORK_EXPERIENCE_ERROR', error}
}


export const initLogin = (value) => {
    return (dispatch) => {
        http.post('/users/login',value)
            .then((response) => {
                window.localStorage.setItem('id',response.data.id);
                window.localStorage.setItem('userRoleId',response.data.userRoleId);
                window.localStorage.setItem('user', JSON.stringify(response.data));
                dispatch(onLoginSuccess(response.data));

                if(response.data.userRoleId === 1) {
                    dispatch(push('/AdminUsersPage'));
                }
                else if (response.data.userRoleId === 2) {
                    dispatch(push('/CompaniesPage'));
                }
                else if (response.data.userRoleId === 3) {
                    dispatch(push('/UsersPage'));
                }
            })
            .catch((error) => dispatch(onLoginFailure(error)));
    };
};



export const onLoginSuccess = (payload) => {
    return { type:'ON_LOGIN_SUCCESS', payload};
};
export const onLoginFailure = (error) => {
    return { type: 'ON_LOGIN_ERROR',error};
};

export const checkIfUserIsLoggedIn = () => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch(onLoginSuccess(user));
        }
    }
};

export const register = (value) => {
    return (dispatch) => {
        http.post('/users',value)
            .then((response) => {
                dispatch(onRegisterSuccessfull(response.data));
            })
            .catch(function(error){
                dispatch(onRegisterError(error));
            })
    }
};

export const onRegisterSuccessfull = (payload) => {
    return { type: 'ON_REGISTER_SUCCESSFUL',payload}
};
export const onRegisterError = (error) => {
    return { type: 'ON_REGISTER_ERROR',error}
};

export const getInfoAboutUser = (value,value1) => {
    return (dispatch) => {
        http.get('/users/' + value + '/' + value1)
            .then((response) =>
            {
                dispatch(onGetUserInfoSuccessfull(response.data));
            })
            .catch(function(error){
                dispatch(onGetUserInfoError(error));
            })
    }
};

export const onGetUserInfoSuccessfull = (payload) => {
    return { type : 'ON_GET_USER_INFO_SUCCESSFULL',payload}
};
export const onGetUserInfoError = (error) => {
    return {type : 'ON_GET_USER_INFO_ERROR', error}
};

export const getUserEducation = (value1) => {
    return (dispatch) => {
        http.get('/usereducations/user/' + value1)
            .then((response) =>
            {
                dispatch(onGetUserEducationSuccessfull(response.data));
            })
            .catch(function(error){
                dispatch(onGetUserEducationError(error));
            })
    }
};
export const onGetUserEducationSuccessfull = (payload) => {
    return { type : 'ON_GET_USER_EDUCATION_SUCCESSFULL',payload}
};
export const onGetUserEducationError = (error) => {
    return {type : 'ON_GET_USER_EDUCATION_ERROR', error}
};
export const getUserWorkExperience = (value1) => {
    return (dispatch) => {
        http.get('/userworkexperiences/user/' + value1)
            .then((response) =>
            {
                dispatch(onGetUserWorkExperienceSuccessfull(response.data));
            })
            .catch(function(error){
                dispatch(onGetUserWorkExperienceError(error));
            })
    }
};
export const onGetUserWorkExperienceSuccessfull = (payload) => {
    return { type : 'ON_GET_USER_WORK_EXPERIENCE_SUCCESSFULL',payload}
};
export const onGetUserWorkExperienceError = (error) => {
    return {type : 'ON_GET_USER_WORK_EXPERIENCE_ERROR', error}
};