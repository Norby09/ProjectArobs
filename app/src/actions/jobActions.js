import http from '../config/http';
import {getUserEducation, onCreateUserEducationError} from "./userActions";

// apply for a job
let id = window.localStorage.getItem('id');
export const applyForJob = (value) => {
    return (dispatch) => {
        http.post('/userjobapplications', value)
            .then((response) =>
            {
                dispatch(onApplyForJobSuccessfull(response.data));
                dispatch(getJobApplicationsForAUser(id));
            })
            .catch(function(error){
                dispatch(onApplyForJobError(error))
            });
    }
};

export const onApplyForJobSuccessfull = (payload) => {
    return { type : 'ON_APPLY_FOR_JOB_SUCCESSFULL', payload}
};
export const onApplyForJobError = (error) => {
    return {type : 'ON_APPLY_FOR_JOB_ERROR', error}
};

// create a job
export const createJob1 = (value) => {
    return async (dispatch) => {
        try {
            const response = await http.post('/jobs',value);
            const jobId = response.data.id;

            for (let i = 0; i < value.jobRequirementInfoList.length; i ++) {
                const requirement = value.jobRequirementInfoList[i];
                requirement.jobId = jobId;
                const resp = await http.post('/jobrequirements',requirement);
            }

            for (let i = 0; i < value.jobBenefitInfoList.length; i ++) {
                const benefit = value.jobBenefitInfoList[i];
                benefit.jobId = jobId;
                const resp = await http.post('/jobbenefits',benefit);
            }
            dispatch(listJobs());
        }
        catch(error) {
            dispatch (onCreateJobError)
        }
    }
};

export const onCreateJobSuccessfull = (payload) => {
    return { type : 'ON_CREATE_JOB_SUCCESSFULL', payload}
};
export const onCreateJobError = (error) => {
    return {type : 'ON_CREATE_JOB_ERROR', error}
};

export const deleteJobBenefit = (jobbenefitidentifier,jobidentifier) => {
    return (dispatch) => {
        http.delete('/jobbenefits/'+jobbenefitidentifier)
            .then((response) =>
            {
                dispatch(onDeleteJobBenefitSuccessfull());
                dispatch(getInfo(jobidentifier))
            })
            .catch(function(error){
                dispatch(onDeleteJobBenefitError(error))
            })
    }
}


export const onDeleteJobBenefitSuccessfull = () => {
    return { type : 'ON_DELETE_JOB_BENEFIT_SUCCESSFULL'}
};
export const onDeleteJobBenefitError = (error) => {
    return {type : 'ON_DELETE_JOB_BENEFIT_ERROR', error}
};
export const deleteJobRequirement = (jobbenefitidentifier,jobidentifier) => {
    return (dispatch) => {
        http.delete('/jobrequirements/'+jobbenefitidentifier)
            .then((response) =>
            {
                dispatch(onDeleteJobRequirementSuccessfull());
                dispatch(getInfo(jobidentifier))
            })
            .catch(function(error){
                dispatch(onDeleteJobRequirementError(error))
            })
    }
}

export const onDeleteJobRequirementSuccessfull = () => {
    return { type : 'ON_DELETE_JOB_REQUIREMENT_SUCCESSFULL'}
};
export const onDeleteJobRequirementError = (error) => {
    return {type : 'ON_DELETE_JOB_REQUIREMENT_ERROR', error}
};
// export the action for deleting an job
export const deleteJob = (value) => {
    return (dispatch) => {
        http.delete('/jobs/' + value)
            .then((response) =>
            {
                dispatch(onDeleteJobSuccessfull());
                dispatch(listJobs());

            })
            .catch(function(error){
                dispatch(onDeleteJobError(error))
            });
    }
};

export const onDeleteJobSuccessfull = () => {
    return { type : 'ON_DELETE_JOB_SUCCESSFULL'}
};
export const onDeleteJobError = (error) => {
    return {type : 'ON_DELETE_JOB_ERROR', error}
};

export const createBenefit = (value,jobidentifier) => {
    return async (dispatch) => {
        try {
            for (let i = 0; i < value.length; i++) {
                const benefit = value[i];
                const resp = await http.post('/jobbenefits',benefit);
            }
        }
        catch(error){
            dispatch(onCreateBenefitError(error));
        }
        dispatch(getInfo(jobidentifier))
    }
};

export const onCreateBenefitSuccessfull = () => {
    return { type : 'ON_CREATE_BENEFIT_SUCCESSFULL'}
};
export const onCreateBenefitError = (error) => {
    return {type : 'ON_CREATE_BENEFIT_ERROR', error}
};

export const createRequirement = (value,jobidentifier) => {
    return async (dispatch) => {
        try {
            for (let i = 0; i < value.length; i++) {
                const requirement = value[i];
                const resp = await http.post('/jobrequirements',requirement);
            }
        }
        catch(error){
            dispatch(onCreateRequirementError(error));
        }
        dispatch(getInfo(jobidentifier))
    }
};

export const onCreateRequirementSuccessfull = () => {
    return { type : 'ON_CREATE_REQUIREMENT_SUCCESSFULL'}
};
export const onCreateRequirementError = (error) => {
    return {type : 'ON_CREATE_REQUIREMENT_ERROR', error}
};

// list existing jobs
export const listJobs = () => {
    return (dispatch) => {
        http.get('/jobs')
            .then((response) =>
            {
                dispatch(onSuccessfullGetJobs(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetJobs(error))
            });
    }
}

export const onSuccessfullGetJobs = (payload) => {
    return { type : 'ON_SUCCESSFULL_GET_JOBS', payload}
};
export const onErrorGetJobs = (error) => {
    return {type : 'ON_ERROR_GET_JOBS', error}
}

// list jobs created by a company user
export const listJobsForCompanyUser = (value,deep) => {
    return (dispatch) => {
        http.get('/companies/' + value +'/' + deep )
            .then((response) =>
            {
                dispatch(onSuccessfullGetJobsForCompany(response.data.jobInfoList));
                dispatch(listJobs());

            })
            .catch(function(error){
                dispatch(onErrorGetJobsForCompany(error))
            });
    }
}

export const onSuccessfullGetJobsForCompany = (payload) => {
    return { type : 'ON_SUCCESSFULL_GET_JOBS_FOR_COMPANY', payload}
};
export const onErrorGetJobsForCompany = (error) => {
    return {type : 'ON_ERROR_GET_JOBS_FOR_COMPANY', error}
}

// update a specific job
export const updateJob = (value,body) => {
    return (dispatch) => {
        http.put('/jobs/' + value,body)
            .then((response) =>
            {
                console.log(response);
                dispatch(onUpdateJobSuccessfull());
                dispatch(listJobs());
            })
            .catch(function(error){
                dispatch(onUpdateJobError(error))
            });
    }
}

export const onUpdateJobSuccessfull = () => {
    return { type : 'ON_UPDATE_JOB_SUCCESSFULL'}
};
export const onUpdateJobError = (error) => {
    return {type : 'ON_UPDATE_JOB_ERROR', error}
};

export const updateBenefit = (value,body,jobidentifier) => {
    return (dispatch) => {
        http.put('/jobbenefits/' + value,body)
            .then((response) =>
            {
                dispatch(onUpdateBenefitSuccessfull());
                // dispatch(listJobs());
                dispatch(getInfo(jobidentifier))
            })
            .catch(function(error){
                dispatch(onUpdateBenefitError(error))
            });
    }
}

export const onUpdateBenefitSuccessfull = () => {
    return { type : 'ON_UPDATE_BENEFIT_SUCCESSFULL'}
};
export const onUpdateBenefitError = (error) => {
    return {type : 'ON_UPDATE_BENEFIT_ERROR', error}
};

export const updateRequirement = (value,body,jobidentifier) => {
    return (dispatch) => {
        http.put('/jobrequirements/' + value,body)
            .then((response) =>
            {
                dispatch(onUpdateRequirementSuccessfull());
                // dispatch(listJobs());
                dispatch(getInfo(jobidentifier))
            })
            .catch(function(error){
                dispatch(onUpdateRequirementError(error))
            });
    }
}

export const onUpdateRequirementSuccessfull = () => {
    return { type : 'ON_UPDATE_REQUIREMENT_SUCCESSFULL'}
};
export const onUpdateRequirementError = (error) => {
    return {type : 'ON_UPDATE_REQUIREMENT_ERROR', error}
};

export const getJobApplicationsForAUser = (value) => {
    return (dispatch) => {
        http.get('/userjobapplications/user/' + value)
            .then((response) =>
            {
                dispatch(onSuccessfullGetJobApplications(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetJobApplications(error))
            });
    }
}
export const onSuccessfullGetJobApplications = (payload) => {
    return { type : 'ON_GET_JOB_APPLICATIONS_SUCCESSFULL',payload}
};

export const onErrorGetJobApplications = (error) => {
    return {type : 'ON_GET_JOB_APPLICATIONS_ERROR', error}
};

export const getJobApplicationsForAJob = (value) => {
    return (dispatch) => {
        http.get('/userjobapplications/job/' + value)
            .then((response) =>
            {
                dispatch(onSuccessfullGetJobApplicationsForJob(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetJobApplicationsForJob(error))
            });
    }
}
export const onSuccessfullGetJobApplicationsForJob = (payload) => {
    return { type : 'ON_GET_JOB_APPLICATIONS_FOR_JOB_SUCCESSFULL',payload}
};
export const onErrorGetJobApplicationsForJob = (error) => {
    return {type : 'ON_GET_JOB_APPLICATIONS_FOR_JOB_ERROR', error}
};
export const getInfo = (value) => {
    return (dispatch) => {
        http.get('/jobs/' + value)
            .then((response) =>
            {
                dispatch(onSuccessfullGetInfoJobs(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetInfoJobs(error))
            });
    }
}

export const onSuccessfullGetInfoJobs = (payload) => {
    return { type : 'ON_SUCCESSFULL_GET_INFO_FOR_JOB', payload}
};
export const onErrorGetInfoJobs = (error) => {
    return {type : 'ON_ERROR_GET_INFO_FOR_JOB', error}
}

export const getSkills = () => {
    return (dispatch) => {
        http.get('/skills')
            .then((response) =>
            {
                dispatch(onSuccessfullGetSkills(response.data));

            })
            .catch(function(error){
                dispatch(onErrorGetSkills(error))
            });
    }
}

export const onSuccessfullGetSkills = (payload) => {
    return { type : 'ON_SUCCESSFULL_GET_SKILLS', payload}
};
export const onErrorGetSkills = (error) => {
    return {type : 'ON_ERROR_GET_SKILLS', error}
}