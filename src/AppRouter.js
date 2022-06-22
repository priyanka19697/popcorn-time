import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import { ProtectedRoute } from './components/ProtectedRoute'
import React from 'react'



const AppRouter = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path='/movies' element={
                    <ProtectedRoute>
                        <Movies/>
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    )
}

export default AppRouter
