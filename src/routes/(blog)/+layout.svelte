<div class="container">
    <div class="title">
        <h1>Lovecats</h1>
        <p>
            Welcome to Lovecats! If you like articles about cats,
            or images and videos of cute and funny cats, then this is the blog for you!
            Lovecats is the blog for all cat lovers. Please, stay for a while, and have a nice Meow!
        </p>
    </div>
    <div class="hero">
        <img src="lovecats.jpg" alt="Lovecats">
    </div>

    <slot />

</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        max-width: 1280px;
        align-items: center;
        margin: 30px auto;
        font-family: sans-serif;
    }

    .title {
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .title h1 {
        font-size: 3rem;
        color: tomato;
        margin: 0;
    }

    .title p {
        max-width: 640px;
        color: grey;
    }

    .hero {
        margin-top: 20px;
    }

    .hero img {
        display: block;
        max-width: 100%;
    }
</style>