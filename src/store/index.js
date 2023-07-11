import { defineStore } from 'pinia'

export default defineStore('main', {
  state: () => {
    return {
      someState: 'hello pinia'
    }
  },
  getters: {

  },
  actions: {

  },
  // 开启本地缓存
  persist: {
    key: 'main',
    storage: window.localStorage,
    paths: [

    ]
  }
})
