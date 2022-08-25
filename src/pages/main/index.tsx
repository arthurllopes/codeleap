import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteModalContent from '../../components/deleteModalContent'
import EditModalContent from '../../components/editModalContent'
import Header from '../../components/header'
import ModalContainer from '../../components/modalContainer'
import PostForm from '../../components/postForm'
import PostItem, { PostProps } from '../../components/postItem'
import { createPost, getPosts } from '../../redux/posts'
import { RootState, useTypedDispatch } from '../../redux/store'
import './style.css'

const MainPage = () => {
    const dispatch = useTypedDispatch()
    const {data, modal} = useSelector((state: RootState) => state.posts)
    
    const handleCreatePost = async (post: {title: string, content: string}) => {
        dispatch(createPost(post))
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
            
  return (
    <>
        <Header />
        <main>
            <div className='post-form-container'>
                <PostForm title="What's on your mind?" buttonText="CREATE" onSubmit={handleCreatePost}/>
            </div>
            <div className="posts-list">
                {(data as PostProps[])?.map(item => (
                    <PostItem key={item.id} item={item} />
                ))}
            </div>
        </main>
        {modal && 
            <ModalContainer>
                {(modal as {type: string})?.type === 'delete' ? <DeleteModalContent /> : <EditModalContent />}
            </ModalContainer>
        }
    </>
  )     
}

export default MainPage