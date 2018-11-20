<template>
<div id="about" class="content">
    <article id="vision">
        <div class="article-text">
            <h1>Ezyo's Vision on Music</h1>
            <p>
                Music is about attaching meaning to something metaphysical. Music is created from meaning in the mind of the creator. Music is interpreted by the listener to create meaning. It isn’t confined to a genre. It isn’t confined by certain instruments.
            </p>
        </div>
        <div class="article-image">
            <img src="../assets/about/grid-music2.png" alt="metaphysical"/>
        </div>
    </article>
</div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#about {
    align-items: center;
    background-color: #6a8a8d;
    display: flex;
    flex-direction: column-reverse;
    justify-content: baseline;
}
img {
    height: 100%;
    width: 100%;
}
.article-image {
    flex-shrink: 1;
}
.article-text {
    min-height: 80px%;
}
</style>
