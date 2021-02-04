<template>
  <div id="app">
    <ezPlayerVue v-bind="liveParam" />
  </div>
</template>

<script>
import ezPlayerVue from './components/ez-player.vue';

export default {
  name: "App",
  components: {
    ezPlayerVue,
  },
  data() {
    return {
      liveParam: {
        id: 1,
        // 高空全景摄像机萤石sdk使用的accessToken
        token:
          "xxx",
        // 高空全景摄像机萤石sdk直播地址
        url: "ezopen://open.ys7.com/F11575776/1.live",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  height: 450px;
}
</style>
