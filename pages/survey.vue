<template>
  <div class="mb-20">
    <div class="mt-10 mx-auto md:text-xl max-w-md md:max-w-4xl">
      <h2 class="text-gray-200 text-2xl font-black">Survey</h2>

      <div class="mt-6 bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-200">
              Recommendation engine
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-400">
              Rate the recommendation engine
            </p>
          </div>

          <div class="mt-5 md:mt-0 md:col-span-2">
            <fieldset>
              <legend class="text-base leading-6 font-medium text-gray-200">
                How interested are you in watching the films recommended to you?
                {{ q0 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q0"
                    type="radio"
                    value="1"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not interested</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q0"
                    type="radio"
                    value="2"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q0"
                    type="radio"
                    value="3"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q0"
                    type="radio"
                    value="4"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q0"
                    type="radio"
                    value="5"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very interested</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                How trustworthy did you think the recommendations were? {{ q1 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q1"
                    type="radio"
                    value="1"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q1"
                    type="radio"
                    value="2"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q1"
                    type="radio"
                    value="3"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q1"
                    type="radio"
                    value="4"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q1"
                    type="radio"
                    value="5"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very trustworthy</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                How would you rate the quality of the recommendations? {{ q2 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q2"
                    type="radio"
                    value="1"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, very bad</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q2"
                    type="radio"
                    value="2"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q2"
                    type="radio"
                    value="3"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q2"
                    type="radio"
                    value="4"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q2"
                    type="radio"
                    value="5"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very good</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                How transparent did you think the recommendation engine was
                about how it got its results and its use of your personal data?
                {{ q3 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q3"
                    type="radio"
                    value="1"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not transparent at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q3"
                    type="radio"
                    value="2"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q3"
                    type="radio"
                    value="3"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q3"
                    type="radio"
                    value="4"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q3"
                    type="radio"
                    value="5"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very transparent</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                How much in control of your data did you think you were?
                {{ q4 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q4"
                    type="radio"
                    value="1"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not in control at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q4"
                    type="radio"
                    value="2"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q4"
                    type="radio"
                    value="3"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q4"
                    type="radio"
                    value="4"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q4"
                    type="radio"
                    value="5"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very much in control</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-200">Privacy</h3>
            <p class="mt-1 text-sm leading-5 text-gray-400">
              Questions about your thougths on privacy
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <fieldset>
              <legend class="text-base leading-6 font-medium text-gray-200">
                How important is it for you to restrict companies from getting
                your personal information? {{ q5 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q5"
                    type="radio"
                    value="1"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not important</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q5"
                    type="radio"
                    value="2"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q5"
                    type="radio"
                    value="3"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q5"
                    type="radio"
                    value="4"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q5"
                    type="radio"
                    value="5"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very important</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                How willing are you to give your personal information in order
                to get a better service? {{ q6 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q6"
                    type="radio"
                    value="1"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q6"
                    type="radio"
                    value="2"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q6"
                    type="radio"
                    value="3"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q6"
                    type="radio"
                    value="4"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q6"
                    type="radio"
                    value="5"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very willing</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                How would you rate your knowledge of when and which personal
                information companies use? {{ q7 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q7"
                    type="radio"
                    value="1"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, I know nothing</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q7"
                    type="radio"
                    value="2"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q7"
                    type="radio"
                    value="3"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q7"
                    type="radio"
                    value="4"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q7"
                    type="radio"
                    value="5"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, I know a lot</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-200">
                Are you comfortable giving out personal information in general?
                {{ q8 }}
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="1"
                    name="q8"
                    type="radio"
                    value="1"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="1" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >1, not comfortable at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="2"
                    name="q8"
                    type="radio"
                    value="2"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="2" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="3"
                    name="q8"
                    type="radio"
                    value="3"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="3" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="4"
                    name="q8"
                    type="radio"
                    value="4"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="4" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="5"
                    name="q8"
                    type="radio"
                    value="5"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="5" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-500"
                      >5, very comfortable</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <h2 class="text-gray-200 text-2xl font-black">
          THANK YOU FOR YOUR PARTICIPATION AND HELP!
        </h2>
        <p class="text-gray-400 text-sm">please click done below</p>
        <div class>
          <button
            @click="doneTapped"
            class="mt-6 shadow-xl items-center px-12 py-4 border border-transparent text-base leading-6 font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Done!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q0: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
    };
  },
  methods: {
    doneTapped: async function () {
      this.$nuxt.$loading.start();
      var headers = {};
      if (process.browser) {
        let userID = localStorage.getItem("userID");
        if (userID) {
          headers.userID = userID;
        }
      }
      const body = {
        survey: {
          q0: this.q0,
          q1: this.q1,
          q2: this.q2,
          q3: this.q3,
          q4: this.q4,
          q5: this.q5,
          q6: this.q6,
          q7: this.q7,
          q8: this.q8,
        },
      };
      await this.$axios
        .post("/update-survey", body, {
          withCredentials: true,
          headers: headers,
        })
        .then((res) => {
          this.$nuxt.$loading.finish();
          if (res.status === 200) {
            this.$store.commit("reset");
            if (
              localStorage.getItem("PROLIFIC_PID") &&
              localStorage.getItem("STUDY_ID") &&
              localStorage.getItem("SESSION_ID")
            ) {
              window.location =
                "https://app.prolific.co/submissions/complete?cc=1A9A441A";
            } else {
              window.location = "https://moviethesis.com";
            }
          }
        });
    },
  },
};
</script>
