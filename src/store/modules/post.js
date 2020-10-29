export default {
  actions: {
    async fetchPosts(context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      console.log(posts)

      context.commit('updatePosts', posts)
    }
  },
  mutations: {
    openPost(state, id) {
      state.posts.filter(p => p.id == id)
    },
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}