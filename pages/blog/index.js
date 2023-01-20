import Blog from "../../components/blog";

function index({ posts }) {
  return (
    <>
     <div>blog posts :</div>
     <Blog posts={posts} />
    </>
   
  );
}

export default index;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3)
    }
  }
}