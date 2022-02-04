import React from 'react'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Movies/>
      <Pagination/>
    </>
  )
}

export default App
