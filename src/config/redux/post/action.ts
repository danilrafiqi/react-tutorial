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

export const createPost = (payload: { id: number, title: string, author: string }) => {
    return (dispatch: any) => {
        dispatch(loadingPost())
        return Axios.post("http://localhost:4000/posts", {
            id: payload.id,
            title: payload.title,
            author: payload.author,
        }).then(res => {
            dispatch(successCreatePost("Success Create Post"))
        }).catch(err => {
            dispatch(errorPost("Error Create Post"))
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

export const successCreatePost = (payload: string) => ({
    type: actionName.RESET_POST,
    payload,
})
