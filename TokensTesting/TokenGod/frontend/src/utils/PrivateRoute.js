import React from 'react'
import { Link, Route, Routes, redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'



export const PrivateRoute = ({children, ...rest}) => {
    console.log("private route is working ..")
    const Authenticated = true
    return (
        <Routes>
            <Route {...rest}>{!Authenticated ? children :children}</Route>

        </Routes>
        
    )
    }
