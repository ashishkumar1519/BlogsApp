import React from 'react'
import {Container,LogoutBtn,Logo} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
    const navigate =useNavigate();
    const  navItems = [
      {
        name:'Home',
        slug:'/',
        active:'true'
      },
      {
        name:'Login',
        slug:'/login',
        active:!authStatus,
      },{
        name:'Signup',
        slug:'/signup',
        active:!authStatus,
      },{
        name:'All Post',
        slug:'/all-post',
        active:authStatus,
      },
      ,{
        name:'Add Post',
        slug:'/add-post',
        active:authStatus,
      },
    ]

  return (
    <header className='py-3 shadow bg-gray-300'>
      <Container>
      <nav className='flex'>
      <div className='mr-4'>
        <Link>
        <Logo />
        </Link>
      </div>

      <ul className='flex ml-auto'>
          {navItems.map((item)=> item.active? (
            <li key={item.name}><button onClick={()=> navigate(item.slug)} className='inline-block px-6 py-2 duration-100 rounded-full hover:bg-blue-400'>{item.name}</button> </li>
          ) : null )}
          {authStatus && (
            <li>
            <LogoutBtn />
            </li>
           ) }
      </ul>

      </nav>
      </Container>
    </header>
  )
}

export default Header