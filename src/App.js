import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './Create/Create'
import Signup from './Signup/Signup'
import About from './About'
import Post from './Home/Post'
import PageNotFound from './PageNotFound'
import Logout from './Logout'
import UpdateInfo from './UpdateInfo/UpdateInfo'
import UpdatePost from './UpdatePost/UpdatePost'
import UserPost from './UpdatePost/UserPost'
import Delete from './UpdatePost/Delete'
import HomeSearch from './Home/HomeSearch'

const App = () => {
  
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<HomeSearch />} />
        <Route path='/create' element={<Create />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog/:id' element={<Post />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='user/:id' element={<UpdateInfo />} />
        <Route path='/user/updatePost/:id' element={<UserPost />} />
        <Route path='/user/delete/:id' element={<Delete />} />
        <Route path='user/:id/posts' element={<UpdatePost />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </Router> 
    </div>
  )
}

export default App
