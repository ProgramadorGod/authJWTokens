import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import AuthContext from '../context/AuthContext';

const Header = () => {
  let {Name} = useContext(AuthContext)
  return (
    <div>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/Login">Login</Link>
        <p>Welcome {Name}</p>
    </div>
  )
}

export default Header