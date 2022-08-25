import React from 'react'
import { deletePost, setModal } from '../../redux/posts'
import { useTypedDispatch } from '../../redux/store'
import './style.css'

const DeleteModalContent = () => {
  const dispatch = useTypedDispatch()
  
  const handleCloseModal = () => dispatch(setModal(null))
  const handleDeletePost = () => dispatch(deletePost())
  return (
    <div className='modal-content'>
      <div>
        <h3>Are you sure you want to delete this item?</h3>
      </div>
      <div className='options'>
        <button className='btn active' onClick={handleCloseModal}>Cancel</button>
        <button className='btn active' onClick={handleDeletePost}>OK</button>
      </div>
    </div>
  )
}

export default DeleteModalContent