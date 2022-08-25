import React, { useEffect, useState } from 'react'
import DeleteModalContent from '../../components/deleteModalContent'
import EditModalContent from '../../components/editModalContent'
import Header from '../../components/header'
import ModalContainer from '../../components/modalContainer'
import PostForm from '../../components/postForm'
import PostItem, { PostProps } from '../../components/postItem'
import api from '../../services/api'
import './style.css'

const MainPage = () => {
    const [modal, setModal] = useState('')
    const [postList, setPostList] = useState<PostProps[]>([])
    const handleCreatePost = async (post: {title: string, content: string}) => {
        const response = await api.post('', {
            username: 'jonas',
            ...post
        })
        const {data, status} = response
        setPostList([data, ...postList])
    }

    useEffect(() => {
        const getData = async () => {
            const response = await api.get('')
            const {data, status} = response
            setPostList(data.results)
        }
        getData()
    }, [])
            
  return (
    <>
        <Header />
        <main>
            <div className='post-form-container'>
                <PostForm title="What's on your mind?" buttonText="CREATE" onSubmit={handleCreatePost}/>
            </div>
            <div className="posts-list">
                {postList?.map(item => (
                    <PostItem key={item.id} item={item} setModal={setModal}/>
                ))}
            </div>
        </main>
        {modal && 
            <ModalContainer setModal={setModal}>
                {modal === 'delete' ? <DeleteModalContent /> : <EditModalContent />}
            </ModalContainer>
        }
    </>
  )     
}

export default MainPage