import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const Post = () => {
  const [post, setPost] = useState([])
  const { id } = useParams()
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/posts/${id}`)   
    .then(res => setPost(res.data))

    axios.get(`https://blog-app2356.herokuapp.com/blog/posts/${id}`)   
    .then(res => setCommentList(res.data.comments))

  }, [id])

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    axios.post(`https://blog-app2356.herokuapp.com/blog/posts/${id}/commentPost`, { comment })   
    .then(res => setCommentList(res.data.comments))
    setComment('')
  }

  return (
    <div className='grid grid-rows-3'>
      <div className='row-span-2'>
        <img src={post.image} className='h-96 mt-8 w-full object-cover' alt=''/>
        <p className='text-center text-3xl font-bold font-serif'>{post.title}</p>
        <p className='absolute text-lg font-serif -mt-[28px] xs:mt-[5px]'>Author: {post.fullName}</p>
        <p className='absolute text-lg ml-[933px] xs:m-0 xs:text-md md:m-0 -mt-[28px] xs:mt-[55px] 
        font-serif md:mt-1 2xl:ml-[1500px]'>
          {moment(post.updatedAt).format('MMMM Do YYYY')}
        </p>
        <p className='mt-8 xs:mt-24 font-serif text-xl first-letter:text-5xl first-letter:uppercase'>
          {post.content}
        </p>
      </div>

      <div className='relative row-span-1 mt-8'>
        <p className='text-2xl'>Comments ({commentList.length})</p>
        <input type='text' className='w-72' value={comment} placeholder='Type your comment here.' 
        onChange={handleComment}/>
        <button className='bg-blue-200' onClick={handleSubmit}>Add comment</button>

        <div className='border border-black w-96 mt-3 shadow-xl rounded-lg'>
          {commentList.map((comment) => (
            <div>
              <p className='text-xl mt-1 text-blue-400'>{comment}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Post
