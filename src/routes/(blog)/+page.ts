export async function load({ fetch }) {
    const posts = await fetch("http://localhost:3000/posts").then((res) => res.json());
    return {posts};
}