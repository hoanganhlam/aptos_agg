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
                v-if="false"
                class="rounded-full cursor-pointer py-2 px-6 bg-gray-100 font-semibold text-bold flex justify-center gap-2">
              <icon name="gallery"/>
              <span>Sweeps</span>
            </div>
            <div
                v-if="false"
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
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Rank</th>
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
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ index + 1 }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                    <div class="flex gap-3 items-center">
                      <div class="w-8 h-8">
                        <img v-if="item.logo_uri" :src="item.logo_uri" alt="">
                      </div>
                      <nuxt-link :to="`/collection/${item.collection_id}`">{{ item.name }}</nuxt-link>
                    </div>
                  </td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ priceWei(item.volume_24) }}</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ priceWei(item.total_volume) }}</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ priceWei(item.floor) }}</td>
                  <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ pretty_num(item.num_unique_owners) }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                    {{pretty_num(item.num_tokens)}}
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

    const pretty_url = (url)  => {
      if (!url) return '_'
      const ipfs_gw = this.ipfs_gateway[Math.floor(Math.random()*this.ipfs_gateway.length)];
      return url.replace('ipfs://', ipfs_gw).replace('https://nftstorage.link/ipfs/', ipfs_gw)
    }

    const collection_set = await this.$axios.$get('https://api.aptosgem.xyz/getCollections').then(res => res.data)
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
    console.log('done', this.querySet);
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
