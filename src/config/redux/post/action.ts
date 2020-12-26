import Axios from 'axios'
import * as actionName from './string'

export const getPost = () => {
    return (dispatch: any) => {
        dispatch(loadingPost())
        return Axios.get("http://localhost:4000/posts").then(res => {
            dispatch(updatePost(res.data))
            dispatch(successPost({
                message: "Success GET Post",
                type: actionName.GET_POST,
            }))
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
            dispatch(successPost({
                message: "Success Create Post",
                type: actionName.CREATE_POST,
            }))
        }).catch(err => {
            dispatch(errorPost("Error Create Post"))
        })
    }
}

export const deletePost = (id: number) => {
    return (dispatch: any) => {
        dispatch(loadingPost())
        return Axios.delete(`http://localhost:4000/posts/${id}`).then(res => {
            dispatch(successPost({
                message: "Success Delete Post",
                type: actionName.DELETE_POST,
            }))
        }).catch(err => {
            dispatch(errorPost("Error Delete Post"))
        })
    }
}

type PostState = {
    id: string
    title: string
    author: string
}

export const editPost = (id: string, data: PostState) => {
    return (dispatch: any) => {
        dispatch(loadingPost())
        return Axios.put(`http://localhost:4000/posts/${id}`, {
            title: data.title,
            author: data.author,
        }).then(res => {
            dispatch(successPost({
                message: "Success Edit Post",
                type: actionName.EDIT_POST,
            }))
        }).catch(err => {
            dispatch(errorPost("Error Edit Post"))
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

export const successPost = (payload: {
    type: string,
    message: string,
}) => ({
    type: actionName.SUCCESS_POST,
    payload,
})
