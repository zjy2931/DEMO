// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define your typings for the store state
interface Storage {
  [propName: string]: any;
}
interface State {
  count: number,
  msg: string,
  storage: Storage
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    msg: 'test',
    storage: {}
  },
  mutations: {
    UPDATE_COUNT(state: State, playload: number) {
      state.count = playload
    },
    SET_ITEM(state:State,playload:any){
      console.log('=======',playload)
      state.storage[playload.key] = playload.value
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore(): Store<State> {
  return baseUseStore(key)
}
