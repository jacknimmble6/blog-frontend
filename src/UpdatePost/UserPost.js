import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FileBase64 from 'react-file-base64';
import photo from './depositphotos.jpg'
import { useParams, useNavigate } from 'react-router-dom'

const UserPost = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState('')
  const [show, setShow] = useState(true)
  const { id } = useParams()
  const [userInfo, setUserInfo] = useState({})
  const user = localStorage.getItem('id')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/posts/${id}`)
    .then(res => {
      setContent(res.data.content)
      setTitle(res.data.title)
      setCategory(res.data.category)
      setFile(res.data.image)
    })
    setContent()

    axios.get(`https://blog-app2356.herokuapp.com/blog/user/fetch/${user}`)
    .then(res => setUserInfo(res.data))

    return () => {
 
    }
  }, [props.id])

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const handleContent = (e) => {
    setContent(e.target.value)
  }
  
  const handleCategory = (e) => {
    setCategory(e.target.value)
  } 
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { 
      username: `${localStorage.getItem('id')}`, 
      title, 
      image: file === '' ? photo : file, 
      content, 
      category,
      fullName: `${localStorage.getItem('firstname')} ${localStorage.getItem('lastname')}`
    }
    axios.patch(`https://blog-app2356.herokuapp.com/blog/posts/update/${id}`, data)
    .then(res => console.log(res.data))
    setContent('')
    setTitle('')
    setCategory('')  
    navigate('/')
  }

  return (
    <>
      {show === false ? '' :
      <form className='bg-blue-200 mt-16 ml-96 md:ml-24 w-[600px] xs:w-full pr-16 rounded-lg xs:ml-0'>
        <p className='text-2xl ml-16 text-center mb-4'>Update Post</p>
        <div className='ml-16'>
          <label className='block'>Title</label>
          <input type='text' placeholder='Title' value={title} className='w-[470px] xs:w-full rounded-md' 
          onChange={handleTitle} />
        </div>

        <div className='ml-16 mt-4'>
          <label className='block'>Category</label>
          <select className='w-[470px] rounded-md xs:w-full' value={category} onChange={handleCategory}>
            <option>Sports</option>
            <option>Tech</option>
            <option>Entertainment</option>
            <option>Education</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Music</option>
            <option>Fitness</option>
            <option>Fashion</option>
            <option>Other</option>
          </select>
        </div>

        <div className='ml-16 mt-4'>
          <label className='block'>Content</label>
          <textarea className='w-[470px] rounded-md xs:w-full' value={content} rows='6' onChange={handleContent}>
          </textarea>
        </div>

        <div className='ml-48 mt-4 xs:ml-24'>
          <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setFile(base64)}/>
        </div>
        <button className='ml-56 mt-4 border xs:ml-32 w-32 bg-indigo-300 hover:bg-indigo-500 
        border-indigo-500 bg-blue rounded-md' onClick={handleSubmit}>
          Submit
        </button>
      </form>     
      }   
    </>
  )
}

export default UserPost
