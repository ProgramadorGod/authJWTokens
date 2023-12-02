import React from 'react'
import { Link, Navigate, Route, Routes, redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'



export const PrivateRoute = ({children, ...rest}) => {
    console.log("private route is working ..")

    const Authenticated = false
    
    return (
        <Routes>
            <Route {...rest}>{!Authenticated ? children[0] : children[1] }</Route>

        </Routes>
        
    )
    }
