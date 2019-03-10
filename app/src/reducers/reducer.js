import { combineReducers } from 'redux'
import ip from './reducerIP'
import ua from './reducerUA'

const reducer = combineReducers({
     ip,ua
})

export default reducer
