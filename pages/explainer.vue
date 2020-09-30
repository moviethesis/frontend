<template>
  <div class="mb-20">
    <div class>
      <div class="mt-10 mx-auto md:text-xl max-w-md md:max-w-4xl">
        <nuxt-link to="/">
          <img class="mx-auto" width="400" src="/MoviethesisLogo.png" />
        </nuxt-link>
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
        <h2 class="text-gray-200 text-2xl font-black">The scenario</h2>
        <p class="text-base text-xl text-gray-300 mt-2">
          Imagine that you are about to use a new streaming service called
          'Moviethesis' just like Netflix, HBO etc.
        </p>
        <p class="text-base text-xl text-gray-300 mt-2">{{ explainerText }}</p>
        <p v-if="isTransparentGroup" class="text-gray-300 text-md mb-8 mt-4">
          The recommendations are based on 25.000.000 movie reviews created by
          160.000 users. Your recommendations are calculated by the Moviethesis
          algorithm that takes those reviews into account as well as what movies
          look like those you selected previous.
        </p>

        <div class="mt-10">
          <div
            v-if="isControlGroup"
            class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
          >
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Data control
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Control how your data is used
                </p>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <fieldset>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="improve_recs"
                          type="checkbox"
                          v-model="useForRecommendations"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label
                          for="improve_recs"
                          class="font-medium text-gray-700"
                          >Personal data for improving data engine</label
                        >
                        <p class="text-gray-500">
                          Allow Moviethesis to use your movie selections to
                          improve the recommendation results for other users
                        </p>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="improve_for_others"
                            v-model="useForImprovementsForOthers"
                            type="checkbox"
                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-5">
                          <label
                            for="improve_for_others"
                            class="font-medium text-gray-700"
                            >Help other people</label
                          >
                          <p class="text-gray-500">
                            Allow Moviethesis to use your movie selections to
                            improve the recommendation results for other users
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="share"
                            v-model="useForSharing"
                            type="checkbox"
                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-5">
                          <label for="share" class="font-medium text-gray-700"
                            >Share personal data</label
                          >
                          <p class="text-gray-500">
                            Allow Moviethesis to share your personal data with
                            third parties to improve their services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="saveData"
          class="my-10 shadow-xl inline-flex items-center px-12 py-4 border border-transparent text-base leading-6 font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
        >
          Start now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async saveData() {
      this.$nuxt.$loading.start();
      if (
        localStorage.getItem("PROLIFIC_PID") &&
        localStorage.getItem("STUDY_ID") &&
        localStorage.getItem("SESSION_ID")
      ) {
        await this.$store.dispatch("updateFromExplainer", {
          PID: localStorage.getItem("PROLIFIC_PID"),
          SID: localStorage.getItem("STUDY_ID"),
          SSID: localStorage.getItem("SESSION_ID"),
        });
      }
      this.$nuxt.$loading.finish();
      this.$router.push({
        path: "/select",
      });
    },
  },
  computed: {
    testGroupDesc() {
      return this.$store.getters.testGroupDesc;
    },
    testGroup: {
      get() {
        return this.$store.state.testGroup;
      },
      set(value) {
        this.$store.commit("debugSetGroup", value);
      },
    },
    useForRecommendations: {
      get() {
        return this.$store.state.user.useForRecommendations;
      },
      set(value) {
        this.$store.commit("setUseForRecommendations", value);
      },
    },
    useForImprovementsForOthers: {
      get() {
        return this.$store.state.user.useForImprovementsForOthers;
      },
      set(value) {
        this.$store.commit("setUseForImprovementsForOthers", value);
      },
    },
    useForSharing: {
      get() {
        return this.$store.state.user.useForSharing;
      },
      set(value) {
        this.$store.commit("setUseForSharing", value);
      },
    },
    isTransparentGroup() {
      return this.$store.getters.isTransparentGroup;
    },
    isControlGroup() {
      return this.$store.getters.isControlGroup;
    },
    explainerText() {
      var group = this.$store.state.testGroup;
      if (group === "a") {
        return "Moviethesis offers recommendations on which movies to watch. How exactly the recommendations are made is not public known, and neither is which data they collect and use to make the recommendations.";
      } else if (group === "b") {
        return "Moviethesis offers recommendations on which movies to watch. How exactly the recommendations are made is not public known. They do, however, let you decide for yourself which of your data will be used to make the recommendations as well as if the recommendation engine may use your data for recommendations to other people.";
      } else if (group === "c") {
        return "Moviethesis offers recommendations on which movies to watch. How exactly the recommendations are made is not public known, and neither is which data they collect and use to make the recommendations.";
      } else if (group === "d") {
        return "Moviethesis offers recommendations on which movies to watch. They do, however, let you decide for yourself which of your data will be used to make the recommendations as well as if the recommendation engine may use your data for recommendations to other people.";
      }
    },
  },
  async fetch({ store }) {
    await store.dispatch("loadUser");
  },
};
</script>

<style></style>
