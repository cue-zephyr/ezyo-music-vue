<template>
    <div class="button">
        <button class="btn" :class="state" :disabled="state">{{ txt }}</button>
    </div>
</template>

<script>
export default {
  name: 'MenuBtn',
  props: ['state', 'txt']
}
</script>

<style scoped>
.button button {
  border: none;
  background-color: transparent;
  color: #272727;
  font-family: Montserrat, sans-serif;
  height: 60px;
  text-align: center;
  width: 100%;
}
.button .active {
  color:green;
}

@media only screen and (min-width:768px) {
  .button button {
    /*background-image: linear-gradient(#ddd, #888);*/
    /*background-color: #4f6e92;*/
    background-color: #b8b8b8;
    border-top: 2px solid #e4e4e4;
    border-left: 2px solid #e4e4e4;
    border-right: 2px solid #464646;
    border-right: 2px solid #464646;
    border-bottom: 2px solid #747474;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    font-family: sans-serif;
    font-size: 0.8em;
    width: 190px;
  }
  .button button:disabled {
    /*background-color: #6a778f;*/
    /*background-color: #516781;*/
    background-color: #a0a0a0;
    color: #777777;

  }
  .button button:hover {
    /*background-image: linear-gradient(#eee, #999);*/
    /*background-color: #5084c0;*/
    background-color: #dadada;
    border: 2px solid #acacac;
    cursor: pointer;
    text-decoration: underline;
    transition: all 0.2s;
  }
  .button button:active {
    /*background-image: linear-gradient(#aaa, #ededed);*/
    /*background-color: #9ac3f1;*/
    background-color: #f3f3f3;
    border-top: 2px solid #464646;
    border-left: 2px solid #464646;
    border-right: 2px solid #e4e4e4;
    border-right: 2px solid #e4e4e4;
    box-shadow: none;
    color: #efefef;
    margin: 2px -2px -2px 2px;
    transition: all 0.1s;
  }
  .button button:focus {
    border: 2px solid #faa25a;
    outline: 0;
  }
  .button button::-moz-focus-inner {
    border: 0;
  }
}
@media only screen and (min-width:1600px) {
  .button button {
    height: 10vh;
    width: 250px;
  }
}
</style>
