<template>
  <div class="container main-cont">
    <div class="row justify-content-between">
      <div class="col-12 col-sm-9 ">
        <div class="container cont">
          <div class="head">
            <h1>Фотожабы</h1>
          </div>
          <h4>Отображать на странице:</h4>
          <form @submit.prevent="sendLimit">
            <input type="number" placeholder="50" v-model="limit">
            <button type="submit">Показать</button>
          </form>
          <p class="done" ref="done">Сделано!</p>
          <div class="content" v-for="(photo, key) in allPhotos" :key="key">
            <h4>{{photo.title}}</h4>
            <div class="photo">
              <img :src="photo.url" :alt="photo.title">
            </div>
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Photos',
  data() {
    return {
      limit: 0
    }
  },
  components: {
    Sidebar
  },
  computed: mapGetters(['allPhotos']),
  async mounted() {
    this.fetchPhotos(50)
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    async sendLimit() {
      this.fetchPhotos(this.limit)
        this.$refs.done.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0);'
        )
        setTimeout(() => {
          this.$refs.done.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, 10px, 0);'
          )
        }, 3000)
    }
  }
}
</script>


<style lang="less" scoped>
  .cont {
    padding: 20px 20px;
  }
  .content {
    padding: 20px;
  }
  h4 {
    margin-bottom: 20px;
  }
  .photo img {
    filter: grayscale(1);
    object-fit: cover;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    height: 100%;
  }

  .photo img:hover {
    filter: grayscale(0);
  }

  .done {
    // position: absolute;
    color: #42b983;
    opacity: 0;
    transition: all 0.5s
  }

  input {
    outline: none;
    border: 1px solid #ccc;
    color: #2c3e50;
    width: 180px;
    padding: 5px 10px;
    border-radius: 5px 0 0 5px;
  }

  button {
    border: none;
    padding: 6px 10px;
    border-radius: 0 5px 5px 0;
    outline: none;
    background: #42b983;
    color: #fff;
    // box-shadow: 0 5px 5px -5px gray;
    margin-bottom: 20px;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    box-shadow: 0 0 0 0 gray;
  }
</style>
