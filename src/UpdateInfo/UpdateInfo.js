import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateInfo = () => {
  const [userInfo, setUserInfo] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/user/fetch/${id}`)
    .then(res => setUserInfo(res.data))
    setFirstName(userInfo.firstName)
    setLastName(userInfo.lastName)
    setUsername(userInfo.username)
    setEmail(userInfo.email)

    return () => {
      setUserInfo({})
      setFirstName('')
      setLastName('')
      setUsername('')
      setEmail('')
    }
  }, [id, userInfo])

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  
  const clean = () => {
    setFirstName('')
    setLastName('')
    setUsername('')
    setPassword('')
    setEmail('')
  }
    
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { firstName, lastName, username, password, email }
    axios.patch(`http://localhost:4001/blog/user/update/${id}`, data)
    clean()
    navigate('/')
  }

  return (
    <>
      <p className='ml-[560px] text-3xl xs:ml-36 md:ml-72'>Update Info</p>
      <form className='ml-[330px] bg-blue-300 w-[600px] h-96 xs:ml-0 xs:w-full md:w-full md:ml-0'> 

      <div className='mt-8'>
        <div className='mb-4 ml-[135px] xs:ml-8 mt-4 border-b pt-4 border-black w-80'>
          <label className='block'>First Name</label>
          <input placeholder='First Name' className='w-[300px] border-none bg-transparent focus:outline-none'  
            onChange={handleFirstName} value={firstName}/>
        </div>

        <div className='ml-[135px] mb-4 xs:ml-8 border-b border-black w-80'>
          <label className='block'>Last Name</label>
          <input placeholder='Last Name' value={lastName}
            className='w-[300px] border-none bg-transparent focus:outline-none' onChange={handleLastName}/>
        </div>

        <div className='ml-[135px] mb-4 border-b xs:ml-8 border-black w-80'>
          <label className='block'>Username</label>
          <input placeholder='Username' required value={username}
            className='w-[300px] border-none bg-transparent focus:outline-none' onChange={handleUsername}/>
        </div>

        <div className='ml-[135px] mb-4 border-b border-black xs:ml-8 w-80'>
          <label className='block'>Password</label>
          <input placeholder='Password' required value={password}
            className='w-[300px] border-none bg-transparent focus:outline-none' onChange={handlePassword}/>
        </div>

        <div className='ml-[135px] mb-4 border-b border-black w-80 xs:ml-8'>
          <label className='block'>Email</label>
          <input placeholder='Email' value={email}
            className='w-[300px] border-none bg-transparent focus:outline-none' type='text' 
            onChange={handleEmail} />
        </div>
          
        <button className='absolute ml-[210px] mt-[12px] text-xl border-black xs:ml-[140px]
        hover:bg-indigo-300 w-40 bg-indigo-200' onClick={handleSubmit}>
          Update Info
        </button>

        </div>
      </form>
    </>
  )
}

export default UpdateInfo
