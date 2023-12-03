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
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div>
        <Link to="/">Home</Link>
        <span> | </span>

        {!user ? <Link to="/Login">Login</Link> : <Link to="/LogOut"> <Link to="/Login" onClick={logoutUser}>Log Out </Link></Link>}
        {user ? <p>Welcome {user.username}</p> : <p> Please log in</p>}
    </div>
  )
}

export default Header