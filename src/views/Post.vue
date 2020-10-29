<template>
 <div class="container main-cont">
    <div class="row justify-content-between">
      <div class="col-12 col-sm-9 ">
        <div class="container cont" v-if="allPosts.length !== 0">
          <div class="head">
            <h2>{{allPosts[0].title}}</h2>
          </div>
          <div class="body">
            <p>{{allPosts[0].body}}</p>
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Post',
  computed: mapGetters(['allPosts']),
  components: {
    Sidebar
  },
  mounted() {
    this.openPost(this.$route.params.id)
  },
  methods: {
    ...mapMutations(['openPost'])
  }
}
</script>

<style lang="less" scoped>
  .body {
    height: 50vh;
  }
</style>