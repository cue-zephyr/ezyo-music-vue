<template>
    <div class="button">
        <button :class="state" :disabled="state">{{ txt | vaporWave }}</button>
        <svg height="0" width="0">
          <filter id="white-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
          <feFlood result="flood" flood-color="#ffff90" flood-opacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
          <feMerge>
              <feMergeNode in="blurred"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </svg>
    </div>
</template>

<script>
export default {
  name: "MenuBtn",
  props: ["state", "txt"],
  filters: {
    toUpper(value) {
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
  border: 4px solid #7f7f7f;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
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
  filter: url(#white-glow);
  margin: 2px -2px -2px 2px;
  transition: all 0.1s;
}
</style>