import React from 'react'
import { Link, Navigate, Route, Routes, redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


export const PrivateRoute = ({children, ...rest}) => {
    console.log("private route is working ..")

    let {user} = useContext(AuthContext)


    
    return (
        <Routes>
            <Route {...rest}>{user ? children[1] && children[2] : children[0] }</Route>
        </Routes>
        
    )
    }
