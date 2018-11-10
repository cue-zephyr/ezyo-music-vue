<template>
    <div class="button">
        <button :class="state" :disabled="state">{{ txt | vaporWave }}</button>
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
  border: 4px solid #7f7f7f;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  font-family: Montserrat, sans-serif;
  font-size: 1.3em;
  padding: 16px 32px;
  width: 160px;
}
.button button:not(.disabled) {
  background-image: linear-gradient(#ddd, #888);
}
.button button:disabled {
  background-color: #909090;
}
.button button:not(.disabled):hover {
  background-image: linear-gradient(#eee, #999);
  border: 4px solid #acacac;
  transition: all 0.2s;
}
.button button:not(.disabled):active {
  background-image: linear-gradient(#aaa, #ededed);
  border: 4px solid #e2e27a;
  box-shadow: none;
  color: #efefef;
  filter: url('/#white-glow');
  margin: 2px -2px -2px 2px;
  transition: all 0.1s;
}
</style>
