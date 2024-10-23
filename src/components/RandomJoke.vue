<template>
  <div>
    <h1>Carambar Jokes</h1>
    <p v-if="joke">{{ joke.content }}</p>
    <!-- <p v-else>Chargement...</p> -->
    <button @click="getRandomJoke">Joke</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: ''
    }
  },
  methods: {
    async getRandomJoke() {
      try {
        const response = await fetch('https://carambar-api.onrender.com/blagues/random')
        const data = await response.json()
        this.joke = data.content;
      } catch (error) {
        console.error('Error fetching joke:', error)
      }
    }
  }
}
</script>
