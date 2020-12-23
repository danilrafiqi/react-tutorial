import { AnyAction } from 'redux'
import * as actionName from './string'

const postInitialState = {
    loading: false,
    error: undefined,
    posts: [],
}

const initialState = {
    ...postInitialState,
    action: "",
}

const postReducer = (state: any = initialState, action: AnyAction): any => {
    const _actions = {
        [actionName.LOADING_POST as string]: () => {
            return {
                ...state,
                action: action.type,
                loading: true,
            }
        },
        [actionName.UPDATE_POST as string]: () => {
            return {
                ...state,
                action: action.type,
                posts: action.payload,
                loading: false,
            }
        },
        [actionName.ERROR_POST as string]: () => {
            return {
                ...state,
                action: action.type,
                error: action.payload,
                loading: false,
            }
        },
        [actionName.RESET_POST as string]: () => {
            return {
                ...state,
                action: '',
                error: undefined,
                loading: false,
            }
        },
        DEFAULT: () => state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default postReducer