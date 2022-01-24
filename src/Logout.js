import React from 'react'

const Logout = () => {
  const remove = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('email')
    localStorage.removeItem('loggedIn')
  }

  return (
    <div>
      <button onClick={remove}>
        Log Out
      </button>   
    </div>
  )
}

export default Logout
