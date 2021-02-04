# ez-demo

## 萤石SDK使用

### 安装 SDK

`npm install ezuikit-js`

极简使用方式参见[App.vue](src/App.vue)，下面贴出相关代码：

```html
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
```





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
