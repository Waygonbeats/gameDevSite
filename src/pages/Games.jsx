import React from 'react'
import { useAuth } from '../hooks/use-auth' 
import { Navigate } from 'react-router-dom'
export const Games = () => {
 const {isAuth, email}= useAuth()
  return isAuth ? (
    <div>Welcome{email}</div>
  ):(Navigate("/login"))
}
