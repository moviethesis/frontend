<template>
  <div class="px-5">
    <main class="text-gray-400 mt-10 mb-64">
      <h2 class="text-gray-200 text-4xl font-black">Your recommendations</h2>
      <div v-for="movieToRecommend in movies">
        <h3 class="text-gray-200 text-2xl font-bold mt-12 mb-2">{{ movieToRecommend.movie.title }}</h3>
        <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          <li v-for="movie in movieToRecommend.recs" :key="movie.movieId" class="inline-block relative col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg hover:bg-blue-500 transition ease-in-out duration-150">
            <img class="mx-auto bg-gray-800 rounded-tl-lg rounded-tr-lg" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
            <p class="text-base text-md text-gray-300 p-2">{{ movie.title }}</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      movies() {
        return this.$store.state.recommends
      },
    },
    methods: {
    },
    async fetch({ store }) {
      // await store.dispatch("loadUser")
      await store.dispatch("loadRecommendations")
    }
  }
</script>

<style></style>
