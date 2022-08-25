import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../redux/posts'
import { useTypedDispatch } from '../../redux/store'
import './style.css'
const SignUpPage = () => {
  const navigate = useNavigate(),
  [username, setUsername] = useState(''),
  dispatch = useTypedDispatch()

  const handleSubmit = () => {
    if (username) {
      dispatch(userLogin(username))
      navigate('/main')
    }
  }
  return (
    <main className='wrapper'>
        <div className="signup-container">
          <div>
            <h2>Welcome to CodeLeap network!</h2>
          </div>
          <div className="signup-container">
            <label>Please enter your username</label>
            <input
              id="username"
              type="text"
              placeholder='John Doe'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='btn-div'>
            <button className={`btn ${username ? 'active' : 'disabled' }`} onClick={handleSubmit}>
              ENTER
            </button>
        </div>
        </div>
    </main>
  )
}

export default SignUpPage