import React, { useState } from 'react'
import './style.css'
const PostForm = () => {
  const [post, setPost] = useState({title: '', content: ''})
  const [error, setError] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = event.target
    setPost({...post, [id]: value})
  }
  const handleSubmit = () => {
    if (post.title && post.content) {
      setError('')
    } else {
      setError('Todos os campos são obrigatórios')
    }
  }
  return (
    <div className="form-container">
        <div>
          <h2>What's on your mind?</h2>
        </div>
        <div className="input-field">
          <label>Title</label>
          <input
            id="title"
            type="text"
            placeholder='Hello World'
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label>Content</label>
          <textarea
            id="content"
            placeholder='Content here'
            rows={6}
            onChange={handleChange}
          /> 
        </div>
        {error && 
          <p>{error}</p>
        }
        <div className='btn-div'>
          <button className={`btn ${(post.title && post.content) ? 'active' : 'disabled' }`} onClick={handleSubmit}>
            CREATE
          </button>
        </div>
    </div>
  )
}

export default PostForm