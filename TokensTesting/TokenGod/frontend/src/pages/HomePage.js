import React from 'react'
import { redirect } from 'react-router-dom'

const HomePage = () => {
  redirect("/Login")
  return (
    <div>
        <redirect to="/Login"></redirect>
        <p>You're logged in the home page</p>
    </div>
  )
}


export default HomePage
