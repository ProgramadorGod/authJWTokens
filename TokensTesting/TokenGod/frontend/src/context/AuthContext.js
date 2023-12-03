import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, redirect } from "react-router-dom";
import {createBrowserHistory} from "history";

const AuthContext = createContext()

export default AuthContext;



export const AuthProvider = ({children}) => {

    const history = createBrowserHistory()


    let [authTokens, setauthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    

    let loginUser = async(e)=>{
        
        e.preventDefault()
        let response = await fetch("http://127.0.0.1:8000/api/token/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value })
        })
    
        const data = await response.json()
        console.log("data: ", data)
        console.log("response: ", response)
    
        if (response.status === 200){
            setauthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history.push("/")
            window.location.reload();
            
            
        }else{
            alert("Something went wrong!")

        }
        
    
    }


    let logoutUser = () =>{
        
        setauthTokens(null)
        setUser(null)
        
        localStorage.removeItem('authTokens')

    }
    
    let contextData ={
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,

    }



    
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

    )
}