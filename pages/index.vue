<template>
  <div class="mb-20">
    <div class="text-center">
      <h2
        class="text-4xl tracking-tight leading-10 font-black text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      >
        Movie Recommender<br />
        <span class="text-blue-500">CBS thesis project</span>
      </h2>
      <div class="mt-10 text-2xl text-center">
        <h2 class="text-gray-200 text-3xl font-black">What is this?</h2>
        <p class="text-base text-2xl text-gray-400">
          This is a thesis project from Copenhagen Business School researching
          recommender algorithms. If you wish, you can help us by testing our
          movie recommender and answer a short survey.
        </p>
        <nuxt-link
          to="/explainer"
          class="my-10 shadow-xl inline-flex items-center px-12 py-4 border border-transparent text-base leading-6 font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
        >
          Let's get started
        </nuxt-link>
      </div>
    </div>

    <ul
      class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
      <li
        class="col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg"
      >
        <img
          class="mx-auto bg-black rounded-lg shadow-lg"
          src="https://image.tmdb.org/t/p/w500/w7WxNbb0mcWpwDMd3pJA7LQRfnt.jpg"
          alt=""
        />
      </li>

      <li
        class="col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg"
      >
        <img
          class="mx-auto bg-black rounded-lg shadow-lg"
          src="https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg"
          alt=""
        />
      </li>

      <li
        class="col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg"
      >
        <img
          class="mx-auto bg-black rounded-lg shadow-lg"
          src="https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
          alt=""
        />
      </li>

      <li
        class="col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg"
      >
        <img
          class="mx-auto bg-black rounded-lg shadow-lg"
          src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          alt=""
        />
      </li>

      <li
        class="col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg"
      >
        <img
          class="mx-auto bg-black rounded-lg shadow-lg"
          src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
          alt=""
        />
      </li>

      <li
        class="col-span-1 flex flex-col text-center bg-black rounded-lg shadow-lg"
      >
        <img
          class="mx-auto bg-black rounded-lg shadow-lg"
          src="https://image.tmdb.org/t/p/w500/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg"
          alt=""
        />
      </li>
    </ul>

    <p class="text-base text-center text-sm text-gray-500 mt-20">
      This is a research project made by Mikkel Ulstrup & Thomas Wingsted at
      Copenhagen Business School as part of their master thesis for their
      studies in msc e-business. The data we collect is anonymized and only used
      for research purposes. The data is not shared with any third party and
      only used for the thesis research. By clicking 'let's get started', you
      accept that we may use the data for our research paper.
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    const q = this.$route.query;
    if (q.PROLIFIC_PID && q.STUDY_ID && q.SESSION_ID) {
      localStorage.setItem("PROLIFIC_PID", q.PROLIFIC_PID);
      localStorage.setItem("STUDY_ID", q.STUDY_ID);
      localStorage.setItem("SESSION_ID", q.SESSION_ID);
      console.log("PROLIFIC");
    } else {
      console.log("!PROLIFIC");
    }
  },
};
</script>

<style></style>
