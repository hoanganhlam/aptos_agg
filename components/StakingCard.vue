<template>
  <div class="rounded-[10px] bg-white overflow-hidden border border-gray-800">
    <div class="relative">
      <div class="absolute top-0 right-0 left-0 p-4 flex justify-between items-center">
        <div class="bg-[#F85D50] text-center px-4 text-xs rounded-full">Single pool</div>
        <div class="flex gap-3">
          <div class="bg-[#252525] rounded-full cursor-pointer p-1">
            <icon name="twitter" vb="23" class="fill-white"/>
          </div>
          <div class="bg-[#252525] rounded-full cursor-pointer p-1">
            <icon name="discord" vb="24" class="fill-white"/>
          </div>
          <div class="bg-[#252525] rounded-full cursor-pointer p-1">
            <icon name="web" vb="22" class="fill-white"/>
          </div>
        </div>
      </div>
      <img src="/staking-card-bg.png" alt="">
    </div>
    <div class="-mt-10 px-4 pb-4">
      <div>
        <div class="w-20 h-20 mx-auto rounded-full bg-white relative z-10">
          <img src="/staking-monkeys.png" alt="">
        </div>
      </div>
      <div class="mb-8 text-center text-xl font-bold">Aptos Monkeys</div>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>Staking APY:</div>
          <div class="flex font-bold">
            <span class="text-[#00DA64]">110.25%</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>Total NFT Staked:</div>
          <div class="flex font-bold">
            <span>203</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>Your NFT Staked:</div>
          <div class="flex font-bold">
            <span>1</span>
          </div>
        </div>
        <div class="bg-[#E9E9E9] rounded-[10px] p-4 flex items-end justify-between">
          <div class="space-y-2">
            <div>Earned</div>
            <div class="font-bold">40 APT</div>
            <div>~$0</div>
          </div>
          <div>
            <div class="rounded bg-[#808080] cursor-pointer py-1 text-white p-2">Claim</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="flex items-center justify-center gap-2 text-white fill-white rainbow-button rounded-full p-2 px-4">
            <span>Stake NFT</span>
          </div>
          <div class="flex items-center justify-center gap-2 text-white fill-white bg-[#F85D50] rounded-full p-2 px-4">
            <span>Unstake NFT</span>
          </div>
        </div>
        <p class="text-[#808080] text-center">Ends in: 21d 4h 55m 23s</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StakingCard"
}
</script>

<style scoped>

</style>
