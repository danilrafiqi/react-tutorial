import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../../config/redux/post/action'
import * as actionName from '../../../config/redux/post/string'
import { postActionSelector, postRootSelector } from '../../../config/redux/post/selector'

const PostForm = () => {
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const dispatch = useDispatch()
    const actionState = useSelector(postActionSelector)
    const postState = useSelector(postRootSelector)

    useEffect(() => {
        if (postState.success.type === actionName.CREATE_POST) {
            setAuthor("")
            setTitle("")
        }
    }, [actionState])


    return <div>
        <input type="text" name="title" id="" placeholder="masukkan title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" id="" placeholder="masukkan nama" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button onClick={() => dispatch(action.createPost({
            author: author,
            title: title,
            id: new Date().getTime(),
        }))}>
            kirim
        </button>
    </div>
}

export default PostForm