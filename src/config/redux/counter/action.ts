import * as actionName from './string'

export const increment = ()=>({
    type: actionName.COUNTER_INCREMENT,
})
export const decrement = ()=>({
    type: actionName.COUNTER_DECREMENT
})