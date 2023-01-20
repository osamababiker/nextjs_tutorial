

function single({post}) {
  return (
    <div>{ post.title }</div>
  )
}

export default single

export async function getStaticPaths(){
  return {
    paths: [
      {
        params: { blogId: "1" }
      },
      {
        params: { blogId: "2" }
      },
      {
        params: { blogId: "3" }
      }
    ],
    fallback: false,
  }
}

export async function getStaticProps(context){
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
  const data = await response.json();

  return {
    props: {
      post: data
    }
  }
}