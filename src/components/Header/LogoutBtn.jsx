import React from 'react'
import { useDispatch } from 'react-redux'
import authService  from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import  {} from '../index'
function LogoutBtn() {

    const dispatch= useDispatch();

    const logOuthandler = ()=>{
        authService.logout()
        .then(()=>{dispatch(logout())}) 
    }
  return (
    <button onClick={logOuthandler} className='inline-block px-6 py-2 duration-500 hover:bg-blue-600 rounded-full' >LogoutBtn</button>
  )
}

export default LogoutBtn