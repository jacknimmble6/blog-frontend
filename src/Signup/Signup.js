import React, { useState, useContext } from 'react'
import axios from 'axios' 
import { MyContext } from '../useContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [heading, setHeading] = useState('Sign Up')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const { setLoggedIn } = useContext(MyContext)

  const changeHeading = () => {
    if (heading === 'Sign Up') {
      setHeading('Log In')
    } else {
      setHeading('Sign Up')
    }
  }

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
    if (heading === 'Sign Up') {
        axios.post('https://blog-app2356.herokuapp.com/blog/user/register', data)
        .then(res => {
          localStorage.setItem('firstname', res.data.result.firstName)
          localStorage.setItem('lastname', res.data.result.lastName)
          localStorage.setItem('username', res.data.result.username)
          localStorage.setItem('password', res.data.result.password)
          localStorage.setItem('email', res.data.result.email)
          localStorage.setItem('id', res.data.result._id)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('loggedIn', true)
          setLoggedIn(localStorage.getItem('loggedIn'))
        })
        clean()
        navigate('/')
      } else {
        axios.post('https://blog-app2356.herokuapp.com/blog/user/login', data)
        .then(res => {
          localStorage.setItem('firstname', res.data.result.firstName)
          localStorage.setItem('lastname', res.data.result.lastName)
          localStorage.setItem('username', res.data.result.username)
          localStorage.setItem('password', res.data.result.password)
          localStorage.setItem('email', res.data.result.email)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('loggedIn', true)
          localStorage.setItem('id', res.data.result._id)
          setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
        })
        clean()
        navigate('/')
      }
      
  }

  return (
    <>
      <p className='ml-[560px] text-3xl xs:ml-[140px] xs:text-3xl md:ml-[300px] sm:ml-[300px]
        '>{heading}</p>
      <form className='ml-[330px] bg-blue-300 w-[600px] h-96 xs:ml-0 xs:w-full sm:ml-0 sm:w-full
       md:ml-16 md:w-[80%]'> 
        
        {heading === 'Sign Up' ?
        <div className='mt-8 xs:ml-0 md:ml-8'>
          <div className='mb-4 ml-[135px] mt-4 border-b pt-4 border-black w-80 xs:ml-8'>
            <label className='block'>First Name</label>
            <input placeholder='First Name' className='w-[300px] border-none bg-transparent focus:outline-none'  
            onChange={handleFirstName} value={firstName}/>
          </div>

          <div className='ml-[135px] mb-4 border-b border-black w-80 xs:ml-8'>
            <label className='block'>Last Name</label>
            <input placeholder='Last Name' value={lastName}
              className='w-[300px] border-none bg-transparent focus:outline-none' onChange={handleLastName}/>
          </div>

          <div className='ml-[135px] mb-4 border-b border-black w-80 xs:ml-8'>
            <label className='block'>Username</label>
            <input placeholder='Username' required value={username}
              className='w-[300px] border-none bg-transparent focus:outline-none' onChange={handleUsername}/>
          </div>

          <div className='ml-[135px] mb-4 border-b border-black w-80 xs:ml-8'>
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
          
          <button className='absolute ml-[210px] mt-[12px] text-xl border-black 
          hover:bg-indigo-300 w-40 bg-indigo-200 xs:ml-[90px]'
          onClick={handleSubmit}>
            {heading}
          </button>

          <button className='absolute ml-[540px] mt-[15px] text-xl xs:ml-[320px]' onClick={changeHeading}>
            {heading === 'Sign Up' ? 'Log In' : "Sign Up"}
          </button>
        </div>
        : 
        <div className='mt-8'>
          <div className='absolute ml-[135px] mb-4 border-b mt-[35px] xs:ml-8 border-black w-80'>
            <label className='block'>Username</label>
            <input placeholder='Username' required value={username}
            className='w-[300px] border-none bg-transparent focus:outline-none xs:w-full' onChange={handleUsername}/>
          </div>

          <div className='absolute ml-[135px] mb-4 border-b mt-[150px] xs:ml-8 border-black w-80'>
            <label className='block'>Password</label>
            <input placeholder='Password' required value={password}
            className='w-[300px] border-none bg-transparent focus:outline-none xs:w-full' onChange={handlePassword}/>
          </div>

          <div className='absolute ml-[135px] mb-4 border-b mt-[250px] xs:ml-8 border-black w-80'>
            <label className='block'>Email</label>
            <input placeholder='Email' value={email}
            className='w-[300px] border-none bg-transparent focus:outline-none xs:w-full' type='text'  
            onChange={handleEmail} />
          </div>
          
          <button className='absolute ml-[200px] mt-[342px] text-xl border-black 
          hover:bg-indigo-300 w-40 bg-indigo-200 xs:ml-2'
          onClick={handleSubmit}>
            {heading}
          </button>

          <button className='absolute ml-[520px] mt-[342px] text-xl xs:ml-[320px]' onClick={changeHeading}>
            {heading === 'Sign Up' ? 'Log In' : "Sign Up"}
          </button>
        </div>
        }
      </form>
    </>
  )
}

export default Signup
