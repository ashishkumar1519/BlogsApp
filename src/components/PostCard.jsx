import React from 'react'
import services  from '../appwrite/Services'
import { Link } from 'react-router-dom'
function PostCard({$id, title, featuredImage}) {
  console.log(featuredImage)
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-500 rounded-lg p-4'>
        <div className='w-full justify-center mb-4'>
        <img src={services.getFilePreview(featuredImage)} alt={title} />
      <h2 className='text-xl font-bold'> {title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard