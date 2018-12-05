<template>
    <div id="home" class="content">
        <img src="../assets/construction.gif" alt="under construction" />
        <img id="em" src="../assets/homelogo.svg" alt="ezyo music" />
        <img src="../assets/construction.gif" alt="under construction" />
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
#home {
    align-items: center;
    /*background-color: #6a8a8d;*/
    /*background-image: url('../assets/perspective_grid.svg');*/
    background-color: #008080;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#em {
    margin: 20px;
    /*max-width: 400px;*/
    width: 100%;
}
img {
    max-width: 480px;
    width: 100%;
}
</style>
