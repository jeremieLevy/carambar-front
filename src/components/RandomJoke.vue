<template>
  <div>
    <h1>Carambar Joke</h1>
    <p v-if="joke">{{ joke.content }}</p>
    <!-- <p v-else>Chargement...</p> -->
    <button @click="fetchRandomJoke">Click for a new Joke</button>
  </div>
</template>

<script>
import apiClient from '../api/axios'

export default {
  data() {
    return {
      joke: null,
      error: null
    }
  },
  methods: {
    async fetchRandomJoke() {
      try {
        const response = await apiClient.get('/blagues/random')
        this.joke = response.data
      } catch (err) {
        this.error = 'Erreur lors de la récupération de la blague aléatoire'
      }
    }
  },
  created() {
    this.fetchRandomJoke()
  }
};
</script>

<style scoped>
button {
  padding: 5px;
  border-radius: 2px;
  color: red;
  background-color: yellow;
}
</style>
