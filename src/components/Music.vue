<template>
    <div id="music" class="content">
        <article>
            <h1>Hannah</h1>
            <h2>INIGO</h2>
            <p>I worked on this production</p>
            <div class="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lg9jwSm6vzg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'Music'
}
</script>

<style scoped>
#music {
    align-items: center;
    background-color: #6a8a8d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
iframe {
    width: 540px;
}
</style>
