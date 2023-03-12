<template>
  <div class="bg-[#F1F1F1]">
    <div class="max-w-6xl mx-auto space-y-16 py-16">
      <div class="text-center space-y-8">
        <div class="text-4xl italic">All NFTs,</div>
        <img class="w-1/2 mx-auto" src="/home/Assemble!.png" alt="">
        <div class="flex justify-center gap-5">
          <div class="inline-flex px-6 py-2 items-center gap-2 bg-white rounded-full cursor-pointer">
            <img class="w-5 h-5" src="/home/icons8_1.svg" alt="">
            <span>Advanced tools</span>
          </div>
          <div class="inline-flex px-6 py-2 items-center gap-2 bg-white rounded-full cursor-pointer">
            <img class="w-5 h-5" src="/home/icons8_2.svg" alt="">
            <span>Better rates</span>
          </div>
          <div class="inline-flex px-6 py-2 items-center gap-2 bg-white rounded-full cursor-pointer">
            <img class="w-5 h-5" src="/home/icons8_3.svg" alt="">
            <span>Faster trades</span>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <div
            v-for="index in 5" :key="index"
            class="rounded-[10px] border-gradient w-1/5"
        >
          <div class="rounded-[8px] bg-white p-2 space-y-3 cursor-pointer">
            <img class="rounded-[10px]" src="/home/sample.png" alt="">
            <div class="flex gap-3 items-center">
              <div class="w-8 h-8"><img src="/avatar.png" alt="">
              </div>
              <div class="flex-1"><p>CryptoFunks</p></div>
            </div>
            <h4 class="text-xl font-bold">Art Crypto</h4>
            <div class="flex justify-between font-bold">
              <div class="flex items-center text-green-400 gap-2">
                <img src="/apt-icon.png" alt="" class="w-4 h-4"><span>279.189</span>
              </div>
              <div class="p-4 py-1 flex items-center gap-2 rounded-full cursor-pointer bg-[#FFCA28] text-xs uppercase">
                <icon vb="23" name="buy"/>
                <span>Buy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-8">
        <div class="grid grid-cols-4 gap-8">
          <div class="p-6 flex gap-4 bg-white rounded-xl items-center">
            <div class="w-10 h-10">
              <icon name="staking-total" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
            </div>
            <div>
              <div class="text-xl font-bold">1,677,527</div>
              <div>Total NFT Asset</div>
            </div>
          </div>
          <div class="p-6 flex gap-4 bg-white rounded-xl items-center">
            <div class="w-10 h-10">
              <icon name="staking-staked" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
            </div>
            <div>
              <div class="text-xl font-bold">104.49K APT</div>
              <div>Total NFT Market Cap</div>
            </div>
          </div>
          <div class="p-6 flex gap-4 bg-white rounded-xl items-center">
            <div class="w-10 h-10">
              <icon name="staking-tvl" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
            </div>
            <div>
              <div class="text-xl font-bold">2,849.57 APT</div>
              <div>Volume 24H</div>
            </div>
          </div>
          <div class="p-6 flex gap-4 bg-white rounded-xl items-center">
            <div class="w-10 h-10">
              <icon name="gallery2" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
            </div>
            <div>
              <div class="text-xl font-bold">14,007</div>
              <div>Total Collection</div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-8">
          <div></div>
          <div class="p-6 flex gap-4 bg-white rounded-xl items-center">
            <div class="w-10 h-10">
              <icon name="hand" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
            </div>
            <div>
              <div class="text-xl font-bold">521,904</div>
              <div>Total Holders</div>
            </div>
          </div>
          <div class="p-6 flex gap-4 bg-white rounded-xl items-center">
            <div class="w-10 h-10">
              <icon name="buy2" class="xl w-10 h-10 fill-[#808080]" :vb="40"/>
            </div>
            <div>
              <div class="text-xl font-bold">442 / 457</div>
              <div>Buyers & Sellers 24H</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="grid grid-cols-2 rounded-[40px] shadow-xl bg-white overflow-hidden">
        <div class="p-8 space-y-7">
          <div v-for="i in 5" :key="i" class="flex gap-6 items-center">
            <div class="w-12 h-12 flex items-center justify-center bg-[#E9E9E9] rounded-full">
              <span>{{i + 1}}</span>
            </div>
            <div class="flex-1 border-gradient rounded-[10px] ">
              <div class="rounded-[8px] bg-white flex gap-4 p-2 items-center">
                <img class="rounded-full w-16 h-16" src="/home/sample.png" alt="">
                <div class="flex-1">
                  <div class="font-bold text-lg">Art Crypto</div>
                  <div class="flex gap-3 items-center">
                    <div class="w-4 h-4"><img src="/avatar.png" alt="">
                    </div>
                    <div class="flex-1 text-xs"><p>CryptoFunks</p></div>
                  </div>
                </div>
                <div>
                  <div class="text-xs">Volume</div>
                  <div class="text-lg text-green-400 font-bold">3.058 APT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-blur-bg flex justify-end flex-col gap-4 p-16">
          <img class="w-3/4" src="/home/hot-collections.png" alt="">
          <div class="flex gap-2 text-white">
            <span class="underline">View all</span>
            <span class="p-1 rounded-full bg-[#F85D50] fill-white"><icon class="sm" name="chevron-right"/></span>
          </div>
        </div>
      </div>
      <div class="rounded-[40px] shadow-xl bg-white overflow-hidden">
        <div class="p-8 bg-[#252525]">
          <img class="h-24 w-auto" src="/home/hot-staking-pools.png" alt="">
        </div>
        <div class="p-8">
          <div class="grid grid-cols-4 gap-6">
            <staking-card short v-for="i in 4" :key="i"/>
          </div>
        </div>
      </div>
      <div class="rounded-[40px] shadow-xl bg-white overflow-hidden flex p-16 gap-16">
        <div class="w-1/3">
          <img src="/home/stay-in-loop.png" alt="">
        </div>
        <div class="w-2/3 space-y-6">
          <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
          <div class="border-gradient rounded-full">
            <div class="bg-white rounded-full flex">
              <input type="text" class="bg-transparent flex-1 py-2 px-4 outline-none">
              <div class="flex items-center justify-center gap-2 text-white fill-white rainbow-button rounded-full p-2 px-4">
                <span>Subscibe Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StakingCard from "@/components/StakingCard";
export default {
  name: "index2",
  components: {StakingCard}
}
</script>

<style>
.border-gradient {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(92.7deg, #E53636 -5.56%, #AF4CDD 13.32%, #615EFE 37.92%, #84E399 59.09%, #FEDB60 82.55%, #FE6060 104.3%);
  padding: 2px;
}

.custom-blur-bg {
  background: url('/home/sample-2.png') no-repeat;
  background-size: cover;
}
</style>
