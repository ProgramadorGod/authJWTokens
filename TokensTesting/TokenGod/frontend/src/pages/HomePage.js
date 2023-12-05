import React from 'react'
import { Navigate, redirect } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)

 
  useEffect(() =>{
    getNotes()
  },[])

  let getNotes = async()=>{
    let response = await fetch("http://127.0.0.1:8000/api/notes2/",{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    console.log(authTokens.access)
    let data = await response.json()

    setNotes(data)
    console.log("Data: " , data)
    console.log("Notes: ",notes)

    

  }

  return (
    <div>
        <Navigate to="/"/>
        <p> You're logged to the home page</p>


        <ul>
          {notes.map(note => (
            <li key={note.id}> {note.body} </li>
          ))}
        </ul>


    </div>
  )
}


export default HomePage
