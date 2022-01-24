import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RandomPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://blog-app2356.herokuapp.com/blog/posts/random')
    .then(res => setPosts(res.data))
  
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'tween', duration: 2 }}>
      {posts.map(item => (
        <div className='mt-4 font-serif ml-24 md:w-full xs:hidden sm:hidden sm:ml-0 md:ml-0'>
          <img src={item.image} className='w-[90%] md:w-full sm:w-full h-64 object-cover brightness-50 z-0 rounded-lg 
          border-blue-500 border-4' alt='' />
          <p className='absolute text-4xl text-white mt-[-40px]'>{item.category}</p>
          <p className='absolute text-5xl text-white z-10 mt-[-255px]'>{item.title}</p>
          <p className='absolute w-72 text-white -mt-[150px] ml-[770px] sm:ml-[600px] md:ml-[470px]'>
            {item.content.substring(0, 180)}
            <Link to={`/blog/${item._id}`} className='absolute mt-8 ml-[-99px]'>
              Read More.....
            </Link>
          </p>
          <p className='absolute text-xl text-white -mt-[250px] ml-[790px] sm:text-lg md:text-lg 
          sm:ml-[660px] md:ml-[500px]'>
            Created by: {item.fullName}
          </p>
        </div>
      ))}   
    </motion.div>
  )
}

export default RandomPost
