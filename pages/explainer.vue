<template>
  <div class="mb-20">
    <div class="">
      <div class="mt-10 mx-auto md:text-xl max-w-md md:max-w-3xl ">
        <nuxt-link to="/">
          <img class="mx-auto" width="400" src="/MoviethesisLogo.png" />
        </nuxt-link>
        <h2 class="text-gray-200 text-2xl font-black">
          The scenario:
        </h2>
        <p class="text-base text-xl text-gray-300 mt-2">
          Imagine that you are about to use a new streaming service called 'Moviethesis'
        </p>
        <p class="text-base text-xl text-gray-300 mt-2">
          This streaming service is known for <span class="font-bold underline">not</span> being privacy aware and <span class="font-bold underline">selling</span> your data to third parties
        </p>
        <p class="text-base text-xl font-black text-gray-300 mt-10">
          The steps:
        </p>
        <p class="text-base text-xl text-gray-300 mt-2">
          <span class="font-black">1.</span>
          <br>
          You will be asked to select your 5 favorite movies among a top 100 list
        </p>
        <p class="text-base text-xl text-gray-300 mt-2">
          <span class="font-black">2.</span>
          <br>
          The streaming service will recommend some new movies for you, and you will be asked to rate the recommendation
        </p>
        <p class="text-base text-xl text-gray-300 mt-2">
          <span class="font-black">3.</span>
          <br>
          A short survey on the performance of the streaming service will be asked of you
        </p>
        <p class="text-base text-xl text-gray-300 mt-2">
          <br>
          It should take around <span class="font-bold">3 min.</span> to complete!
        </p>
        <nuxt-link to="/select" class="my-10 shadow-xl inline-flex items-center px-12 py-4 border border-transparent text-base leading-6 font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
          Start now
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
