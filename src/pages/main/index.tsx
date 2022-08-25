import React, { useState } from 'react'
import DeleteModalContent from '../../components/deleteModalContent'
import EditModalContent from '../../components/editModalContent'
import Header from '../../components/header'
import ModalContainer from '../../components/modalContainer'
import PostForm from '../../components/postForm'
import PostItem from '../../components/postItem'
import './style.css'

const MainPage = () => {
    const [modal, setModal] = useState('')

    const data = [{id: 3, 
        username: "arthur",
        created_datetime: 'Date',
        title: "string",
        content: "string"}, {id: 2, 
            username: "arthur",
            created_datetime: 'Date',
            title: "string",
            content: "string"}]
  return (
    <>
        <Header />
        <main>
            <div className='post-form-container'>
                <PostForm title="What's on your mind?" buttonText="CREATE" />
            </div>
            <div className="posts-list">
                {data.map(item => (
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