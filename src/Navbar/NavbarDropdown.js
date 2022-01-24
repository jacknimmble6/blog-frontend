import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavbarDropdown = () => {
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
    <div className='absolute ml-[930px] mt-16 bg-indigo-200 border border-black z-10 2xl:ml-[300px] 
    2xl:bg-indigo-400 w-80'>
      <p className='mb-2 text-xl text-center'>User Info</p>

      <div className='mb-3'>
        <div className='text-center'>
          <p className='text-md'>Full Name:</p>
          {`${userInfo.firstName} ${userInfo.lastName}`}
        </div>
      </div>

      <div className='mb-3'>
        <p className='text-center'>
          <p className='text-md'>Username:</p>
          {`${userInfo.username}`}
        </p>
      </div>

      <div className='mb-3'>
        <p className='text-center'>
          <p className='text-md'>Email:</p> 
          {`${userInfo.email}`}
        </p>
      </div>

      <button className='mt-4 text-lg ml-[10px]'>
        <Link to={`user/${user}`}>
          Update Info
        </Link>
      </button>
      <button className='mt-4 text-lg ml-[100px]'>
        <Link to={`user/${user}/posts`}>
          Update Posts
        </Link>
      </button>
      <button className='text-lg text-red-500 ml-[110px]' onClick={handleDelete}>
        Delete User
      </button>
      <button className='text-lg text-red-500 ml-[110px]' onClick={handleLogout}>
        Log Out
      </button>
    </div>
  )
}

export default NavbarDropdown
