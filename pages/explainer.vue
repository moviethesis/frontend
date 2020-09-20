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

        <div class="mt-10">
          <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Please enter your personal information
                </p>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-2">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Country</label
                    >
                    <select
                      id="country"
                      v-model="country"
                      class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      required
                    >
                      <option v-for="c in countriesList" v-bind:value="c.code">
                        {{ c.name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-2">
                    <label
                      for="gender"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Gender</label
                    >
                    <select
                      id="gender"
                      v-model="gender"
                      class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      required
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-2">
                    <label
                      for="age"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Age</label
                    >
                    <input
                      id="age"
                      v-model="age"
                      type="number"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                            >Personal data for improving data engine</label
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
import countries from "../plugins/countries.js";

export default {
  data: {
    isSharePersonalDataToggled: true,
  },
  methods: {
    async saveData() {
      this.$nuxt.$loading.start();
      await this.$store.dispatch("updateUserPrivateData");
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
    country: {
      get() {
        return this.$store.state.user.country;
      },
      set(value) {
        this.$store.commit("setUserCountry", value);
      },
    },
    gender: {
      get() {
        return this.$store.state.user.gender;
      },
      set(value) {
        this.$store.commit("setUserGender", value);
      },
    },
    age: {
      get() {
        return this.$store.state.user.age;
      },
      set(value) {
        this.$store.commit("setUserAge", value);
      },
    },
    useForRecommendations: {
      get() {
        return this.$store.state.user.dataControl.useForRecommendations;
      },
      set(value) {
        this.$store.commit("setUseForRecommendations", value);
      },
    },
    useForImprovementsForOthers: {
      get() {
        return this.$store.state.user.dataControl.useForImprovementsForOthers;
      },
      set(value) {
        this.$store.commit("setUseForImprovementsForOthers", value);
      },
    },
    useForSharing: {
      get() {
        return this.$store.state.user.dataControl.useForSharing;
      },
      set(value) {
        this.$store.commit("setUseForSharing", value);
      },
    },
    countriesList() {
      return countries;
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
