<template>
    <div class="content" id="contact">
        <a target="_blank" href="mailto:ezyo@ezyomusic.com">email</a>
        <a target="_blank" href="https://instagram.com/ezyomusic">instagram</a>
        <a target="_blank" href="https://open.spotify.com/artist/16QCSNhQUlkqsR3xgtlSAs">spotify</a>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
#contact {
    align-items: center;
    background-color: #6a8a8d;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
a {
    font-family: Inconsolata;
    font-size: 4em;
}
</style>