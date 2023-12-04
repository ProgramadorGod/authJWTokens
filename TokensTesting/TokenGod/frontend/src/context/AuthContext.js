import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, redirect } from "react-router-dom";
import {createBrowserHistory} from "history";

const AuthContext = createContext()

export default AuthContext;



export const AuthProvider = ({children}) => {

    const history = createBrowserHistory()


    let [authTokens, setauthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [Loading, setLoading] = useState(true)

    let loginUser = async(e)=>{
        
        let response = await fetch("http://127.0.0.1:8000/api/token/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value })
        })
    
        const data = await response.json()
        console.log("data: ", data)
    
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


    let updateToken = async(e) =>{
        console.log("Updated successfully")
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh })
        })
    
        const data = await response.json()
        console.log("data: ", data)
        if (response.status === 200){
            setauthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            
            
        }else{
            alert("Something went wrong!")
            logoutUser()

        }
    
    }

    useEffect(()=>{
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, 20000)
        return ()=> clearInterval(interval);
    }, [authTokens, Loading]);

    
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

    )
}