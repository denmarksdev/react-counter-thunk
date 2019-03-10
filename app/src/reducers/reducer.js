import { TYPE_LOAD_DATA  } from '../actions/actions'

const INITIAL_STATE  = {
    data:[],
    isFetching:false
}

const reducer = (state = INITIAL_STATE, action )  => {
    if (action.type === TYPE_LOAD_DATA ){
    }
    return state
}

export default reducer