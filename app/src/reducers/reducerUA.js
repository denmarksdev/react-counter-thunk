import {
    TYPE_LOAD_UA_REQUEST,
    TYPE_LOAD_UA_SUCCESS,
    TYPE_LOAD_UA_ERROR
} from '../actions/actionsUA'


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPE_LOAD_UA_REQUEST:
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case TYPE_LOAD_UA_SUCCESS: {
            return {
                isFetching: false,
                data: action.data['user-agent'],
                error: false
            }
        }
        case TYPE_LOAD_UA_ERROR: {
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

export default ua