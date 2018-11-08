<template>
    <div class="content" id="home">
        <img src="../assets/construction.gif" alt="under construction" />
        <img id="em" src="../assets/homelogo.svg" alt="ezyo music" />
        <img src="../assets/construction.gif" alt="under construction" />
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#home {
    align-items: center;
    background-color: #6a8a8d;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#em {
    margin: 20px;
    width: 400px;
}
</style>
