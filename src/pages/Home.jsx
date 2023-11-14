import React, { useEffect, useState } from "react"
import services from "../appwrite/Services"
import { Container, PostCard } from "../components"
import { useNavigate } from "react-router-dom"
function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        // Assuming services.getPost() returns a list of posts
        services.getPosts().then((result) => {
            if (result) {
                setPosts(result.documents);
                console.log(result.documents);
            }
        });
    }, []);


    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 onClick={()=> navigate('/login')}   className="text-2xl font-bold hover:text-gray-500">
                                Login to the post
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                   {posts.map((post)=>(
                    <div key={post.$id} className="p-2 w-1/4"> 
                    <PostCard {...post} />                    
                    </div>
                   ))}
                </div>
            </Container>
        </div>
    )

}

export default Home