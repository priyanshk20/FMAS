import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Favourites from './pages/Favourites'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
