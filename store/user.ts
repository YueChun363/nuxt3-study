import { defineStore } from '@pinia/nuxt/dist/runtime/composables'

export const useUserStore = defineStore({
  id: 'user',
  state: () => (
    {
      userInfo: {}
    }
  ),
  getters: {
    getUserInfo () : any {
      return this.userInfo
    }
  },
  actions: {
    async fetchUserInfo (): Promise<any> {
      // const res = await api
      // if (res.id) {
      //     this.userInfo = res
      // }
      // return { ...this.userInfo }
    }
  }
})
