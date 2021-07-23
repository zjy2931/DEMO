// store.ts
import { InjectionKey } from 'vue'
import { createStore,useStore as baseUseStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  count: number,
  msg:string
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    msg:'test',
  },
  mutations:{
    UPDATE_COUNT(state:State,playload:number){
      state.count = playload
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore (): Store<State> {
  return baseUseStore(key)
}
