import { combineReducers } from 'redux'
import counterReducer from './counter/reducer'
import todoReducer from './todo/reducer'
import postReducer from './post/reducer'

const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    post: postReducer,
})

export default reducer