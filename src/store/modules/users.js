export default {
  actions: {
    async fetchUsers(context, limit) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const users = await res.json()

      context.commit('updateUsers', users)
      console.log(users)
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    }
  },
  state: {
    users: []
  },
  getters: {
    allUsers(state) {
      return state.users
    }
  }
}