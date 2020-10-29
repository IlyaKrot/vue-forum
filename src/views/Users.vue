<template>
  <div class="container main-cont">
    <div class="row justify-content-between">
      <div class="col-12 col-sm-9">
        <div class="container cont">
          <div class="head">
            <h1>Пользователи</h1>
          </div>
          <div class="content" v-for="(user, key) in allUsers" :key="key">
            <p>{{user.name}}</p>
            <p>{{user.surname}}</p>
            <p>{{user.email}}</p>
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
  name: 'Users',
  components: {
    Sidebar
  },
  computed: mapGetters(['allUsers']),
  async mounted() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<style lang="less" scoped>
  .cont {
    padding: 20px 20px;
  }
</style>
