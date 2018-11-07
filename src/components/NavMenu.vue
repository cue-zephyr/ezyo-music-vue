<template>
  <div id="nav">
    <nav>
      <ul>
        <li class="home">
          <a href="#">
            <slot></slot>
          </a>
        </li>
        <li class="button">
          <menu-btn txt="about"/>
        </li>
        <li class="button">
          <menu-btn txt="music"/>
        </li>
          <li class="button">
            <menu-btn txt="services"/>
          </li>
          <li class="button">
            <menu-btn txt="contact" />
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
import MenuBtn from "./MenuBtn";
export default {
  name: "NavMenu",
  components: {
    "menu-btn": MenuBtn
  },
  data() {
    return {
      msg: "Navigation menu here."
    };
  }
};
</script>

<style scoped>
#nav {
  background-image: url("../assets/vw-checkerboard.svg");
  background-size: 50%;
  height: 100vh;
  padding: 40px 10px;
  position: fixed;
  width: 180px;
}
#nav nav ul li {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
</style>
