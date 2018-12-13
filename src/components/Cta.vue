<template>
<button>Let's make music!</button>
</template>

<script>
export default {
    name: "Cta"
}
</script>

<style scoped>
button {
    background-color: #24ca5b;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-family: Bai Jamjuree;
    font-size: 1.4em;
    height: 50px;
    /*text-transform: uppercase;*/
    width: 320px;
}
button:hover {
    background-color: #32eb6a;
    text-decoration: underline;
}
button:active {
    background-color: #7bff98;
}
</style>
