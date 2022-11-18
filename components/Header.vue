<template>
  <header>
    <div class="px-4 md:px-12 py-6 mx-auto flex gap-4 items-center justify-between font-bold">
      <div class="flex-1 flex items-center gap-6">
        <nuxt-link class="w-32" to="/">
          <img src="/logo.png" alt="Ongoing Airdrop">
        </nuxt-link>
        <div class="flex-1 flex items-center gap-3">
          <div class="hidden md:flex gap-8 font-bold">
            <nuxt-link to="/discovery">Discovery</nuxt-link>
            <nuxt-link to="/">Swap</nuxt-link>
            <nuxt-link to="/">NFT Staking</nuxt-link>
            <nuxt-link to="/">NFT Collaterol</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-end">
        <client-only>
          <div
              v-if="!loggedIn"
              class="p-2 px-3 md:px-6 flex items-center cursor-pointer bg-[#2D398D] text-white rounded-full"
              @click="openConnect()"
          >
            <span class="font-bold px-1">{{ getUserName }}</span>
          </div>
          <tippy v-else arrow interactive trigger="click" placement="bottom-start">
            <template v-slot:trigger>
              <div class="p-1 px-2 flex items-center border cursor-pointer dark:border-stone-500">
                <div class="fill-white">
                  <img class="w-5 h-5" :src="`/wallets/${connectedWallet}.png`" alt="">
                </div>
                <span class="font-bold px-1">{{ getUserName }}</span>
              </div>
            </template>
            <div class="w-36 text-left">
              <div class="py-1 px-2 cursor-pointer hover:bg-stone-900 duration-300 rounded" @click="openConnect">Change
                Wallet
              </div>
              <div class="py-1 px-2 cursor-pointer hover:bg-stone-900 duration-300 rounded" @click="disconnect">
                Disconnect
              </div>
            </div>
          </tippy>
        </client-only>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PHeader",
  components: {},
  props: {
    dark: {
      default: false
    }
  },
  data() {
    return {
      name: null
    }
  },
  methods: {
    openConnect() {
      this.$store.commit('config/SET_MODAL', {
        name: 'connect'
      })
    },
    disconnect() {
      this.$ck.set('apt_wallet', null);
      this.$store.dispatch("auth/setAuth", {
        account: null, network: null, wallet: null
      });
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getUserName',
      'loggedIn',
      'connectedWallet'
    ])
  }
}
</script>

<style scoped>
</style>
