<div class="list">
    <h2>Recent Posts</h2>
    <ul>
        {#each data.posts as post }
            <li>
                <div class="thumbnail-wrap">
                    <img src={ post.image } alt={ post.title }>
                </div>
                <div class="post-information">
                    <h2><a href={`/${post.id}`}>{ post.title }</a></h2>
                    <p>{ post.description }</p>
                    <p class="date-author">{ post.created.substring(0,10) } { post.author }</p>
                </div>
            </li>
        {/each}
    </ul>
</div>

<script lang="ts">
    export let data;
</script>

<style>
    .list {
        margin-top: 20px;
        width: 100%;
        max-width: 640px;
    }
    .list>h2 {
        text-align: center;
        font-size: 2rem;
    }
    .list ul {
        margin: 0;
        padding: 0;
    }
    .list li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
        border-top: 1px dotted grey;
        padding: 20px 20px;
    }
    .list li .thumbnail-wrap {
        overflow: hidden;
        height: 64px;
        width: 64px;
        border-radius: 10px;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .list li .thumbnail-wrap img {
        display: block;
        height: 64px;
    }
    .list li .post-information {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .list li .post-information h2,
    .list li .post-information p {
        margin: 0;
    }
    .list li .post-information .date-author {
        font-size: 0.9rem;
        color: grey;
    }
</style>