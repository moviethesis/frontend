<template>
  <div class="px-5">
    <h2
      class="text-gray-200 text-2xl font-black mb-6"
    >Your top selected favorite movies ({{ this.selectedMovies.length }} selected)</h2>
    <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <li
        v-for="movie in selectedMovies"
        :key="movie.movieId"
        class="inline-block relative col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg hover:bg-blue-500 transition ease-in-out duration-150"
      >
        <button
          v-on:click="movieClicked(movie)"
          class="focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
        >
          <img
            class="mx-auto bg-gray-800 rounded-lg"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            alt
          />
          <!-- <p class="text-base text-md text-gray-300 p-2 h-24">{{ movie.title }}</p> -->
          <p
            class="absolute top-0 left-0 block m-3 p-2 rounded-full text-white shadow-solid bg-green-400 font-bold transition ease-in-out duration-150"
            v-bind:class="isMovieIn(movie)"
          >selected</p>
        </button>
      </li>
    </ul>

    <main class="text-gray-400 mt-10 mb-64">
      <h2 class="text-gray-200 text-2xl font-black">Top Movie List</h2>
      <p
        class="text-base text-xl text-gray-300 mb-6"
      >Select your favorite movies from this list (minimum 5)</p>
      <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <li
          v-for="movie in movies"
          :key="movie.movieId"
          class="inline-block relative col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg hover:bg-blue-500 transition ease-in-out duration-150"
        >
          <button
            v-on:click="movieClicked(movie)"
            class="focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            <img
              class="mx-auto bg-gray-800 rounded-lg"
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              alt
            />
            <!-- <p class="text-base text-md text-gray-300 p-2 h-24">{{ movie.title }}</p> -->
            <p
              class="absolute top-0 left-0 block m-3 p-2 rounded-full text-white shadow-solid bg-green-400 font-bold transition ease-in-out duration-150"
              v-bind:class="isMovieIn(movie)"
            >selected</p>
          </button>
        </li>
      </ul>
    </main>

    <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 sm:mx-24">
      <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div v-bind:class="footerbg" class="p-2 rounded-lg shadow-lg sm:p-3">
          <div class="flex justify-between sm:flex-row flex-col">
            <div class="flex-1 flex items-center">
              <span v-bind:class="footerIconBG" class="flex p-2 rounded-lg">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  v-bind:class="hideInfomark"
                  class="h-6 w-6 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  v-bind:class="showCheckmark"
                  class="h-6 w-6 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white">{{ footerText }}</p>
            </div>
            <div class="order-3 mt-2 sm:mt-0 flex-shrink-0 w-full sm:order-2 sm:w-auto">
              <div class="rounded-md shadow-sm">
                <nuxt-link
                  to="/recommend"
                  v-bind:class="isContinueActive"
                  class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                >
                  Continue
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="arrow-right w-3 h-3 ml-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  computed: {
    movies() {
      return this.$store.state.top100;
    },
    selectedCount() {
      return 5 - this.selectedMovies.length;
    },
    footerbg() {
      if (this.selectedMovies.length >= 5) {
        return "bg-green-600";
      } else {
        return "bg-blue-600";
      }
    },
    footerIconBG() {
      if (this.selectedMovies.length >= 5) {
        return "bg-green-800";
      } else {
        return "bg-blue-800";
      }
    },
    showCheckmark() {
      if (this.selectedMovies.length < 5) {
        return "hidden";
      }
    },
    hideInfomark() {
      if (this.selectedMovies.length >= 5) {
        return "hidden";
      }
    },
    footerText() {
      if (this.selectedMovies.length < 5) {
        return `Please select at minimum ${this.selectedCount} movies to continue!`;
      } else {
        return "You have selected the minimum 5 movies, you can click continue!";
      }
    },
    isContinueActive() {
      if (this.selectedMovies.length < 5) {
        return "cursor-not-allowed hover:none bg-gray-500";
      }
    },
    selectedMovies() {
      return this.$store.state.user.selectedMovies;
    },
  },
  methods: {
    isMovieIn: function (movie) {
      if (!this.selectedMovies.includes(movie)) {
        return "hidden";
      }
    },
    movieClicked: function (movie) {
      this.$store.dispatch("movieTapped", { movie });
    },
  },
  async fetch({ store }) {
    await store.dispatch("loadTopList");
    await store.dispatch("loadUser");
  },
};
</script>

<style></style>
