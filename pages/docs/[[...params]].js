import { useRouter } from "next/router";

function docs() {

    const router = useRouter();
    const { params = []} = router.query;
    console.log(params);
    return (
        <div>Docs page</div>
    )
}

export default docs;