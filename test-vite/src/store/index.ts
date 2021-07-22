import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number,
  msg:String,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      msg:'23232'
    }
  },
  mutations: {
    increment(state) {
      console.log(state,'store')
      state.count++
    }
  }
})
