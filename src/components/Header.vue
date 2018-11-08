<template>
    <div id="header">
        <header>
            <p>Ezyo Music</p>
            <!--<slot></slot>-->
        </header>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
#header {
    background-color: #71a1a8;
    position: relative;
    width: 100%;
    z-index: 30;
}
</style>