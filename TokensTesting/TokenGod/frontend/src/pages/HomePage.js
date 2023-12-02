import React from 'react'
import { Navigate, redirect } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Navigate to="/"/>
        <p>You're logged in the home page</p>
    </div>
  )
}


export default HomePage
