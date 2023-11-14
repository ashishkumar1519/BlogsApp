import React, { useEffect, useState } from 'react'
import services from '../appwrite/Services'
import { Container,PostCard } from '../components'
function AllPost() {
    const [post,setPost]= useState([]);

    useEffect(()=>{},[])

    services.getPosts([]).then((posts)=>{
      console.log(posts)
        if(posts){
            setPost(posts.documents)
            
        }
    })

  return (
    <div className='w-full py-8'>
    <Container>
    <div className='flex flex-wrap'>
    
    {post.map((posts)=>{
        <div key={posts.$id}>
        <PostCard posts={posts} /> </div>
    })}

    </div>
    </Container>
    </div>
  )
}

export default AllPost