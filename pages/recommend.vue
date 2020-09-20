<template>
  <div class="px-5">
    <main class="mt-10 mb-64">
      <div class="my-6">
        <h2 class="text-gray-200 text-2xl font-black">
          DEBUG OVERWRITE TEST GROUP
        </h2>
        <div class>
          <p class="text-base text-xl text-gray-300 mt-2">
            Current testgroup (remember to remove in production env):
          </p>
          <p class="text-sm text-gray-300 mt-1">{{ testGroupDesc }}</p>
          <select
            id="testGroup"
            v-model="testGroup"
            class="mt-2 block form-select py-2 px-6 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          >
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
        </div>
      </div>
      <h2 class="text-gray-200 text-4xl font-black mb-4">
        Your recommendations
      </h2>
      <p v-if="isTransparentGroup" class="text-gray-300 text-md mb-8">
        The recommendations are based on 20.000.000 movie reviews created by
        100.000 users. Your recommendations are calculated by the Moviethesis
        algorithm that takes those reviews into account as well as what movies
        look like those you selected previous.
      </p>
      <p class="text-gray-300 text-md mb-8">
        Scroll to the bottom when you are ready to
        <span class="font-bold text-blue-300">continue!</span>
      </p>
      <div>
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <li
            v-for="rec in movies"
            :key="rec.movie.movieId"
            class="col-span-1 flex flex-col text-center bg-gray-800 rounded-lg shadow-xl"
          >
            <div class="flex-1 flex flex-col align-top">
              <div class="bg-black">
                <img
                  v-bind:class="[
                    isTransparentGroup ? 'rounded-t-lg' : 'rounded-lg',
                  ]"
                  class="mx-auto bg-gray-200"
                  :src="`https://image.tmdb.org/t/p/w500${rec.movie.poster_path}`"
                />
              </div>
              <div v-if="isTransparentGroup" class="flex-grow flex flex-col">
                <div class="mt-3">
                  <p class="text-gray-400 text-sm leading-5">
                    Recommendation rate for you
                  </p>
                  <p
                    class="mx-4 px-6 py-2 mt-2 text-teal-200 text-sm leading-4 font-bold bg-teal-700 rounded-full"
                  >
                    {{ rec.wr | percentage }}
                  </p>
                </div>

                <p class="p-4 text-gray-400 text-left text-sm leading-5">
                  Becuase you liked:
                </p>
                <div class="px-4 mb-4" v-for="basedOn in rec.based_on">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10">
                      <img
                        class="w-10 rounded-sm"
                        :src="`https://image.tmdb.org/t/p/w500${basedOn.poster_path}`"
                        alt
                      />
                    </div>
                    <div class="ml-4 text-left">
                      <div class="text-sm leading-5 font-medium text-gray-200">
                        {{ basedOn.title }}
                      </div>
                      <div class="mt-1 text-sm leading-5 text-gray-600">
                        {{ basedOn.sim_score | percentage }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <span class="inline-flex rounded-lg shadow-lg my-8">
        <nuxt-link
          to="/survey"
          class="inline-flex items-center px-12 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >Continue</nuxt-link
        >
      </span>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    testGroup: {
      get() {
        return this.$store.state.testGroup;
      },
      set(value) {
        this.$store.commit("debugSetGroup", value);
      },
    },
    testGroupDesc() {
      return this.$store.getters.testGroupDesc;
    },
    movies() {
      return this.$store.state.recommends;
    },
    isTransparentGroup() {
      return this.$store.getters.isTransparentGroup;
    },
    isControlGroup() {
      return this.$store.getters.isControlGroup;
    },
  },
  methods: {},
  async fetch({ store }) {
    await store.dispatch("loadRecommendations");
  },
};
</script>

<style></style>
