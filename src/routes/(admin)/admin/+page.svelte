<div class="container">
    <h1>Lovecats Admin</h1>
    <form on:submit={onSubmit}>
        <h2>Create a new post</h2>
        <div 
            class="message"
            class:error={error}
            class:display={Boolean(message)}
        >
            {@html message}
        </div>
        <div class="input-wrap">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" bind:value={title} disabled={disabled}>
        </div>
        <div class="input-wrap">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" bind:value={description} disabled={disabled}>
        </div>
        <div class="input-wrap">
            <label for="text">Text</label>
            <textarea name="text" id="text" cols="30" rows="5" bind:value={text} disabled={disabled}></textarea>
        </div>
        <div class="input-wrap">
            <label for="author">Author</label>
            <input type="text" name="author" id="author" bind:value={author} disabled={disabled}>
        </div>
        <div class="input-wrap">
            <label for="image">Image</label>
            <input type="text" name="image" id="image" bind:value={image} disabled={disabled}>
        </div>
        <input type="submit" value="Create" disabled={disabled}>
    </form>
</div>

<script lang="ts">
    let title: string = "";
    let description: string = "";
    let text: string = "";
    let author: string = "";
    let image: string = "";
    let error: boolean = false;
    let message: string = "";
    let disabled: boolean = false;

    function onSubmit(event: SubmitEvent) {
        event.preventDefault();
        disabled = true;

        fetch("http://localhost:3000/posts", {
            method: "post",
            body: JSON.stringify({
                title,
                description,
                text,
                author,
                image
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            return res.json()
        }).then((data) => {
            error = false;
            message = `Your <a href="/${data.id}">post</a> was created successfully!`;
            clearForm();
        }).catch(() => {
            error = true;
            message = "Oops! Something went wrong. Please try again.";
        }).finally(() => {
            disabled = false;
        });
    }

    function clearForm() {
        title = "";
        description = "";
        text = "";
        author = "";
        image = "";
    }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        max-width: 1280px;
        align-items: center;
        margin: 30px auto;
        font-family: sans-serif;
    }
    h1 {
        font-size: 3rem;
        color: tomato;
        margin: 0 0 5rem;
    }
    form {
        width: 100%;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
    form h2 {
        font-size: 2rem;
        text-align: center;
    }
    form .input-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    form .input-wrap label,
    form .input-wrap input,
    form .input-wrap textarea {
        width: 100%;
        padding: 5px;
    }
    form .input-wrap input,
    form .input-wrap textarea {
        border-radius: 5px;
        border: 1px solid grey;
    }
    form .input-wrap label,
    form input[type="submit"] {
        font-size: 1.2rem;
    }
    form input[type="submit"] {
        cursor: pointer;
        padding: 5px 10px;
        background-color: mediumseagreen;
        color: white;
    }
    form .message {
        display: none;
        height: 1rem;
        width: 100%;
        padding: 10px;
        background-color: mediumseagreen;
        color: white;
        border-radius: 5px;
    }
    form .message.error {
        background-color: tomato;
    }
    form .display {
        display: block;
    }
</style>