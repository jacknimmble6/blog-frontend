import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MobileNavDropdown = () => {
  const [userInfo, setUserInfo] = useState({})
  const user = localStorage.getItem('id')
      
  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/user/fetch/${user}`)
    .then(res => setUserInfo(res.data))
  }, [user])
  
  const handleDelete = () => {
    axios.delete(`https://blog-app2356.herokuapp.com/blog/user/${user}`)
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
  }
  
  const handleLogout = () => {
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
  }

  return (
    <div className='ml-[100px] -mt-48 h-[390px] bg-indigo-100 border md:h-[300px] md:w-[300px]
    mb-16 border-black z-10 w-[200px]'>
      <p className='mb-2 text-md text-center'>User Info</p>

      <div className='mb-3'>
        <div className='text-center text-sm'>
          <p className='text-sm'>Full Name:</p>
          {`${userInfo.firstName} ${userInfo.lastName}`}
        </div>
      </div>

      <div className='mb-3'>
        <p className='text-center text-sm'>
          <p className='text-sm'>Username:</p>
          {`${userInfo.username}`}
        </p>
      </div>

      <div className='mb-3'>
        <p className='text-center text-sm'>
          <p className='text-sm'>Email:</p> 
          {`${userInfo.email}`}
        </p>
      </div>

      <button className='mt-4 text-md ml-[10px]'>
        <Link to={`user/${user}`}>
          Update Info
        </Link>
      </button>
      <button className='absolute mt-[110px] text-md -ml-[85px] md:ml-8 md:mt-[15px]'>
        <Link to={`user/${user}/posts`}>
          Update Posts
        </Link>
      </button>
      <button className='absolute text-md text-red-500 mt-[160px] -ml-[85px] md:ml-8 md:mt-[60px]' 
      onClick={handleDelete}>
        Delete User
      </button>
      <button className='absolute text-md text-red-500 mt-16 -ml-[85px]' onClick={handleLogout}>
        Log Out
      </button>
    </div>
  )
}

export default MobileNavDropdown
