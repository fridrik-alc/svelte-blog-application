
<div class="page-content">
    <div class="title-wrap">
        <div class="thumbnail-wrap">
            <img src={data.post.image ?? ""} alt={data.post.title ?? ""}>
        </div>
        <div class="title">
            <h2>{data.post.title ?? "Sorry, this page was not found.."}</h2>
            <p>{data.post.author ?? ""} {data.post.created?.substring(0,10) ?? ""}</p>
        </div>
    </div>
    <p>{data.post.text ?? ""}</p>
</div>


<script lang="ts">
    export let data;
</script>

<style>
    .page-content {
        margin-top: 5rem;
        width: 100%;
        max-width: 640px;
    }
    .title-wrap {
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
    .title-wrap .thumbnail-wrap {
        height: 64px;
        width: 64px;
        border-radius: 10px;
        overflow: hidden;
    }
    .title-wrap .thumbnail-wrap img {
        height: 64px;
    }
    .title {
        display: flex;
        flex-direction: column;
    }
    .title h2 {
        font-size: 2rem;
        margin: 0;
    }
    .title p {
        margin: 5px 0 0;
        font-style: italic;
        color: gray;
    }
</style>