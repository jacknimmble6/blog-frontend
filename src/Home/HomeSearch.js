import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { MyContext } from '../useContext'
import { motion } from 'framer-motion'
import moment from 'moment'
import { Link } from 'react-router-dom'

const HomeSearch = () => {
  const [posts, setPosts] = useState([])
  const { search } = useContext(MyContext)

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/posts`, {
      params: {
        search1: search
      }
    }).then(res => setPosts(res.data))

  }, [search])

  return (
    <motion.div className='flex flex-row mt-8 flex-wrap' initial={{ x: -1200, opacity: 0, skewX: 100 }} 
    animate={{ x: 10, opacity: 1, skewX: 0 }} transition={{ type: 'tween', duration: 1.5 }} 
    key={Math.random() * 200}>
      {posts.map(post => (
        <div className='grid grid-cols-3 xs:grid-rows-2 xs:grid-cols-1 h-fit 
        border-black border-2 rounded-lg w-[90%] ml-4 xs:ml-0
        mt-4 shadow-2xl' key={post._id}>
          <div className='col-span-1 xs:row-span-1 border border-r-black'>
            <img src={post.image} alt='' className='w-fit xs:w-[400px] md:h-[325px] rounded-t-lg 
            h-[230px] object-cover' />
          </div>

          <div className='col-span-2 xs:row-span-1 xs:-mt-16 xs:col-span-1'>
            <p className='bg-blue-200 w-24 mt-2 ml-3 text-white text-sm text-center 
            rounded-lg'>
              {post.category}
            </p>
            <p className='font-semibold ml-3 mt-2 text-lg'>{post.title}</p>
            <p className='mb-4 light w-[700px] text-2xl xs:text-md xs:w-[90%] md:w-[90%]'>
              <Link to={`/blog/${post._id}`}>
                {post.content.substring(0, 200)}.....
              </Link>
            </p>
            <p className='light text-xl'>created by {post.fullName}</p>
            <p className='light text-xl'>        
              updated on {moment(post.updatedAt).format('MMMM Do YYYY')}         
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default HomeSearch
