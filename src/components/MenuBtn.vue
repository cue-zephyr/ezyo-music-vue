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
  background-color: #cacaca;
  border-top: 2px solid #dfdfdf;
  border-right: 2px solid #8d8d8d;
  border-bottom: 2px solid #8d8d8d;
  border-left: 2px solid #dfdfdf;
  color: #000;
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
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    font-family: Montserrat, sans-serif;
    font-size: 1.3em;
    width: 160px;
  }
  .button button:disabled {
    /*background-color: #6a778f;*/
    /*background-color: #516781;*/
    background-color: #4e3131;
    color: #777777;

  }
  .button button:hover {
    /*background-image: linear-gradient(#eee, #999);*/
    /*background-color: #5084c0;*/
    background-color: #000080;
    cursor: pointer;
    text-decoration: underline;
    transition: all 0.2s;
  }
  .button button:active {
    /*background-image: linear-gradient(#aaa, #ededed);*/
    /*background-color: #9ac3f1;*/
    background-color: #db9e81;
    border: 2px solid #e6e1a9;
    box-shadow: none;
    color: #efefef;
    
    margin: 2px -2px -2px 2px;
    transition: all 0.1s;
  }
  .button button:focus {
    border: 1px dotted #000;
    margin: 1px;
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
