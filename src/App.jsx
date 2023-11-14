import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import './App.css'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components' 
import { Outlet } from 'react-router-dom';
import Loader from './assets/img/loader.gif'
function App() {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().
    then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout({userData}))
      }
    })
    .finally(()=>setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
    <Header />
    <Outlet />
    <Footer />
    </div> </div>
  ) : <div className=' loader w-full  flex-1 h-100vh flex items-center justify-center'>
  <img src={Loader} alt="Loading" style={{width:'15%',height:'auto'}}/>
  </div>  
}

export default App
