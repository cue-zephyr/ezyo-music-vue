<template>
<div id="services">
    <content-view>
        <content-article>
            <h1>Ezyo's Production Service</h1>
            <p>
                It is much more fun to work together on a production. So let’s work on it together. You’re in a different country? No problem, I can work with that.
            </p>
        </content-article>
        <content-article>
            <h1>Ezyo's Remix Service</h1>
            <p>
                Would you like to put your song in a new light? I would be happy to create that light.
            </p>
        </content-article>
        <content-article>
            <h1>Ezyo's Mix Service</h1>
            <p>
                You like the sounds I’m getting but already have a track? I can mix it for you.
            </p>
        </content-article>
        <content-article>
            <h1>Ezyo's Instrumentation Service</h1>
            <p>
                Need someone to play some instruments on your track? I’m up for it!
            </p>
        </content-article>
        <content-article>
            <h1>Ezyo's Local Service</h1>
            <p>
                Got a band? You’re a singer? Need a guitar player? Bass player? I got your back.
            </p>
        </content-article>
    </content-view>
</div>
</template>

<script>
import Article from '@/components/Article'
import Content from '@/components/Content'
export default {
  name: 'Services',
  components: {
    'content-view': Content,
    'content-article': Article
  }
}
</script>

<style scoped>
#services {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
