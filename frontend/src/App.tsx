import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import React from 'react'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
