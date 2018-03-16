const initialState = {
    jobCreated : null,
    jobInfo : null,
    listOfAllJobs : null,
    error:null,
    listOfJobsForCompany : null,
    jobInformation : null,
    jobApplications : null,
    listOfSkills : null,
    applicationsAtAJob : null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CREATE_JOB_SUCCESSFULL':
            return {...state,jobInfo: action.payload};
        case 'ON_CREATE_JOB_ERROR':
            return {...state,error:action.error};
        case 'ON_SUCCESSFULL_GET_JOBS':
            return {...state,listOfAllJobs:action.payload};
        case 'ON_SUCCESSFULL_GET_JOBS_FOR_COMPANY':
            return {...state,listOfJobsForCompany:action.payload}
        case 'ON_ERROR_GET_JOBS':
            return {...state,listOfAllJobs:null,error:action.error};
        case 'ON_DELETE_JOB_SUCCESSFULL':
            return {...state};
        case 'ON_DELETE_JOB_ERROR':
            return {...state, error:action.error};
        case 'ON_UPDATE_JOB_SUCCESSFULL':
            return {...state};
        case 'ON_UPDATE_JOB_ERROR':
            return {...state,error:action.error};
        case 'ON_SUCCESSFULL_GET_INFO_FOR_JOB':
            return {...state,jobInformation: action.payload};
        case 'ON_ERROR_GET_INFO_FOR_JOB':
            return {...state,jobInformation: null,error:action.error};
        case 'ON_APPLY_FOR_JOB_SUCCESSFULL':
            return {...state};
        case 'ON_GET_JOB_APPLICATIONS_SUCCESSFULL':
            return {...state, jobApplications : action.payload};
        case 'ON_GET_JOB_APPLICATIONS_ERROR':
            return {...state,error: action.error};
        case 'ON_APPLY_FOR_JOB_ERROR':
            return {...state};
        case 'ON_DELETE_JOB_BENEFIT_SUCCESSFULL':
            return {...state};
        case 'ON_DELETE_JOB_BENEFIT_ERROR':
            return {...state};
        case 'ON_CREATE_BENEFIT_SUCCESSFULL':
            return {...state};
        case 'ON_CREATE_BENEFIT_ERROR':
            return {...state};
        case 'ON_UPDATE_BENEFIT_SUCCESSFULL':
            return {...state};
        case 'ON_UPDATE_BENEFIT_ERROR':
            return {...state};
        case 'ON_CREATE_REQUIREMENT_SUCCESSFULL':
            return {...state};
        case 'ON_CREATE_REQUIREMENT_ERROR':
            return {...state};
        case 'ON_DELETE_JOB_REQUIREMENT_SUCCESSFULL':
            return {...state};
        case 'ON_DELETE_JOB_REQUIREMENT_ERROR':
            return {...state};
        case 'ON_UPDATE_REQUIREMENT_SUCCESSFULL':
            return {...state};
        case 'ON_UPDATE_REQUIREMENT_ERROR':
            return {...state};
        case 'ON_SUCCESSFULL_GET_SKILLS':
            return {...state,listOfSkills: action.payload};
        case 'ON_GET_JOB_APPLICATIONS_FOR_JOB_SUCCESSFULL':
            return {...state,applicationsAtAJob: action.payload};
        case 'ON_GET_JOB_APPLICATIONS_FOR_JOB_ERROR':
            return {...state,error:action.error};
        default:
            return state;
    }
};

export default reducer;