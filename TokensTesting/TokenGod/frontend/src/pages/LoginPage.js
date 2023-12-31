import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext)

  return (
    <> 
        <form onSubmit={loginUser}>
            <input type='text' name='username' placeholder='Enter Username'/>
            <input type='password' name='password' placeholder='Enter Password'/>
            <input type='submit'/>

        </form>


    </>
  )
}

export default LoginPage