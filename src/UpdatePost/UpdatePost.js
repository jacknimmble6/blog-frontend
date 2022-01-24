import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import image from '../editing.png'
import image2 from '../icons8-delete-48.png'

const UpdatePost = () => {
  const { id } = useParams()
  const [userPosts, setUserPosts] = useState([])
  
  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/user/posts/${id}`)
    .then(res => setUserPosts(res.data))

    return () => {
      setUserPosts([])
    }
  }, [id])

  return (
    <>
      <p className='ml-[550px] text-2xl xs:ml-[50px] md:ml-48'>Your Posts({userPosts.length} total)</p>
      <div className='flex flex-row mt-8 flex-wrap' key={Math.random() * 200}>
        {userPosts.map(post => { 
        return (
          <div className='h-fit border-black border-2 rounded-lg w-72 ml-4 mt-4 shadow-2xl' key={post._id}>
            <img src={post.image} className='w-72 rounded-t-lg h-40 object-cover' alt={post.title} />
            <p className='bg-blue-200 w-24 mt-2 ml-3 text-white text-sm text-center rounded-lg'>
              {post.category}
            </p>
            <p className='font-semibold ml-3 mt-2'>{post.title}</p>
            <p className='text-sm ml-3 mb-4 font-light w-64'>
              <Link to={`/blog/${post._id}`}>
                {post.content.substring(0, 200)}.....
              </Link>
            </p>
            <p className='text-sm ml-3 font-light'>created by {post.fullName}</p>
            <p className='text-sm ml-3 font-light'>        
              updated on {moment(post.updatedAt).format('MMMM Do YYYY')}         
            </p>
            <Link to={`/user/updatePost/${post._id}`}>
              <img src={image} className='absolute -mt-56 ml-56 h-4' />
            </Link>
            <Link to={`/user/delete/${post._id}`}>
              <img src={image2} className='absolute -mt-56 ml-64 h-4'/>
            </Link>
          </div>
        )}
        )}
      </div>

    </>
  )
}

export default UpdatePost
