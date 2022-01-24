import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Delete = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/posts/${id}`)
    .then(res => setTitle(res.data.title))

  }, [id])

  const handleDelete = () => {
    axios.delete(`https://blog-app2356.herokuapp.com/blog/posts/${id}`)
    navigate('/')
  }

  return (
    <div className='mt-48 xs:mt-64 xs:ml-16'>
      <p className='text-red-600 text-xl ml-4 xs:text-3xl'>Delete {title}?</p>
      <button className='bg-red-400 mt-4 text-center text-2xl rounded-xl ml-8 h-16 w-32' 
      onClick={handleDelete}>
        Delete
      </button>       
    </div>
  )
}

export default Delete
