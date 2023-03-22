import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [err,setErr] = useState(false)
  const handleSubmit = (e) =>{
      e.preventDefault();
      const email = e.target[0].value;
    const password = e.target[1].value;
  }
  return (
    <div className="form-container">
    <div className="form-wrapper">
      <span className="logo">Coder Chat</span>
      <span className="title">Login</span>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
        {err && <span>Something went wrong</span>}
      </form>
      <p>You don't have an account? <Link to="/register">Register</Link></p>
    </div>
  </div>
  )
}

export default Login
