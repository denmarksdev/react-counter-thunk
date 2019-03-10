import {
    TYPE_LOAD_DATA_REQUEST,
    TYPE_LOAD_DATA_SUCCESS,
    TYPE_LOAD_DATA_ERROR
} from '../actions/actionsIP'


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPE_LOAD_DATA_REQUEST:
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case TYPE_LOAD_DATA_SUCCESS: {
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        }
        case TYPE_LOAD_DATA_ERROR: {
            return {
                isFetching: false,
                data: [],
                error: true
            }
        }
        default: {
            return state
        }
    }
}

export default ip