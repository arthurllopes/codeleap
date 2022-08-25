import React, { ReactNode } from 'react'
import { setModal } from '../../redux/posts'
import { useTypedDispatch } from '../../redux/store'
import './style.css'
const ModalContainer = ({ children }: { children: ReactNode}) => {
  const dispatch = useTypedDispatch()
  function handleOutsideClick (event: React.MouseEvent){
    if (event.target === event.currentTarget) {
      //FECHAR MODAL
      dispatch(setModal(null))
    }
  }
  return (
    <div className='container' onClick={handleOutsideClick}>
      {children}
    </div>
  )
}

export default ModalContainer