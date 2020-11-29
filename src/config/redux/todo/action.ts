import * as actionName from './string'

export const todoAdd = ()=>({
    type: actionName.TODO_ADD,
})
export const todoDelete = ()=>({
    type: actionName.TODO_DELETE
})
export const todoUpdate = ()=>({
    type: actionName.TODO_UPDATE
})