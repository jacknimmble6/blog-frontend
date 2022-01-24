import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavbarDropdown from './NavbarDropdown'
import MobileNavDropdown from './MobileNavDropdown'

const Navbar = () => {
  const [userInfo, setUserInfo] = useState([])
  const [show, setShow] = useState(false)
  const [showMenu, setShowMenu] = useState(false) 
  const user = localStorage.getItem('id')
  

  useEffect(() => {
    axios.get(`https://blog-app2356.herokuapp.com/blog/user/fetch/${user}`)
    .then(res => setUserInfo(res.data))
    setShow(false)

    return () => {
      setShow(false)
      setUserInfo([])
    }
  }, [user])

  const handleShow = () => {
    setShowMenu(true)
    setShow(!show)
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
    <div className=" bg-indigo-100 flex h-10 sm:hidden md:hidden xs:hidden lg:block xl:block">
      <Link to='/' className='link'>
        Home
      </Link>
      <Link to='/create' className='link'>
        Create
      </Link>
      <Link to='/signup' className='link'>
        Register
      </Link>
      <Link to='/about' className='link'>
        About
      </Link>
      {`${localStorage.getItem('firstname')}` === '' ? '' :
        <p className='absolute ml-[600px] pl-96 text-xl -mt-4 text-indigo-400 2xl:mt-0' onClick={handleShow}>
          Hey, {localStorage.getItem('token') ?  `${localStorage.getItem('firstname')}` : 'Guest'}
        </p>
      }
      {show === false || !user ? '' : <NavbarDropdown /> }
    </div>

    <div className='xl:hidden xs:block sm:block md:block lg:hidden 2xl:hidden' onClick={handleShowMenu}>
      <svg viewBox="0 0 100 80" width="20" height="20">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
      {showMenu === true ? (
      <div className='mt-8'>
        <Link to='/' className='block mb-4'>
          Home
        </Link>
        <Link to='/create' className='block mb-4'>
          Create
        </Link>
        <Link to='/signup' className='block mb-4'>
          Register
        </Link>
        <Link to='/about' className='block mb-4'>
          About
        </Link>
        {`${localStorage.getItem('firstname')}` === '' ? '' :
          <p className='mb-8' onClick={handleShow}>
            Hey, {localStorage.getItem('token') ?  `${localStorage.getItem('firstname')}` : 'Guest'}
          </p>
        }
        { show === false || !user ? '' :  <MobileNavDropdown /> }
      </div>
      ) : ''
    }
    </div>
    </>
  )
}

export default Navbar
