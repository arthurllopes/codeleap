import React from 'react'
import MyPostOptions from '../myPostOptions'
import './style.css'

export type PostProps = {
    id: number, 
    username: string,
    created_datetime: any,
    title: string,
    content: string 
}
type Props = {
    item: PostProps,
    setModal: any
}
const user = 'arthur'
const PostItem = ({item, setModal}: Props) => {
  return (
    <div className="post-item">
        <div className="post-header">
            <h2>{item.title}</h2>
            {user === item.username &&
                <MyPostOptions setModal={setModal} />
            }
        </div>
        <div className="post-content">
            <div className="post-info">
                <p>@{item.username}</p>
                <div>25 minutes ago</div>   
            </div>
            <div>
                <p>{item.content}</p>
            </div>
        </div>
    </div>
  )
}

export default PostItem