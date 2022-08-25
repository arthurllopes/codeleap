import React from 'react'
import Header from '../../components/header'
import PostForm from '../../components/postForm'
import PostItem from '../../components/postItem'
import './style.css'

const MainPage = () => {
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
            <PostForm />
            <div className="posts-list">
                {data.map(item => (
                    <PostItem key={item.id} item={item}/>
                ))}
            </div>
        </main>
    </>
  )     
}

export default MainPage