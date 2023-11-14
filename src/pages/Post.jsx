import React,{useEffect,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import services from '../appwrite/Services'
import Button from '../components/Button'
import { Container } from '../components/index'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
useSelector
function Post() {
    const [post , setPost] = useState(null);
    const {slig}= useParams()
    const navigate= useNavigate();
    const userData= useSelector((state)=>state.auth.userData)
 
    const isAuthor = post &&userData ? post.userId===userData.$id:false;

    return (
    <div>Post</div>
  )
}

export default Post