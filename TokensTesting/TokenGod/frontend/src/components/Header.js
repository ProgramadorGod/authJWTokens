import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/Login">Login</Link>
    </div>
  )
}

export default Header