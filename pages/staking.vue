<template>
  <div class="bg-[#F1F1F1]">
    <div
        class="h-[258px] flex flex-col items-center justify-center"
        style="background-image: url('/staking-bg.svg')">
      <div class="max-w-6xl mx-auto grid grid-cols-4 gap-6 w-full">
        <div class="space-y-4">
          <h1>
            <img src="/staking-logo.svg" alt="">
          </h1>
          <div class="bg-[#F85D50] text-center py-0.5 rounded-full">Single pool</div>
        </div>
        <div class="p-8 py-10 flex gap-4 bg-white rounded-xl items-center">
          <div class="w-10 h-10">
            <icon name="staking-total" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
          </div>
          <div>
            <div class="text-2xl font-bold">11</div>
            <div>Total Collections</div>
          </div>
        </div>
        <div class="p-8 py-10 flex gap-4 bg-white rounded-xl items-center">
          <div class="w-10 h-10">
            <icon name="staking-staked" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
          </div>
          <div>
            <div class="text-2xl font-bold">3257</div>
            <div>Total NFTs Staked</div>
          </div>
        </div>
        <div class="p-8 py-10 flex gap-4 bg-white rounded-xl items-center">
          <div class="w-10 h-10">
            <icon name="staking-tvl" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
          </div>
          <div>
            <div class="text-2xl font-bold">$83,159.10</div>
            <div>TVL</div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-9">
      <div class="max-w-6xl mx-auto space-y-8">
        <div class="flex justify-between">
          <div class="flex gap-7 items-center">
            <div class="flex gap-2 text-white fill-white rainbow-button rounded-full p-2 px-4">
              <icon name="plus"/>
              <span>Create</span>
            </div>
            <div class="bg-white flex gap-2 p-2 px-6 rounded-full border pr-3">
              <input type="text" class="bg-transparent outline-none" placeholder="Search...">
              <icon name="search"/>
            </div>
          </div>
          <div class="flex gap-4 text-white items-center">
            <div
                v-for="item in filterStatus" :key="item"
                class="p-8 py-2 rounded-full cursor-pointer bg-[#808080]"
                :class="{'bg-[#00DA64]': item === currentStatus}"
                @click="currentStatus = item"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <staking-card v-for="i in 12" :key="i"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StakingCard from "@/components/StakingCard";
export default {
  name: "StakingPage",
  components: {StakingCard},
  data() {
    return {
      filterStatus: ["Live", "Finished", "Your Pools"],
      currentStatus: "Live"
    }
  }
}
</script>
