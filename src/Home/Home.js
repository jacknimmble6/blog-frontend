import React from 'react'
import HomeNavbar from './HomeNavbar'
import RandomPost from './RandomPost'
import PostList from './PostList'
import CategorySelect from './CategorySelect'

const Home = () => {
  
  return (
    <div>    
      <HomeNavbar  /> 
      <RandomPost />
      <CategorySelect />
      <PostList />
    </div>
  )
}

export default Home
