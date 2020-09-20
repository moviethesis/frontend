<template>
  <div class="mb-20">
    <div class="mt-10 mx-auto md:text-xl max-w-md md:max-w-4xl">
      <h2 class="text-gray-200 text-2xl font-black">Survey</h2>

      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Recommendation engine
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Rate the recommendation engine
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <fieldset>
              <legend class="text-base leading-6 font-medium text-gray-900">
                How interested are you in watching the films recommended to you?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not interested</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very interested</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                Do you trust the recommendations given to you?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very much</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                How would you rate the quality of the recommendations?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, very bad</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very good</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                How transparent did you think the recommendation engine was
                about how it got its results and its use of your personal data?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not transparent at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very transparent</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                How much in control of your data did you think you were?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not in control at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very much in control</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Privacy and data
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Tell us a bit about your thoughts on privacy
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <fieldset>
              <legend class="text-base leading-6 font-medium text-gray-900">
                How interested are you in watching the films recommended to you?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not interested</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very interested</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                Do you trust the recommendations given to you?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very much</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                How would you rate the quality of the recommendations?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, very bad</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very good</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                How transparent did you think the recommendation engine was
                about how it got its results and its use of your personal data?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not transparent at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very transparent</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-10">
              <legend class="text-base leading-6 font-medium text-gray-900">
                How much in control of your data did you think you were?
              </legend>
              <div class="mt-2">
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >1, not in control at all</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >2</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >3</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >4</span
                    >
                  </label>
                </div>
                <div class="flex items-center mt-1">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label for="push_everything" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700"
                      >5, very much in control</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="text-center max-w-full mt-6">
        <h2 class="text-gray-200 text-2xl font-black">
          THANK YOU FOR YOUR PARTICIPATION AND HELP!
        </h2>
        <p class="text-gray-400 text-sm">please click done below</p>
        <div class="block w-auto">
          <button
            @click="doneTapped"
            class="mt-2 shadow-xl items-center px-12 py-4 border border-transparent text-base leading-6 font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Done!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
