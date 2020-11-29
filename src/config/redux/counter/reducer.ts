import * as actionName from './string'

const counterInitialState = {
    counter:0
}

const initialState = {
    ...counterInitialState,
    action:"",
}

const counterReducer = (state:any = initialState, action: { type: string | number }):any=>{
    const _actions = {
        [actionName.COUNTER_INCREMENT as string]: ()=>{
            return {
                ...state,
                action: action.type,
                counter: state.counter + 1
            }
        },
        [actionName.COUNTER_DECREMENT as string]: ()=>{
            return {
                ...state,
                action: action.type,
                counter: state.counter - 1
            }
        },
        DEFAULT:()=> state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default counterReducer