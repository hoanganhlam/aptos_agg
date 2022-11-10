<template>
  <div>
    <div class="px-4 max-w-6xl mx-auto">
      <h2 class="text-5xl my-6 md:my-10 text-center">The Best NFT Aggregator for APTOS</h2>
      <div class="space-y-6">
        <div class="flex justify-between">
          <div class="flex gap-4">
            <div class="rounded-full cursor-pointer py-2 px-6 bg-[#E17A2D] text-white font-semibold w-32 text-bold">
              Trending
            </div>
            <div
                class="rounded-full cursor-pointer py-2 px-6 bg-gray-100 font-semibold text-bold flex justify-center gap-2">
              <icon name="gallery"/>
              <span>Sweeps</span>
            </div>
            <div
                class="rounded-full cursor-pointer py-2 px-6 bg-gray-100 font-semibold text-bold flex justify-center gap-2">
              <icon name="star"/>
              <span>Favourite</span>
            </div>
            <div class="flex items-center py-2 pl-6 pr-3 border rounded-full gap-2">
              <input type="text" class=" outline-none" placeholder="Search collections and wallets...">
              <icon name="search"/>
            </div>
          </div>
          <div class="flex gap-4">
            <div
                v-for="item in dateRanges" :key="item"
                class="rounded-full cursor-pointer py-2 px-4 bg-gray-100 font-semibold text-bold flex justify-center gap-2"
            >
              <span>{{ item }}</span>
            </div>
            <div
                class="rounded-full cursor-pointer py-2 px-4 bg-gray-100 font-semibold text-bold flex justify-center gap-2"
            >
              <icon name="refresh"></icon>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">Collection</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">24h volume</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">24h</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Floor Price</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Owners</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">Supply</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">Lindsay Walton</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">Front-end Developer</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">lindsay.walton@example.com</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">Member</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">Member</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoveryPage",
  data() {
    return {
      dateRanges: ["24h", "1d", "30D"]
    }
  },
  async fetch() {
    const res = await this.$axios.$get('https://api.aptosgem.xyz/getCollections')
  }
}
</script>

<style scoped>

</style>
