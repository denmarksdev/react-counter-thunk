import {
     TYPE_LOAD_DATA_REQUEST,
     TYPE_LOAD_DATA_SUCCESS,
     TYPE_LOAD_DATA_ERROR
} from '../actions/actions'


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error:false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPE_LOAD_DATA_REQUEST:
            return {
                isFetching: true,
                data: [],
                error:false
            }
        case TYPE_LOAD_DATA_SUCCESS: {
            return {
                isFetching:false,
                data: action.data,
                error:false
            }
        }
        case TYPE_LOAD_DATA_ERROR : {
            return {
                isFetching:false,
                data: [],
                error:true
            }
        }
    }
    return state
}

export default reducer