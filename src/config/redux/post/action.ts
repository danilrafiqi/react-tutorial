import * as actionName from './string'

export const getPost = () => {
    return (dispatch: any) => {
        setTimeout(() => {
            return dispatch({
                type: actionName.GET_POST,
                payload: {
                    "id": 1,
                    "title": "json-server",
                    "author": "typicode"
                },
            })
        }, 5000);
    }
}
