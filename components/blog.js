import Link from "next/link"

function Blog({ posts }) {
  return (
    <>
        {
            posts.map((post) => (
                <ul key={post.id}>
                    <li> {post.id} </li>
                    <li> 
                      <Link href={`blog/${post.id}`} passHref>{post.title}</Link>  
                    </li>
                </ul>
            ))
        }
    </>
  )
}

export default Blog