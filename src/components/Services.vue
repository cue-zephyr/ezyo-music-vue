<template>
<div id="services">
    <content-view>
        <content-article>
            <h1>Ezyo's Services</h1>
            <h2>Production</h2>
            <p>
                It is much more fun to work together on a production. So let’s work on it together. You’re in a different country? No problem, I can work with that.
            </p>
            <h2>Remixing</h2>
            <p>
                Would you like to put your song in a new light? I would be happy to create that light.
            </p>
            <h2>Mixing</h2>
            <p>
                You like the sounds I’m getting but already have a track? I can mix it for you.
            </p>
            <h2>Session</h2>
            <p>
                Need someone to play some instruments on your track? I’m up for it!
            </p>
            <h2>Local</h2>
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
