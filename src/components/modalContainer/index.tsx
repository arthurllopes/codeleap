import React, { ReactNode } from 'react'
import './style.css'
const ModalContainer = ({ children, setModal }: { children: ReactNode, setModal: any}) => {
  function handleOutsideClick (event: React.MouseEvent){
    if (event.target === event.currentTarget) {
      setModal('')
      //FECHAR MODAL
    }
  }
  return (
    <div className='container' onClick={handleOutsideClick}>
      {children}
    </div>
  )
}

export default ModalContainer