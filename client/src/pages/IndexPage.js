import { useEffect, useState } from 'react'
import Post from '../Post.js'

const IndexPage = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])
  return (
    <div className="post-container">
      {posts.length > 0 && posts.map(post=> 
          <>
            <Post {...post}/>
            <hr style={{marginBottom: "20px", marginTop: "0"}}/>
          </>
      )}
    </div>
  )
}

export default IndexPage
