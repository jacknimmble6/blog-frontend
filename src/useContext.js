import React, { createContext, useState } from 'react'

const MyContext = createContext()

const MyContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [category1, setCategory1] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
      <MyContext.Provider value={{ handleSearch, category1, setCategory1, 
        search, loggedIn, setLoggedIn, setSearch }}>
        {children}
      </MyContext.Provider>
  )
}

export {MyContext, MyContextProvider}