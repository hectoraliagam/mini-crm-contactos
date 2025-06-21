import { Store } from 'vuex'
import type { State } from '@/stores'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export {}
