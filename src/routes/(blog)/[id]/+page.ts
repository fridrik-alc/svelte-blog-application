export async function load({ params, fetch }) {
    let post = await fetch(`http://localhost:3000/posts/${params.id}`).then((res) => res.json());
    return { post };
}