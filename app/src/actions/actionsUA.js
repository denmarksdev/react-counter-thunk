import axios from 'axios'

export const TYPE_LOAD_UA_REQUEST = 'LoadUARequest';
export const loadUARequest = () => {
    return {
        type: TYPE_LOAD_UA_REQUEST
    }
}

export const TYPE_LOAD_UA_SUCCESS = 'LoadUASuccess';
export const loadUASuccess = data => {
    return {
        type: TYPE_LOAD_UA_SUCCESS,
        data 
    }
}

export const TYPE_LOAD_UA_ERROR = 'LoadUAError';
export const loadUAErro = error => {
    return {
        type: TYPE_LOAD_UA_ERROR,
        error
    }
}

export const TYPE_LOAD_UA = 'LoadUA';
export const loadUA = () => {
    return dispatch => {
        dispatch(loadUARequest())
        axios
            .get('https://httpbin.org/user-agent')
            .then(({ data }) => dispatch(loadUASuccess(data)))
            .catch(error => dispatch(loadUAErro(error)))
    }
}