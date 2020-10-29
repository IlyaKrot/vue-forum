<template>
  <div class="container form">
    <h1>Что интересного?</h1>
    <form @submit.prevent="submit">
      <input type="text" class="title" placeholder="Тема" v-model="title">
      <textarea type="text" class="body" placeholder="Описание" v-model="body"></textarea>
      <button type="submit">Создать пост</button>
    </form>
    <p id="added" ref="add">Пост добавлен!</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    submit() {
      if (this.title || this.body !== '') {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now()
        })
        this.title = this.body = '';
        console.log(this.$refs.add)
        this.$refs.add.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0);'
        )
        setTimeout(() => {
          this.$refs.add.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, 10px, 0);'
          )
        }, 3000)
      }
    },
    ...mapMutations(['createPost'])
  }
}
</script>

<style lang="less" scoped>
  h1 {
    margin-bottom: 40px;
    margin-top: -40px;
  }
  input, textarea {
    display: block;
    outline: none;
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #ccc;
  }

  #added {
    position: relative;
    color: #42b983;
    opacity: 0;
    transition: all 0.5s
  }

  .body {
    height: 200px;
    resize: none;
    margin-bottom: 40px;
  }

  button {
    border: none;
    border-radius: 5px;
    outline: none;
    background: #42b983;
    color: #fff;
    padding: 10px;
    // box-shadow: 0 5px 5px -5px gray;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    box-shadow: 0 0 0 0 gray;
  }

  .form{
    border-radius: 5px;
    padding: 40px;
    margin: 40px 0;
    box-shadow: 0 5px 1px -5px #888;
  }
</style>