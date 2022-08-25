import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
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
}
const PostItem = ({item}: Props) => {
    const {username} = useSelector((state: RootState) => state.posts)
  return (
    <div className="post-item">
        <div className="post-header">
            <h2>{item.title}</h2>
            {username === item.username &&
                <MyPostOptions post={item} />
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