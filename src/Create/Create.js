import React, { useState } from 'react'
import axios from 'axios'
import FileBase64 from 'react-file-base64';
import photo from './depositphotos.jpg'

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState('')
  const [noData, setNoData] = useState('')

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
    const username = localStorage.getItem('token')
    const data = { 
      username: `${localStorage.getItem('id')}`, 
      title, 
      image: file === '' ? photo : file, 
      content, 
      category,
      fullName: `${localStorage.getItem('firstname')} ${localStorage.getItem('lastname')}`
    }
    if (username === null) {
      setNoData('You need to register.')
    } else {
      axios.post('https://blog-app2356.herokuapp.com/blog/post/add', data)
      setContent('')
      setTitle('')
      setCategory('')
    }
  }

  return (
    <>
      <form className='bg-blue-200 mt-16 ml-80 w-[600px] xs:w-full pr-16 rounded-lg xs:ml-0 sm:w-full 
        md:w-full sm:ml-0 md:ml-0 z-0'>
        <p className='text-2xl ml-16 text-center mb-4'>Create Post</p>
        <p className='text-red-400 ml-56 text-lg'>{noData}</p>
        <div className='ml-16 xs:ml-8 sm:w-full sm:ml-16 md:w-full md:ml-32 '>
          <label className='block'>Title</label>
          <input type='text' placeholder='Title' value={title} className='w-[470px] xs:w-full 
          rounded-md' 
          onChange={handleTitle} />
        </div>

        <div className='ml-16 mt-4 xs:ml-8 md:ml-32'>
          <label className='block'>Category</label>
          <select className='w-[470px] rounded-md xs:w-full ' value={category} onChange={handleCategory}>
            <option value="" disabled selected>Select your option</option>
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

        <div className='ml-16 mt-4 xs:ml-8 md:ml-32'>
          <label className='block'>Content</label>
          <textarea className='w-[470px] xs:w-full rounded-md' value={content} rows='6' 
          onChange={handleContent}>
          </textarea>
        </div>

        <div className='ml-48 mt-4 xs:ml-24 md:ml-64'>
          <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setFile(base64)}/>
        </div>
        <button className='ml-56 mt-4 border w-32 bg-indigo-300 hover:bg-indigo-500 
        border-indigo-500 bg-blue rounded-md xs:ml-32 md:ml-64' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}

export default Create