<template>
  <div id="nav">
      <slot></slot>
      
    </div>
</template>

<script>
//import MenuBtn from './components/MenuBtn'
export default {
  name: 'NavMenu',
  components: {
    //"menu-btn": MenuBtn
  },
  data () {
    return {
      msg: 'Navigation menu here.'
    }
  }
}
</script>

<style scoped>
#nav { align-items: center; background-image: url('../assets/vw-checkerboard.svg'); background-size: 50%; display: flex; flex-direction: column; height: 100vh; padding: 40px 10px; position: fixed; width: 200px; }
</style>
