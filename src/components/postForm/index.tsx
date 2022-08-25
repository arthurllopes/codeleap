import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import './style.css'
const PostForm = ({title, buttonText, onSubmit}: {title: string, buttonText: string, onSubmit: ({title, content}: {title: string, content: string}) => void}) => {
  const {modal} = useSelector((state: RootState) => state.posts)
  const [post, setPost] = useState({title: (modal as any)?.post.title || '', content: (modal as any)?.post.content || ''})
  const [error, setError] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = event.target
    setPost({...post, [id]: value})
  }
  const handleSubmit = () => {
    if (post.title && post.content) {
      onSubmit(post)
      setPost({title: '', content: ''})
      setError('')
    } else {
      setError('Todos os campos são obrigatórios')
    }
  }
  return (
    <div className="form-container">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="input-field">
          <label>Title</label>
          <input
            id="title"
            type="text"
            placeholder='Hello World'
            onChange={handleChange}
            value={post.title}
          />
        </div>
        <div className="input-field">
          <label>Content</label>
          <textarea
            id="content"
            placeholder='Content here'
            rows={6}
            onChange={handleChange}
            //defaultValue={(modal as any)?.post.content || ''}
            value={post.content}
          /> 
        </div>
        {error && 
          <p>{error}</p>
        }
        <div className='btn-div'>
          <button className={`btn ${(post.title && post.content) ? 'active' : 'disabled' }`} onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
    </div>
  )
}

export default PostForm