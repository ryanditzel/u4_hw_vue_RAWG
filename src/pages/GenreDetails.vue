<template>
  <div class="genre-content" v-if="genreDetails">
    <section class="image-container">
      <div>
        <img :src="genreDetails.image_background" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ genreDetails.name }}</h3>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'GenreDetails',
    props: {
      result: {}
    },
    data: () => ({
      genreDetails: null
    }),
    mounted() {
      this.getGenreDetails()
    },
    methods: {
      async getGenreDetails() {
        let genreId = parseInt(this.$route.params.genre_id)
        console.log(typeof genreId)
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.genreDetails=res.data
        console.log(res.data)
      }
    }
  }
</script>
