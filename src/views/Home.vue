<template>
  <div class="container main-cont">
    <div class="row justify-content-between">
      <div class="col-12 col-sm-9 ">
        <div class="container cont">
          <PostForm/>
          <div class="head">
            <h1>Темы</h1>
          </div>
          <div class="content" v-for="(post, key) in allPosts" :key="key" @click="goToPost(post.id)">
            <p>{{post.title}}</p>
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import PostForm from '@/components/PostForm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Sidebar,
    PostForm
  },
  async mounted() {
    this.fetchPosts()
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    goToPost(post) {
      this.$router.push({path: `/post/${post}`})
    },
    ...mapActions(['fetchPosts']) 
  }
}
</script>

<style lang="less">
  .main-cont {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .cont {
    border-radius: 5px;
    border: 1px solid #fff;
    background: #fff;
    padding: 0 20px;
  }
  .head{
    margin: 20px 0;
    background: #fff;
    overflow: hidden;
  }
  .content {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 1px -5px #888;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 5px;
    opacity: 0.7;
  }
  .content:hover {
    opacity: 1;
    cursor: pointer;
  }
  p {
    margin: 10px 0;
  }
</style>

