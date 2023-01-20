import { useRouter } from "next/router";

function comment() {
    const router = useRouter();
    console.log(router.query.commentId)
  return (
    <div>comment</div>
  )
}

export default comment