<template>
    <div class="button">
        <button>{{ txt | vaporWave }}</button>
    </div>
</template>

<script>
export default {
  name: "MenuBtn",
  props: ["txt"],
  filters: {
      toUpper (value) {
          return value.toUpperCase();
      },
    vaporWave(value) {
      const alphaNumericOffset = parseInt("fee0", 16);
      const spaceOffset = parseInt("2fe0", 16);
      var vw = "";
      for (let i = 0; i < value.length; i++) {
        var code = value.charCodeAt(i);
        var vwCharCodeDec = 0;
        if (code >= 65 && code <= 122) {
          vwCharCodeDec = code + alphaNumericOffset;
        } else if (code == 32) {
          vwCharCodeDec = code + spaceOffset;
        } else if (code >= 48 && code <= 57) {
          vwCharCodeDec = code + alphaNumericOffset;
        } else {
          break;
        }
        vw += String.fromCharCode(vwCharCodeDec);
      }
      return vw;
    }
  }
};
</script>

<style scoped>
.button {
  color: #efefef;
}
.button button {
  background-image: linear-gradient(#ddd, #888);
  border: 4px solid #7f7f7f;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  font-size: 1.3em;
  padding: 16px 32px;
  width:160px;
}
.button button:hover {
    background-image: linear-gradient(#eee, #999);
    border: 4px solid #acacac;
    transition: all .2s;
}
.button button:active {
    background-image: linear-gradient(#aaa, #ededed);
    border: 4px solid #cdcdcd;
    box-shadow:none;
    color: #efefef;
    margin: 2px 0 0 2px;
    transition: all .1s;
}
</style>