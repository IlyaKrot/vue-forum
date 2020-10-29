<template>
  <div id="app">
    <div class="container-fluid header">
      <div class="container">
        <div id="nav" class="row">
          <div class="col-12 col-md-1 d-flex justify-content-start">
            <div class="icon">MF</div>
          </div>
          <div class="nav-elem-1 col-12 col-md-1 d-flex justify-content-start">
            <router-link to="/">Темы</router-link>
          </div>
          <div class="nav-elem-2 col-12 col-md-1 d-flex justify-content-start">
            <router-link to="/photos">Фото</router-link>
          </div>
          <div class="nav-elem-3 col-12 col-md-2 d-flex justify-content-start">
            <router-link to="/users">Пользователи</router-link>
          </div>
          <div class="nav-elem-4 col-12 col-md-3 ml-auto d-flex justify-content-start d-md-flex justify-content-md-end">
            <router-link to='#'>Войти / Зарегистрироваться</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="back-arrow" v-scroll="handleScroll" @click="backScroll">
      <img src="http://cdn.onlinewebfonts.com/svg/download_185769.png" alt="arrow">
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 0.6; transform: translate3d(0, -10px, 0)'
        )
      } else {
        el.setAttribute(
          'style',
          'opacity: 0; transform: translate3d(0, 10px, 0)'
        )
      }
    },
    backScroll() {
      window.scroll(0, 0);
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EDEEF0;
  padding-bottom: 5px;
  min-height: 100vh;
}

.back-arrow{
  position: fixed;
  bottom: 40px;
  left: 80px;
  width: 40px;
  height: 40px;
  opacity: 0;
  transition: 0.5s all;
}

.back-arrow:hover {
  cursor: pointer;
}

.back-arrow img {
  height: 100%;
  width: 100%;
}

.back-arrow img:active {
  transform: scale(0.9);
}

.header{
  box-shadow: 0 5px 1px -5px #888;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
}

div[class^="nav-elem"] {
  padding: 5px 15px;
  overflow: hidden;
}

// div[class*="col"]{
//   border: 1px solid black;
// }

.nav-elem-4 {
  white-space: nowrap;
}

.icon {
  background: #42b983;
  color: #fff;
  border-radius: 5px;
  width: 40px;
  padding: 5px 0;
}

#nav {
  padding: 15px 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
