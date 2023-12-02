import { createContext } from "react";


const AuthContext = createContext()

export default AuthContext;

let loginUser = async(e)=>{
    e.preventDefault()
    console.log("Login User Working...")
}

let contextData ={
    loginUser:loginUser
}

export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{"Name":"Luis"}}>
            {children}
        </AuthContext.Provider>

    )
}