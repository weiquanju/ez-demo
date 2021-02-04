<template>
  <div :id="elementId" class="ez-demo"></div>
</template>

<script>
import EZUIKit from "ezuikit-js";
export default {
  name: "HelloWorld",
  props: {
    id: [String, Number],
    token: String,
    url: String,
  },
  computed: {
    elementId() {
      return `video-container-${this.id}`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.player = new EZUIKit.EZUIKitPlayer({
        id: this.elementId,
        accessToken: this.token,
        url: this.url,
      });
    });
  },
};
</script>
<style scoped>
.ez-demo {
  width: inherit;
  height: inherit;
}
</style>
