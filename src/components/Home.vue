<template>
    <div id="home" class="content">
        <img src="../assets/construction.gif" alt="under construction" />
        <img id="em" src="../assets/homelogo.svg" alt="ezyo music" />
        <img src="../assets/construction.gif" alt="under construction" />
        <div class="marquee">
            <div>
                <p>For all your musical needs</p>
                <p>For all your musical needs</p>
            </div>
        </div>
    </div>
</template>

<script>
import Content from '@/components/Content'
export default {
  name: 'Home',
  components: {
    'content-view': Content
  }
}
</script>

<style scoped>
@keyframes blink {
  from {
      opacity: 1;
      }
  to {
      opacity: 0.1;
    }
}
@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}
#home {
    align-items: center;
    /*background-color: #6a8a8d;*/
    /*background-image: url('../assets/perspective_grid.svg');*/
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#em {
    animation: blink 0.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    margin: 20px;
    /*max-width: 400px;*/
    width: 100%;
}
img {
    max-width: 480px;
    width: 100%;
}
.marquee {
    height: 30px;
    overflow: hidden;
    position: relative;
    max-width: 460px;
    width: 100%;
}
.marquee div {
    animation: marquee 6s linear infinite;
    display: block;
    font-family: Inconsolata;
    overflow: hidden;
    position: absolute;;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200%;
}
p {
    float:left;
    font-size: 2em;
    width: 50%;
}
</style>
