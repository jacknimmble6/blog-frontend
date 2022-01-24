import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { MyContext } from '../useContext'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const { category1 } = useContext(MyContext)

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/posts/category`, {
      params: {
        category1: category1
      }
    }).then(res => setPosts(res.data))

  }, [category1])


  return (
    <motion.div className='flex flex-row mt-8 flex-wrap xs:flex-col' 
    initial={{ x: -1200, opacity: 0, skewX: 100 }} 
    animate={{ x: 10, opacity: 1, skewX: 0 }} transition={{ type: 'tween', duration: 1.5 }} 
    key={Math.random() * 400}>
      {posts.map(post => (
        <div className='h-fit border-black border-2 xs:ml-0 rounded-lg w-72 ml-4 
        mt-4 shadow-2xl xs:w-fill' 
        key={post._id}>
          <img src={post.image} alt='' className='w-72 rounded-t-lg h-40 object-cover'/>
          <p className='bg-blue-200 w-24 mt-2 ml-3 text-white text-sm text-center rounded-lg'>
            {post.category}
          </p>
          <p className='font-semibold ml-3 mt-2'>{post.title}</p>
          <p className='mb-4 light w-64'>
            <Link to={`/blog/${post._id}`}>
              {post.content.substring(0, 200)}.....
            </Link>
          </p>
          <p className='light'>created by {post.fullName}</p>
          <p className='light'>        
            updated on {moment(post.updatedAt).format('MMMM Do YYYY')}         
          </p>
        </div>
      ))}
    </motion.div>
  )
}

export default PostList
