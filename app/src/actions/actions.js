import axios from 'axios'

export const TYPE_LOAD_DATA_REQUEST = 'LoadDataRequest';
export const loadDataRequest = () => {
    return {
        type: TYPE_LOAD_DATA_REQUEST
    }
}

export const TYPE_LOAD_DATA_SUCCESS = 'LoadDataSuccess';
export const loadDataSuccess = data => {
    return {
        type: TYPE_LOAD_DATA_SUCCESS,
        data
    }
}

export const TYPE_LOAD_DATA_ERROR = 'LoadDataError';
export const loadDataErro = error => {
    return {
        type: TYPE_LOAD_DATA_ERROR,
        error
    }
}

export const TYPE_LOAD_DATA = 'LoadData';
export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest())
        axios
            .get('https://httpbin.org/ip')
            .then(({ data }) => dispatch(loadDataSuccess(data)))
            .catch(error => dispatch(loadDataErro(error)))
    }
}