import Axios from 'axios'
import * as actionName from './string'

export const getPost = () => {
    return (dispatch: any) => {
        return Axios.get("http://localhost:4000/posts").then(res => {
            dispatch(updatePost(res.data))
        }).catch(err => {
            console.log("error", err)
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