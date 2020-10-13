<template>
  <div class="mb-20">
    <div class>
      <div class="mt-10 mx-auto md:text-xl max-w-md md:max-w-4xl">
        <nuxt-link to="/">
          <img class="mx-auto" width="400" src="/MoviethesisLogo.png" />
        </nuxt-link>
        <!-- <div class="my-6">
          <h2 class="text-gray-200 text-2xl font-black">
            DEBUG OVERWRITE TEST GROUP
          </h2>
          <div class>
            <p class="text-xl text-gray-300 mt-2">
              Current testgroup (remember to remove in production env):
            </p>
            <p class="text-sm text-gray-300 mt-1 underline">
              {{ testGroupDesc }}
            </p>
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
        </div> -->
        <h2 class="text-gray-200 text-2xl font-black">The scenario</h2>
        <p class="text-base text-gray-300 mt-2">
          Imagine that you are about to use a new streaming service called
          'Moviethesis' which works similarly to popular streaming services like
          Netflix or HBO.
        </p>
        <p class="text-base text-gray-300 mt-4">
          Moviethesis offers you
          <span class="font-bold underline">personalized</span> recommendations
          on which movies to watch.
        </p>
        <!-- <p class="text-md text-gray-300 mt-2">{{ explainerText }}</p> -->
        <p v-if="isControlGroup" class="text-base text-gray-300 text-md mt-4">
          Moviethesis
          <span class="font-bold underline">enables you to</span> control your
          privacy settings. It lets you decide which of your personal data can
          be used for recommendations and how it is shared.
        </p>
        <p v-else class="text-base text-gray-300 text-md mt-4">
          Moviethesis <span class="font-bold underline">does not</span> explain
          which of your personal data they collect. <br />
          They <span class="font-bold underline">do not</span> let you control
          your privacy settings and how your personal data is used.
        </p>
        <p
          v-if="isTransparentGroup"
          class="text-base text-gray-300 text-md mt-4"
        >
          The movie recommendations offered by Moviethesis are based on
          25.000.000 movie reviews created by 160.000 users.
          <span class="font-bold underline"
            >Your personalized recommendations</span
          >
          are calculated by Moviethesis’ recommendation algorithm by using the
          recommendations created by other people and comparing them with your
          movie selction and personal data. Moviethesis will match new movies
          for you to watch based on your movie selection profile, which is
          calculated based on other similar user profiles.
        </p>
        <p v-else class="text-base text-gray-300 text-md mt-4">
          Moviethesis <span class="font-bold underline">does not</span> offer
          any information on how the system works or how it calculates your
          movie recommendations.
          <!-- recommendations or if/how it uses your personal data to make your
          personal recommendations. -->
        </p>

        <div class="mt-12">
          <h2 v-if="isControlGroup" class="text-gray-200 text-2xl font-black">
            Control your privacy settings
          </h2>
          <div
            v-if="isControlGroup"
            class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
          >
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Privacy Settings
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Control how your personal data is used by Moviethesis and
                  shared
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
                          >Personal data for improving your
                          recommendations</label
                        >
                        <p class="text-gray-500">
                          Allow Moviethesis to use your personal data to give
                          you better perzonalized recommendations
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
                            >Improve our services</label
                          >
                          <p class="text-gray-500">
                            Allow Moviethesis to use your personal data to
                            improve the recommendation results for all users
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
                    <div class="mt-4">
                      <div
                        class="flex items-start"
                        v-bind:class="{
                          'border-red-600 border-2 p-2 rounded-md': showDataWarning,
                        }"
                      >
                        <div class="flex items-center h-5">
                          <input
                            id="hasUnderstoodDataControl"
                            v-model="hasUnderstoodDataControl"
                            type="checkbox"
                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-5">
                          <label
                            for="hasUnderstoodDataControl"
                            class="font-medium text-gray-700"
                            >I have checked the settings</label
                          >
                          <p class="text-gray-500">
                            I have checked that the privacy settings are as I
                            would like
                          </p>
                        </div>
                      </div>
                      <p class="text-sm text-red-500" v-if="showDataWarning">
                        Please check that you have understood and marked the
                        settings as expected
                      </p>
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
  data() {
    return {
      hasUnderstoodDataControl: false,
      showDataWarning: false,
    };
  },
  methods: {
    async saveData() {
      if (this.isControlGroup && !this.hasUnderstoodDataControl) {
        this.showDataWarning = true;
        return;
      } else {
        this.showDataWarning = false;
      }
      this.$nuxt.$loading.start();
      await this.$store.dispatch("updateFromExplainer", {
        PID: localStorage.getItem("PROLIFIC_PID"),
        SID: localStorage.getItem("STUDY_ID"),
        SSID: localStorage.getItem("SESSION_ID"),
      });
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
        return "Moviethesis does not offer any information on how exactly its algorithm determines personal recommendations. Moviethesis does not explain which of your personal data they collect and use to make the recommendations.";
      } else if (group === "b") {
        return "Moviethesis does not offer any information on how exactly its algorithm determines personal recommendations. Moviethesis lets you decide which of your personal data can be used for recommendations.";
      } else if (group === "c") {
        return "";
      } else if (group === "d") {
        return "Moviethesis lets you decide which of your personal data can be used for recommendations.";
      }
    },
  },
  async fetch({ store }) {
    await store.dispatch("loadUser");
  },
};
</script>

<style></style>
