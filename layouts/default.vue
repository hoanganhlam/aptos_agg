<template>
  <div>
    <div class="min-h-screen">
      <p-header :dark="dark"/>
      <div class="content-wrapper">
        <div class="main-wrapper">
          <div class="flex-1">
            <nuxt/>
          </div>
        </div>
      </div>
      <adapter/>
    </div>
    <div class="bg-[#111827] py-12 text-white">
      <div class="max-w-6xl px-6 mx-auto grid md:grid-cols-3 gap-6">
        <div class="space-y-4">
          <img class="w-60" src="/logo_light.png" alt="">
        </div>
        <div class="space-y-4">
          <div class="font-bold">Quick links</div>
          <div class="grid grid-cols-2">
            <div class="space-y-2">
              <div>Collection</div>
              <div>Swap</div>
              <div>NFT staking</div>
              <div>NFT Collateral</div>
              <div>Portfolio</div>
            </div>
            <div class="space-y-2">
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="font-bold">Stay in the loop</div>
          <p class="text-sm">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Adapter from "../components/Modal/Adapter";
import PHeader from "../components/Header";

export default {
  name: "LayoutDefault",
  components: {PHeader, Adapter},
  head() {
    return {
      title: "APTOS_BASE",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          property: 'og:title',
          hid: 'og:title',
          name: 'og:title',
          content: '',
        },
        {
          property: 'og:description',
          hid: 'og:description',
          name: 'og:description',
          content: '',
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;600;700&display=swap"
        }
      ],
    }
  },
  data() {
    return {
      dark: true
    }
  },
  methods: {
    switch() {
      if (this.dark) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }
  },
  watch: {
    dark() {
      this.switch()
    }
  },
  mounted() {
    this.switch()
  }
}
</script>

<style>
main {
  min-height: calc(100vh - 98px);
}
</style>
