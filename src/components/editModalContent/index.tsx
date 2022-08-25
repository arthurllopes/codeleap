import React from 'react'
import PostForm from '../postForm'

const EditModalContent = () => {
  return (
    <div className='modal-content' style={{width: '90%'}}>
      <PostForm title="Edit Item" buttonText="SAVE" />
    </div>
  )
}

export default EditModalContent