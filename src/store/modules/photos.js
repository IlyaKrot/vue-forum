export default {
  actions: {
    async fetchPhotos(context, limit) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
      const photos = await res.json()

      context.commit('updatePhotos', photos)
      console.log(photos)
    }
  },
  mutations: {
    updatePhotos(state, photos) {
      state.photos = photos
    }
  },
  state: {
    photos: []
  },
  getters: {
    allPhotos(state) {
      return state.photos
    }
  }
}