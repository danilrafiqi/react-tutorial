import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../../config/redux/post/action'
import * as actionName from '../../../config/redux/post/string'
import { postActionSelector, postRootSelector } from '../../../config/redux/post/selector'
import { useLocation, useRouteMatch } from 'react-router-dom'

type PostState = {
    id: string
    title: string
    author: string
}

const PostForm = () => {
    const location = useLocation<{ post: PostState }>()
    const [title, setTitle] = useState<string>(location.state.post.title)
    const [author, setAuthor] = useState<string>(location.state.post.author)
    const dispatch = useDispatch()
    const actionState = useSelector(postActionSelector)
    const postState = useSelector(postRootSelector)
    const isEdit = useRouteMatch("/post/:id")

    useEffect(() => {
        if (postState.success.type === actionName.CREATE_POST) {
            setAuthor("")
            setTitle("")
        }
        if (postState.success.type === actionName.EDIT_POST) {
            alert("Success edit post")
        }
    }, [actionState])


    return <div>
        {
            isEdit && <input type="text" name="id" id="" placeholder="masukkan id" value={location.state.post.id} readOnly />
        }

        <input type="text" name="title" id="" placeholder="masukkan title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" id="" placeholder="masukkan nama" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button onClick={() => {
            isEdit ?
                dispatch(action.editPost(location.state.post.id, {
                    author: author,
                    title: title,
                    id: location.state.post.id,
                })) :
                dispatch(action.createPost({
                    author: author,
                    title: title,
                    id: new Date().getTime(),
                }))
        }}>
            kirim
        </button>
    </div>
}

export default PostForm