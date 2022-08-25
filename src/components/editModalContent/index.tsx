import React from 'react'
import { editPost } from '../../redux/posts'
import { useTypedDispatch } from '../../redux/store'
import PostForm from '../postForm'

const EditModalContent = () => {
  const dispatch = useTypedDispatch()

  const handleEditUser = async (post: {title: string, content: string}) => {
    dispatch(editPost(post))
  }
  return (
    <div className='modal-content' style={{width: '90%'}}>
      <PostForm title="Edit Item" buttonText="SAVE" onSubmit={handleEditUser} />
    </div>
  )
}

export default EditModalContent