import * as actionName from './string'

export const todoAdd = (payload: string) => ({
    type: actionName.TODO_ADD,
    payload: payload,
})
export const todoDelete = (payload: number) => ({
    type: actionName.TODO_DELETE,
    payload: payload,
})
export const todoUpdate = (payload: {
    idx: number,
    todo: string,
}) => ({
    type: actionName.TODO_UPDATE,
    payload: payload,
})