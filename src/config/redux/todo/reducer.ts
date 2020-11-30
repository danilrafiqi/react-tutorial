import { AnyAction } from 'redux'
import * as actionName from './string'

const todoInitialState = {
    todo: ["muhamad danil", "danil rafiqi", "drcreative", "lampungdev"],
}

const initialState = {
    ...todoInitialState,
    action: "",
}

const todoReducer = (state: any = initialState, action: AnyAction): any => {
    const _actions = {
        [actionName.TODO_ADD as string]: () => {
            return {
                ...state,
                action: action.type,
                todo: [...state.todo, action.payload]
            }
        },
        [actionName.TODO_UPDATE as string]: () => {
            return {
                ...state,
                action: action.type,
            }
        },
        [actionName.TODO_DELETE as string]: () => {
            return {
                ...state,
                action: action.type,
                todo: state.todo.filter((_: string, i: number) => i !== action.payload)
            }
        },
        DEFAULT: () => state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default todoReducer