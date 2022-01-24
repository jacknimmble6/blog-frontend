import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { MyContext } from '../useContext'
import { useNavigate } from 'react-router-dom'

const HomeNavbar = () => {
  const { setSearch } = useContext(MyContext)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    navigate('/search')
  } 

  return (
    <motion.div className='flex flex-row md:flex-col ml-8' initial={{ x: -1200 }} animate={{ x: 0 }} 
    transition={{ type: 'tween', duration: 2 }} className='grid grid-rows-2 md:-ml-48 sm:-ml-80'>
      <input type='text' placeholder='Search by Title' className='px-3 py-3 
      placeholder-blue-500 text-black bg-white rounded text-sm border-0 shadow outline-blue-400 
       focus:outline-none border-b-blue-400 focus:ring w-96 ml-[440px] xs:ml-[0px] xs:w-72' 
       onChange={handleSearch} />
      <button onClick={handleSubmit} className='text-indigo-600 w-[385px] ml-[440px] xs:ml-[0px] xs:w-72'>
        Search
      </button>
    </motion.div>
  )
}

export default HomeNavbar
