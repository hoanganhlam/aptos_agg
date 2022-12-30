<template>
  <div class="bg-[#F1F1F1]">
    <div
        class="h-[258px] h-full flex flex-col items-center justify-center space-y-3 text-white"
        style="background-image: url('/bg.png')">
      <h1 class="text-6xl">
        <img src="/sswap.png" alt="">
      </h1>
      <p>The most robust and fastest NFT aggregator on multi-chain</p>
    </div>
    <div class="px-4 max-w-6xl mx-auto">
      <div class="py-16 space-y-4">
        <div class="flex items-center gap-2 text-[#0E224A] text-lg font-bold">
          <img src="/icon-later.png" class="w-4 h-4" alt="">
          <span>The latest NFT collections</span>
        </div>
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg" v-for="i in 3" :key="i">
            <div class="flex gap-4">
              <div class="flex-1">
                <img class="w-full" src="/s4/1.png" alt="">
              </div>
              <div class="w-1/4 space-y-4">
                <div v-for="i in 3" :key="i">
                  <img class="w-full" src="/s4/2.png" alt="">
                </div>
              </div>
            </div>
            <h4 class="mt-6 mb-4 font-bold text-lg">Amazing Collection</h4>
            <div class="flex gap-3">
              <div class="w-8 h-8">
                <img src="/avatar.png" alt="">
              </div>
              <div class="flex-1">
                <p>by Arkhan</p>
              </div>
              <div>
                <div
                    class="flex px-6 py-2 rounded-full border border-[#2D398D] text-[#2D398D] duration-200 cursor-pointer">
                  Total 54 Items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-16 space-y-4">
        <div class="flex justify-between">
          <div class="flex gap-4">
            <div class="rounded-full cursor-pointer py-2 px-6 bg-[#E17A2D] text-white font-semibold w-32 text-bold">
              Trending
            </div>
          </div>
          <div class="flex gap-4 text-[#111827]">
            <div
                v-for="item in dateRanges" :key="item"
                class="rounded-full bg-[#DCDCDC] cursor-pointer py-2 px-4 font-semibold text-bold flex justify-center gap-2"
            >
              <span>{{ item }}</span>
            </div>
            <div
                class="rounded-full bg-[#DCDCDC] cursor-pointer py-2 px-4 font-semibold text-bold flex justify-center gap-2"
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
                  <th scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">Collection
                  </th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">24h volume</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Total Volume</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Floor Price</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Owners</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">Supply</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                <tr v-for="(item,index) in querySet" :key="item.collection_id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                    <div class="flex gap-3 items-center">
                      <div class="w-8 h-8">
                        <img v-if="item.logo_uri" :src="item.logo_uri" alt="">
                      </div>
                      <nuxt-link :to="`/collection/${item.collection_id}`">{{ item.name }}</nuxt-link>
                    </div>
                  </td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500 flex gap-2 items-center">
                    <img src="/apt-icon.png" class="w-4 h-4" alt="">
                    <span>{{ priceWei(item.volume_24) }}</span>
                  </td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-[#00AC4F]">{{ priceWei(item.total_volume) }}</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500 flex gap-2 items-center">
                    <img src="/apt-icon.png" class="w-4 h-4" alt="">
                    <span>{{ priceWei(item.floor) }}</span>
                  </td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{
                      pretty_num(item.num_unique_owners)
                    }}
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                    {{ pretty_num(item.num_tokens) }}
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
      dateRanges: ["24h", "1d", "30D"],
      querySet: [],
      ipfs_gateway: ['https://ipfs.io/ipfs/', 'https://dweb.link/ipfs/', 'https://cloudflare-ipfs.com/ipfs/', 'https://gateway.pinata.cloud/ipfs/', 'https://gateway.ipfs.io/ipfs/']
    }
  },
  async fetch() {

    const pretty_url = (url) => {
      if (!url) return '_'
      const ipfs_gw = this.ipfs_gateway[Math.floor(Math.random() * this.ipfs_gateway.length)];
      return url.replace('ipfs://', ipfs_gw).replace('https://nftstorage.link/ipfs/', ipfs_gw)
    }

    const collection_set = await this.$axios.$get('https://gemmerge.pvnt.repl.co/getCollections').then(res => res.data)
    this.querySet = collection_set;
    const res = await Promise.allSettled(
        collection_set.map(x => {
          return this.$axios.$get(pretty_url(x.uri), {timeout: 3000})
        })
    )

    this.querySet = collection_set.map((x, i) => {
      if (!res[i].reason && !x.logo_uri) {
        x.logo_uri = pretty_url(res[i].value.image)
      }
      return x
    })
  },
  methods: {
    priceWei(str) {
      return str ? Number.parseFloat((Number.parseInt(str) / Math.pow(10, 8)).toFixed(4)).toLocaleString() : "_"
    },
    pretty_num(num) {
      return num ? num.toLocaleString() : "_"
    }
  }
}
</script>

<style scoped>

</style>
