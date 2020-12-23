import Axios from 'axios'
import * as actionName from './string'

export const getPost = () => {
    return (dispatch: any) => {
        dispatch(loadingPost())
        return Axios.get("http://localhost:4000/posts").then(res => {
            dispatch(updatePost(res.data))
        }).catch(err => {
            dispatch(errorPost("Error Fetch data"))
        })
    }
}

export const updatePost = (payload: {
    "id": number,
    "title": number,
    "author": number
}[]) => ({
    type: actionName.UPDATE_POST,
    payload: payload,
})

export const errorPost = (payload: string) => ({
    type: actionName.ERROR_POST,
    payload: payload,
})

export const loadingPost = () => ({
    type: actionName.LOADING_POST,
})

export const resetPost = () => ({
    type: actionName.RESET_POST,
})
