import React from 'react'
import api from '../../services/api'
import PostForm from '../postForm'

const EditModalContent = () => {
  const handleEditUser = async (post: {title: string, content: string}) => {
    const response = await api.put('', {
      username: 'jonas',
      ...post
    })
    const {data, status} = response
  }
  return (
    <div className='modal-content' style={{width: '90%'}}>
      <PostForm title="Edit Item" buttonText="SAVE" onSubmit={handleEditUser} />
    </div>
  )
}

export default EditModalContent