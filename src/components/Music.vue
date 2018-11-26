<template>
    <div id="music">
        <content-view>
            <content-article>
                <h1>Hannah</h1>
                <h2>INIGO</h2>
                <p>I worked on this production</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lg9jwSm6vzg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </content-article>
            <content-article>
                <h1>Hannah</h1>
                <h2>INIGO</h2>
                <p>I worked on this production</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lg9jwSm6vzg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
      "content-article": Article,
      "content-view": Content
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
    height: 0;
    padding-top: 25px;
	padding-bottom: 56.25%; /* 16:9 */
    position: relative;

}
iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
</style>
