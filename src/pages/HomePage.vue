<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input
        placeholder="search"
        :value="searchQuery"
        v-on:input="handleChange"
        />
        <button>Search</button>
      </form>`
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard :result = 'result' :key="result.id" v-for="result in searchResults" @click="selectGame(result.id)" />
      </section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard :genre='genre' :key='genre.id' v-for='genre in genres' @click="selectGenre(genre.id)"/>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'HomePage',
    components: {
      GenreCard,
      GameCard
    },
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched=true
      },
      handleChange(event) {
        console.log(event)
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push({path: `/details/${gameId}`})
      },
      selectGenre(genreId) {
        console.log(genreId)
        this.$router.push({path: `/list/${genreId}`})
      }
    }
  }
</script>