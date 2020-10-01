<template>
  <div class="mb-20">
    <div class="mt-10 mx-auto md:text-xl max-w-md md:max-w-5xl">
      <h2 class="text-gray-200 text-2xl font-black">Survey</h2>

      <div
        class="p-4 mt-10 md:col-span-2 overflow-x-auto bg-white rounded-md sm:rounded-lg"
        v-bind:class="{ 'border-red-600 border-4': showFillOutSurveyWarning }"
      >
        <p class="text-sm font-bold leading-5 text-gray-900">
          How much do you agree with the following statements?
        </p>
        <div class="mt-4">
          <table class="min-w-full table-fixed text-center">
            <thead class="">
              <tr class="border-b-2 border-gray-400">
                <th
                  class="w-1/6 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                ></th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Neither Agree or Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Agree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Agree
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis provides valuable recommendations to me
                  {{ q0 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q0.1"
                    name="q0"
                    type="radio"
                    value="1"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q0.2"
                    name="q0"
                    type="radio"
                    value="2"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q0.3"
                    name="q0"
                    type="radio"
                    value="3"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q0.4"
                    name="q0"
                    type="radio"
                    value="4"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q0.5"
                    name="q0"
                    type="radio"
                    value="5"
                    v-model="q0"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400 bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis provides relevant recommendations to me
                  {{ q1 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q1.1"
                    name="q1"
                    type="radio"
                    value="1"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q1.2"
                    name="q1"
                    type="radio"
                    value="2"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q1.3"
                    name="q1"
                    type="radio"
                    value="3"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q1.4"
                    name="q1"
                    type="radio"
                    value="4"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q1.5"
                    name="q1"
                    type="radio"
                    value="5"
                    v-model="q1"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  The recommendations from Moviethesis are very trustworthy
                  {{ q2 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q2.1"
                    name="q2"
                    type="radio"
                    value="1"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q2.2"
                    name="q2"
                    type="radio"
                    value="2"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q2.3"
                    name="q2"
                    type="radio"
                    value="3"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q2.4"
                    name="q2"
                    type="radio"
                    value="4"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q2.5"
                    name="q2"
                    type="radio"
                    value="5"
                    v-model="q2"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis saves me time {{ q3 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q3.1"
                    name="q3"
                    type="radio"
                    value="1"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q3.2"
                    name="q3"
                    type="radio"
                    value="2"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q3.3"
                    name="q3"
                    type="radio"
                    value="3"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q3.4"
                    name="q3"
                    type="radio"
                    value="4"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q3.5"
                    name="q3"
                    type="radio"
                    value="5"
                    v-model="q3"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="p-4 mt-10 md:col-span-2 overflow-x-auto bg-white rounded-md sm:rounded-lg"
        v-bind:class="{ 'border-red-600 border-4': showFillOutSurveyWarning }"
      >
        <p class="text-sm font-bold leading-5 text-gray-900">
          How much do you agree with the following statements?
        </p>
        <div class="mt-4">
          <table class="min-w-full table-fixed text-center">
            <thead class="">
              <tr class="border-b-2 border-gray-400">
                <th
                  class="w-1/6 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                ></th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Neither Agree or Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Agree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Agree
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis can be relied on to keep its promises {{ q4 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q4.1"
                    name="q4"
                    type="radio"
                    value="1"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q4.2"
                    name="q4"
                    type="radio"
                    value="2"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q4.3"
                    name="q4"
                    type="radio"
                    value="3"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q4.4"
                    name="q4"
                    type="radio"
                    value="4"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q4.5"
                    name="q4"
                    type="radio"
                    value="5"
                    v-model="q4"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400 bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis usually keeps the promises that it makes to me
                  {{ q5 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q5.1"
                    name="q5"
                    type="radio"
                    value="1"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q5.2"
                    name="q5"
                    type="radio"
                    value="2"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q5.3"
                    name="q5"
                    type="radio"
                    value="3"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q5.4"
                    name="q5"
                    type="radio"
                    value="4"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q5.5"
                    name="q5"
                    type="radio"
                    value="5"
                    v-model="q5"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  I can count on Moviethesis to provide a good service
                  {{ q6 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q6.1"
                    name="q6"
                    type="radio"
                    value="1"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q6.2"
                    name="q6"
                    type="radio"
                    value="2"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q6.3"
                    name="q6"
                    type="radio"
                    value="3"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q6.4"
                    name="q6"
                    type="radio"
                    value="4"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q6.5"
                    name="q6"
                    type="radio"
                    value="5"
                    v-model="q6"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400 bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis seems to be very knowledgeable about the movies it
                  shows me {{ q7 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q7.1"
                    name="q7"
                    type="radio"
                    value="1"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q7.2"
                    name="q7"
                    type="radio"
                    value="2"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q7.3"
                    name="q7"
                    type="radio"
                    value="3"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q7.4"
                    name="q7"
                    type="radio"
                    value="4"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q7.5"
                    name="q7"
                    type="radio"
                    value="5"
                    v-model="q7"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  Moviethesis seems to be able to understand my preferences for
                  this product {{ q8 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q8.1"
                    name="q8"
                    type="radio"
                    value="1"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q8.2"
                    name="q8"
                    type="radio"
                    value="2"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q8.3"
                    name="q8"
                    type="radio"
                    value="3"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q8.4"
                    name="q8"
                    type="radio"
                    value="4"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q8.5"
                    name="q8"
                    type="radio"
                    value="5"
                    v-model="q8"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  I can rely on Moviethesis for my decision on which movies to
                  watch {{ q9 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q9.1"
                    name="q9"
                    type="radio"
                    value="1"
                    v-model="q9"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q9.2"
                    name="q9"
                    type="radio"
                    value="2"
                    v-model="q9"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q9.3"
                    name="q9"
                    type="radio"
                    value="3"
                    v-model="q9"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q9.4"
                    name="q9"
                    type="radio"
                    value="4"
                    v-model="q9"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q9.5"
                    name="q9"
                    type="radio"
                    value="5"
                    v-model="q9"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="p-4 mt-10 md:col-span-2 overflow-x-auto bg-white rounded-md sm:rounded-lg"
        v-bind:class="{ 'border-red-600 border-4': showFillOutSurveyWarning }"
      >
        <p class="text-sm font-bold leading-5 text-gray-900">
          How much do you agree with the following statements?
        </p>
        <div class="mt-4">
          <table class="min-w-full table-fixed text-center">
            <thead class="">
              <tr class="border-b-2 border-gray-400">
                <th
                  class="w-1/6 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                ></th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Neither Agree or Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Agree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Agree
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  It bothers me that the firm is able to track information about
                  me {{ q10 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q10.1"
                    name="q10"
                    type="radio"
                    value="1"
                    v-model="q10"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q10.2"
                    name="q10"
                    type="radio"
                    value="2"
                    v-model="q10"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q10.3"
                    name="q10"
                    type="radio"
                    value="3"
                    v-model="q10"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q10.4"
                    name="q10"
                    type="radio"
                    value="4"
                    v-model="q10"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q10.5"
                    name="q10"
                    type="radio"
                    value="5"
                    v-model="q10"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400 bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  I am concerned that the firm has too much information about me
                  {{ q11 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q11.1"
                    name="q11"
                    type="radio"
                    value="1"
                    v-model="q11"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q11.2"
                    name="q11"
                    type="radio"
                    value="2"
                    v-model="q11"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q11.3"
                    name="q11"
                    type="radio"
                    value="3"
                    v-model="q11"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q11.4"
                    name="q11"
                    type="radio"
                    value="4"
                    v-model="q11"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q11.5"
                    name="q11"
                    type="radio"
                    value="5"
                    v-model="q11"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  It bothers me that the firm is able to access information
                  about me {{ q12 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q12.1"
                    name="q12"
                    type="radio"
                    value="1"
                    v-model="q12"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q12.2"
                    name="q12"
                    type="radio"
                    value="2"
                    v-model="q12"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q12.3"
                    name="q12"
                    type="radio"
                    value="3"
                    v-model="q12"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q12.4"
                    name="q12"
                    type="radio"
                    value="4"
                    v-model="q12"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q12.5"
                    name="q12"
                    type="radio"
                    value="5"
                    v-model="q12"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  I am concerned that my information could be used in ways I
                  could not foresee {{ q13 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q13.1"
                    name="q13"
                    type="radio"
                    value="1"
                    v-model="q13"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q13.2"
                    name="q13"
                    type="radio"
                    value="2"
                    v-model="q13"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q13.3"
                    name="q13"
                    type="radio"
                    value="3"
                    v-model="q13"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q13.4"
                    name="q13"
                    type="radio"
                    value="4"
                    v-model="q13"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q13.5"
                    name="q13"
                    type="radio"
                    value="5"
                    v-model="q13"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="p-4 mt-10 md:col-span-2 overflow-x-auto bg-white rounded-md sm:rounded-lg"
        v-bind:class="{ 'border-red-600 border-4': showFillOutSurveyWarning }"
      >
        <p class="text-sm font-bold leading-5 text-gray-900">
          How much do you agree with the following statements?
        </p>
        <div class="mt-4">
          <table class="min-w-full table-fixed text-center">
            <thead class="">
              <tr class="border-b-2 border-gray-400">
                <th
                  class="w-1/6 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                ></th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Neither Agree or Disagree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Agree
                </th>
                <th
                  class="w-1/12 px-6 py-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
                >
                  Strongly Agree
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="border-b-2 border-gray-400">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  I felt like I was in full control of my personal data
                  {{ q14 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q14.1"
                    name="q14"
                    type="radio"
                    value="1"
                    v-model="q14"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q14.2"
                    name="q14"
                    type="radio"
                    value="2"
                    v-model="q14"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q14.3"
                    name="q14"
                    type="radio"
                    value="3"
                    v-model="q14"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q14.4"
                    name="q14"
                    type="radio"
                    value="4"
                    v-model="q14"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q14.5"
                    name="q14"
                    type="radio"
                    value="5"
                    v-model="q14"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="border-b-2 border-gray-400 bg-gray-100">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  I felt like Moviethesis was very transparent about how it got
                  its results and its use of my personal data
                  {{ q15 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q15.1"
                    name="q15"
                    type="radio"
                    value="1"
                    v-model="q15"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q15.2"
                    name="q15"
                    type="radio"
                    value="2"
                    v-model="q15"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q15.3"
                    name="q15"
                    type="radio"
                    value="3"
                    v-model="q15"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q15.4"
                    name="q15"
                    type="radio"
                    value="4"
                    v-model="q15"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q15.5"
                    name="q15"
                    type="radio"
                    value="5"
                    v-model="q15"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>

              <tr class="">
                <td
                  class="border-r-2 border-gray-400 px-6 py-4 text-xs leading-5 font-medium text-gray-700"
                >
                  It's important that you pay attention to this study. Please
                  tick 'STRONGLY AGREE'!
                  {{ q16 }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q16.1"
                    name="q16"
                    type="radio"
                    value="1"
                    v-model="q16"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q16.2"
                    name="q16"
                    type="radio"
                    value="2"
                    v-model="q16"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q16.3"
                    name="q16"
                    type="radio"
                    value="3"
                    v-model="q16"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q16.4"
                    name="q16"
                    type="radio"
                    value="4"
                    v-model="q16"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <input
                    id="q16.5"
                    name="q16"
                    type="radio"
                    value="5"
                    v-model="q16"
                    class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="bg-white shadow mt-10 px-4 py-5 rounded-lg sm:p-6 transition duration-150 ease-in-out"
        v-bind:class="{ 'border-red-600 border-4': showFillOutProfileWarning }"
      >
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Please enter your personal information
            </p>
            <div v-if="showFillOutProfileWarning">
              <p class="mt-1 text-sm leading-5 text-red-600">
                Please fill out data!
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
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

              <div class="col-span-6 sm:col-span-3">
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

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="age"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Age</label
                >
                <input
                  id="age"
                  v-model="age"
                  type="number"
                  min="0"
                  name="age"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  required
                />
              </div>

              <div class="col-span-6">
                <label
                  for="education"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Education level</label
                >
                <p class="text-sm text-gray-600" id="email-description">
                  Which of the following best describes your highest achieved
                  education level?
                </p>
                <select
                  id="education"
                  v-model="education"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  required
                >
                  <option>No schooling completed</option>
                  <option>Elementary school</option>
                  <option>Trade or technical school</option>
                  <option>High school</option>
                  <option>Associates degree</option>
                  <option>Bachelor's degree</option>
                  <option>Master's degree</option>
                  <option>Ph.D. or higher</option>
                </select>
              </div>

              <div class="col-span-6">
                <label
                  for="work"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Employment status</label
                >
                <p class="text-sm text-gray-600" id="email-description">
                  Which of the following best describes your employment status?
                </p>
                <select
                  id="work"
                  v-model="work"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  required
                >
                  <option>Employed full time</option>
                  <option>Employed part time</option>
                  <option>Unemployed (currently looking for job)</option>
                  <option>Unemployed (not currently looking for job)</option>
                  <option>Student</option>
                  <option>Retired</option>
                  <option>Self employed</option>
                  <option>Unable to work</option>
                </select>
              </div>

              <div class="col-span-6">
                <label
                  for="techknow"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Technical knowhow</label
                >
                <p class="text-sm text-gray-600" id="email-description">
                  How would you judge your knowledge of the technical aspects
                  that make the Internet work?
                </p>
                <select
                  id="techknow"
                  v-model="techknow"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  required
                >
                  <option>I don't know any technical details</option>
                  <option>I have a vague idea of the technical details</option>
                  <option>I have a good idea of the technical details</option>
                  <option>I am very knowledgeable</option>
                  <option>I am an expert</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <h2 class="text-gray-400 text-2xl">please click done below</h2>
        <div class>
          <button
            @click="doneTapped"
            class="mt-6 shadow-xl items-center px-12 py-4 border border-transparent text-base leading-6 font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Done!
          </button>
          <div v-if="showFillOutProfileWarning">
            <p class="mt-2 text-xl leading-5 text-red-600">
              Please fill out your personal information!
            </p>
          </div>
          <div v-if="showFillOutSurveyWarning">
            <p class="mt-2 text-xl leading-5 text-red-600">
              Please answer all survey questions!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "../plugins/countries.js";

export default {
  data() {
    return {
      showFillOutProfileWarning: false,
      showFillOutSurveyWarning: false,
      q0: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      q10: "",
      q11: "",
      q12: "",
      q13: "",
      q14: "",
      q15: "",
      q16: "",
    };
  },
  computed: {
    countriesList() {
      return countries;
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
    education: {
      get() {
        return this.$store.state.user.education;
      },
      set(value) {
        this.$store.commit("setUserEducation", value);
      },
    },
    work: {
      get() {
        return this.$store.state.user.work;
      },
      set(value) {
        this.$store.commit("setUserWork", value);
      },
    },
    techknow: {
      get() {
        return this.$store.state.user.techknow;
      },
      set(value) {
        this.$store.commit("setUserTechknow", value);
      },
    },
  },
  methods: {
    doneTapped: async function () {
      if (
        this.$store.state.user.country === "NaN" ||
        this.$store.state.user.gender === "NaN" ||
        this.$store.state.user.education === "NaN" ||
        this.$store.state.user.work === "NaN" ||
        this.$store.state.user.techknow === "NaN" ||
        this.$store.state.user.age === 0
      ) {
        this.showFillOutProfileWarning = true;
        return;
      } else {
        this.showFillOutProfileWarning = false;
      }
      if (
        this.q0 === "" ||
        this.q1 === "" ||
        this.q2 === "" ||
        this.q3 === "" ||
        this.q4 === "" ||
        this.q5 === "" ||
        this.q6 === "" ||
        this.q7 === "" ||
        this.q8 === "" ||
        this.q9 === "" ||
        this.q10 === "" ||
        this.q11 === "" ||
        this.q12 === "" ||
        this.q13 === "" ||
        this.q14 === "" ||
        this.q15 === "" ||
        this.q16 === ""
      ) {
        this.showFillOutSurveyWarning = true;
        return;
      } else {
        this.showFillOutSurveyWarning = false;
      }
      this.$nuxt.$loading.start();
      var headers = {};
      if (process.browser) {
        let userID = localStorage.getItem("userID");
        if (userID) {
          headers.userID = userID;
        }
      }
      const body = this.$store.state.user;
      body.survey = {
        q0: this.q0,
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
        q4: this.q4,
        q5: this.q5,
        q6: this.q6,
        q7: this.q7,
        q8: this.q8,
        q9: this.q9,
        q10: this.q10,
        q11: this.q11,
        q12: this.q12,
        q13: this.q13,
        q14: this.q14,
        q15: this.q15,
        q16: this.q16,
      };
      await this.$axios
        .post("/update", body, {
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
              this.$router.push({
                path: "/thanks",
              });
            }
          }
        });
    },
  },
  async fetch({ store }) {
    await store.dispatch("loadUser");
  },
};
</script>