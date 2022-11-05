function uuidv4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export default {
  namespaced: true,
  state: () => ({
    meta: {},
    notifications: [],
    modal: null,
    contracts: {
      "35": {
        uri: "https://fullnode.devnet.aptoslabs.com",
        lottery: "0xbf6d0127585ed76f2c54abb22816dfd0a77298b012d4badd24a1c14b75f4e515",
        flip: "0x1950eb3b4b5f3820eafb125ecf777ab4ad83e3eb57798f6db6ae30d5f8aaaa15",
        faucet: "https://zxvl.app/"
      },
      "2": {
        uri: "https://fullnode.testnet.aptoslabs.com",
        lottery: "0716267293a123c9c8570d19a23deec8e49b53ee6aeb08eb072343a4e567dedf",
        flip: "0x1950eb3b4b5f3820eafb125ecf777ab4ad83e3eb57798f6db6ae30d5f8aaaa15",
        faucet: "https://aptoslabs.com/testnet-faucet"
      }
    }
  }),
  mutations: {
    ['SET_META'](state, data) {
      state.meta = data;
    },
    ["SET_MODAL"](state, payload) {
      state.modal = payload;
    },
    'NOTIFY' (state, data) {
      state.notifications.push(data)
    },
    'REMOVE_NOTIFY' (state, index) {
      state.notifications.splice(index, 1)
    },
  },
  actions: {
    setModal(context, modal) {
      context.commit('SET_MODAL', modal)
    },
    removeNotify({ commit, state }, id) {
      commit('REMOVE_NOTIFY', id)
    },
    notify ({ commit, state }, data) {
      const id = uuidv4()
      commit('NOTIFY', {
        id,
        ...data
      })
      setTimeout(() => {
        const index = state.notifications.map(x => x.id).indexOf(id)
        commit('REMOVE_NOTIFY', index)
      }, 5000)
    }
  },
  getters: {
    getMeta: state => {
      return state.meta;
    }
  }
}
