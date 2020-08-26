<template>
  <div class="px-5">
    <h2 class="text-gray-200 text-2xl font-black mb-6">Your top 5 selected favorite movies</h2>
    <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <li
      v-for="movie in selectedMovies"
      :key="movie.movieId"
      class="inline-block relative col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg hover:bg-blue-500 transition ease-in-out duration-150"
      >
        <button v-on:click="movieClicked(movie)" class="focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
          <img class="mx-auto bg-gray-800 rounded-tl-lg rounded-tr-lg" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
          <p class="text-base text-md text-gray-300 p-2">{{ movie.title }}</p>
          <p
            class="absolute top-0 left-0 block m-3 p-2 rounded-full text-white shadow-solid bg-green-400 font-bold transition ease-in-out duration-150"
            v-bind:class="isMovieIn(movie)"
          >selected</p>
        </button>
      </li>
    </ul>

    <main class="text-gray-400 mt-10">
      <h2 class="text-gray-200 text-2xl font-black">Top 100 movies</h2>
      <p class="text-base text-xl text-gray-300 mb-6">
        Select your 5 favorite movies from this list
      </p>
      <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <li
        v-for="movie in movies"
        :key="movie.movieId"
        class="inline-block relative col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg hover:bg-blue-500 transition ease-in-out duration-150"
        >
          <button v-on:click="movieClicked(movie)" class="focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
            <img class="mx-auto bg-gray-800 rounded-tl-lg rounded-tr-lg" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
            <p class="text-base text-md text-gray-300 p-2">{{ movie.title }}</p>
            <p
              class="absolute top-0 left-0 block m-3 p-2 rounded-full text-white shadow-solid bg-green-400 font-bold transition ease-in-out duration-150"
              v-bind:class="isMovieIn(movie)"
            >selected</p>
          </button>
        </li>
      </ul>
    </main>

  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      movies() {
        return this.$store.state.top100
      },
      selectedMovies() {
        return this.$store.state.user.selectedMovies
      }
    },
    methods: {
      isMovieIn: function(movie) {
        if (!this.selectedMovies.includes(movie)) {
          return "hidden"
        }
      },
      movieClicked: function(movie) {
        this.$store.dispatch("movieTapped", { movie })
      }
    },
    async fetch({ store }) {
      await store.dispatch("loadUser")
      await store.dispatch("loadTopList")
    }
  }
</script>

<style></style>
