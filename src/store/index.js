import Vue from 'vue'
import Vuex from 'vuex';
import post from './modules/post'
import photos from './modules/photos'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    photos,
    users
  }
})