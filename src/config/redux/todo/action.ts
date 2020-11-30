import * as actionName from './string'

export const todoAdd = (payload: string) => ({
    type: actionName.TODO_ADD,
    payload: payload,
})
export const todoDelete = () => ({
    type: actionName.TODO_DELETE
})
export const todoUpdate = () => ({
    type: actionName.TODO_UPDATE
})