<template>
  <div>
    <div
        class="w-[300px] fixed top-[80px] bottom-0 right-0 flex min-h-screen flex-col overflow-y-scroll border-l-2
          border-gray-200 bg-white px-4 pb-48 text-sm dark:border-stone-700 dark:bg-stone-800"
    >
      <div class="flex flex-row items-center gap-2 border-b-2 border-gray-200 py-2 dark:border-stone-700">
        <div class="flex flex-row items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
              class="h-6 w-6">
            <path
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z">
            </path>
          </svg>
          My Cart
        </div>
        <div class="grow">

        </div>
        <a class="flex flex-row items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-opacity-60 px-4 py-2 text-sm
            text-black hover:bg-gray-200 dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600 false bg-gray-200"
           href="#" rel="noreferrer noopener" target=""
        >
          Close
        </a>
      </div>

      <div class="py-8 px-4 text-center text-gray-500 dark:text-stone-500">Your Topaz cart is empty. Fill it with NFTs
        and start collecting!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  name: "ShoppingCard"
})
export default class ShoppingCard extends Vue {
  private textSearch: string = '';

}
</script>

<style scoped>

</style>
