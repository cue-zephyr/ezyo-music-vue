<template>
    <div class="button">
        <button :class="state" :disabled="state">{{ txt }}</button>
    </div>
</template>

<script>
export default {
  name: 'MenuBtn',
  props: ['state', 'txt']
}
</script>

<style scoped>
.button {
  color: #efefef;
}
.button button {
  border: 2px solid #7f7f7f;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  color: #efefef;
  font-family: Montserrat, sans-serif;
  font-size: 1.3em;
  padding: 16px 32px;
  width: 160px;
}
.button button:not(.disabled) {
  /*background-image: linear-gradient(#ddd, #888);*/
  /*background-color: #4f6e92;*/
  background-color: #525252;
}
.button button:disabled {
  /*background-color: #6a778f;*/
  /*background-color: #516781;*/
  background-color: #313131;
  color: #777777;

}
.button button:not(.disabled):hover {
  /*background-image: linear-gradient(#eee, #999);*/
  /*background-color: #5084c0;*/
  background-color: #8a8a8a;
  border: 2px solid #acacac;
  transition: all 0.2s;
}
.button button:not(.disabled):active {
  /*background-image: linear-gradient(#aaa, #ededed);*/
  /*background-color: #9ac3f1;*/
  background-color: #afafaf;
  border: 2px solid #e6e1a9;
  box-shadow: none;
  color: #efefef;
  filter: url('/#white-glow');
  margin: 2px -2px -2px 2px;
  transition: all 0.1s;
}
</style>
