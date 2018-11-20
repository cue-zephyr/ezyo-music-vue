<template>
    <div id="contact" class="content">
        <a target="_blank" href="mailto:ezyo@ezyomusic.com">email</a>
        <a target="_blank" href="https://instagram.com/ezyomusic">instagram</a>
        <a target="_blank" href="https://open.spotify.com/artist/16QCSNhQUlkqsR3xgtlSAs">spotify</a>
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
    background-color: #6a8a8d;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
a {
    color: #adadad;
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
