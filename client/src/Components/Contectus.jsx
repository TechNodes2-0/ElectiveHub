import React from "react";

export default function Contectus() {
  return (
    <div class="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form class="w-full max-w-lg bg-gray-900">
        <h1 class="text-3xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-900 text-white placeholder-white border border-white focus:border-blue-300 rounded py-3 px-4 mb-3 leading-tight "
              id="grid-first-name"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-900 text-white placeholder-white border border-gray-200 rounded py-3 px-4 leading-tight  focus:border-blue-500"
              id="grid-last-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-900 text-white placeholder-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight "
              id="email"
              type="email"
            />
            <p class="text-gray-400 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              class="no-resize appearance-none block w-full bg-gray-900 text-white placeholder-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  h-48 resize-none"
              id="message"
            ></textarea>
            <p class="text-gray-400 text-xs italic">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Send
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}
