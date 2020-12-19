import { AnyAction } from 'redux'
import * as actionName from './string'

const postInitialState = {
    posts: [],
}

const initialState = {
    ...postInitialState,
    action: "",
}

const postReducer = (state: any = initialState, action: AnyAction): any => {
    const _actions = {
        [actionName.GET_POST as string]: () => {
            return {
                ...state,
                action: action.type,
                posts: [...state.posts, action.payload]
            }
        },
        [actionName.UPDATE_POST as string]: () => {
            return {
                ...state,
                action: action.type,
                posts: action.payload,
            }
        },
        DEFAULT: () => state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default postReducer