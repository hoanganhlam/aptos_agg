<template>
  <div id="main" class="relative">
    <div class="absolute inset-0">
      <div class="max-w-6xl mx-auto py-16">
        <div class="flex justify-center">
          <nuxt-link to="/discovery" class="flex items-end">
            <div>
              <img src="/home/swap/line.png" alt="">
            </div>
            <div>
              <img src="/home/swap/thumb.png" alt="">
            </div>
          </nuxt-link>
        </div>
        <div class="md:flex justify-between">
          <nuxt-link to="/discovery" class="flex items-end">
            <div>
              <img src="/home/lending/thumb.png" alt="">
            </div>
            <div>
              <img src="/home/lending/line.png" alt="">
            </div>
          </nuxt-link>
          <nuxt-link to="/discovery" class="flex items-end">
            <div>
              <img src="/home/staking/line.png" alt="">
            </div>
            <div>
              <img src="/home/staking/thumb.png" alt="">
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage"
}
</script>

<style>
.bg-linear {
  background: linear-gradient(180deg, #08135C 0%, #111827 100%);
}

#main {
  background-image: url("/bg.png");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
