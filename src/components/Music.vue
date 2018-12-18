<template>
    <div id="music">
        <content-view>
            <content-article>
                <h1>"Hannah"</h1>
                <h2>INIGO</h2>
                <p>I worked on this production. I'm the Asian behind the keys.</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lg9jwSm6vzg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </content-article>
            <content-article>
                <h1>"Only A Memory"</h1>
                <h2>Rachel White &amp; Ezyo</h2>
                <p>I worked on this production ad well. I'm the one playing the instruments.</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pV9wm8mHNak" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </content-article>
            <content-article>
                <h1>"Timeless</h1>
                <p class="subtitle">Mr. Beemer &amp; Ezyo Remix</p>
                <h2>Plamen Dereu</h2>
                <p>I worked on this remix.</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dCK2t9qZ4i0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </content-article>
        </content-view>
    </div>
</template>

<script>
import Article from '@/components/Article'
import Content from '@/components/Content'
export default {
  name: 'Music',
  components: {
    'content-article': Article,
    'content-view': Content
  }
}
</script>

<style scoped>
#music {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.video {
    overflow: hidden;
    padding-top: 56.25%;
    padding-bottom: 25px;
    position: relative;
    width: 100%;
}
iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.subtitle {
    font-size: 1.9em;
    text-transform: uppercase;
}
@media only screen and (min-width:480px) {
    .video {
        padding-top: 40%;
        
    }
}
@media only screen and (min-width:1024px) {
    .video {
        padding-top: 56.25%;
    }
}
</style>
