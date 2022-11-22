import {Context, Inject} from '@nuxt/types/app'
import {AccountKeys, NetworkInfo, WalletAdapter} from "~/helpers/aptos/WalletAdapters/BaseAdapter";
import {MartianWalletAdapter, PontemWalletAdapter, PetraWalletAdapter} from "~/helpers/aptos/WalletAdapters";

export * from './WalletAdapters';

interface AuthStore {
  account: AccountKeys
  network: NetworkInfo
  wallet: string
}

interface APTWallet {
  adapter: WalletAdapter
  connect: (network: string, callback: void) => void
  setAuth: (auth: AuthStore) => void
  disconnect: () => void
}

const ADAPTER_MAPPING = {
  "Martian": MartianWalletAdapter,
  "Potem": PontemWalletAdapter,
  "Petra": PetraWalletAdapter
}

export default async function (context: Context, inject: Inject) {
  const $apt = {} as APTWallet
  $apt.connect = function (network, callback) {
    // @ts-ignore
    $apt.adapter = new ADAPTER_MAPPING[network]
    $apt.adapter.connect().then(() => {
      $apt.setAuth({
        account: $apt.adapter.publicAccount,
        network: $apt.adapter.network,
        wallet: network
      })
      // @ts-ignore
      if (callback) {
        // @ts-ignore
        callback()
      }
    }).catch(e => {
      console.log(e);
    })
  }
  $apt.setAuth = (auth) => {
    context.app.$ck.set('apt_wallet', auth.wallet);
    context.store.dispatch("auth/setAuth", auth);
  }

  $apt.disconnect = () => {
    context.app.$ck.set('apt_wallet', null);
    context.store.dispatch("auth/setAuth", {
      account: null, network: null, wallet: null
    });
  }

  const init = () => {
    const currentWallet = context.app.$ck.get('apt_wallet');
    if (currentWallet) {
      $apt.connect(currentWallet)
    }
  }

  if (process.client) {
    init()
  }

  inject("aptos", $apt);
}
