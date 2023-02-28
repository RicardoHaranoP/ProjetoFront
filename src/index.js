import './css/styles.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Header from './components/Header.js'
import SideBar from './components/SideBar.js'

import Home from './pages/Home.js'
import PaginaLogin from './components/handleLogin.js'

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated' || false))

    return isAuthenticated ? <Outlet /> : <PaginaLogin setIsAuthenticated={setIsAuthenticated} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <div className="container-fluid h-100">
            <div className="row h-100">
                <BrowserRouter>
                    <Header />
                    <SideBar />
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path='/' element={<Home />} />
                        </Route>
                    </Routes>

                </BrowserRouter>
            </div>
        </div>
    </>
)