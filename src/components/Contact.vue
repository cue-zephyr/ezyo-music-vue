<template>
    <div id="contact">
        <a title="Email Ezyo: ezyo@ezyomusic.com" target="_blank" href="mailto:ezyo@ezyomusic.com">email</a>
        <a title="@ezyomusic on Instagram" target="_blank" href="https://instagram.com/ezyomusic">instagram</a>
        <a title="Ezyo on Spotify" target="_blank" href="https://open.spotify.com/artist/16QCSNhQUlkqsR3xgtlSAs">spotify</a>
    </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
#contact {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
a {
    font-family: Inconsolata;
    font-size: 4em;
    padding: 8px;
}
a:hover, a:visited:hover {
    color: #eeeeee;
}
a:visited {
    color: #aa8888;
}
a:active {
    color: #e4cd9e;
}
a:focus {
    border: 2px solid #eceb90;
    padding: 6px;
}
</style>
