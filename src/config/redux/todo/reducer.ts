import * as actionName from './string'

const todoInitialState = {
    todo: ["muhamad danil", "danil rafiqi", "drcreative", "lampungdev"],
}

const initialState = {
    ...todoInitialState,
    action: "",
}

const todoReducer = (state: any = initialState, action: { type: string | number }): any => {
    const _actions = {
        [actionName.TODO_ADD as string]: () => {
            return {
                ...state,
                action: action.type,
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
            }
        },
        DEFAULT: () => state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default todoReducer