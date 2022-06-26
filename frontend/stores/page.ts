import { defineStore } from 'pinia'

export interface IPageState {
  containerOpen: boolean
  categories: any
  home: {
    openTab: number
  }
}

export const usePage = defineStore('page', {
  state: (): IPageState => ({
    containerOpen: false,
    categories: [],
    home: {
      openTab: 1,
    },
  }),
  actions: {
    toggleContainer() {
      this.containerOpen = !this.containerOpen
    },
    toggleTabs(tabNumber: number) {
      this.home.openTab = tabNumber
    },
    getCategories() {
      this.categories = [
        {
          name: 'Something',
          icon: 'something',
        },
        {
          name: 'Hoera',
          icon: 'something',
        },
        {
          name: 'Blahgh',
          icon: 'something',
        },
        {
          name: 'JHembo',
          icon: 'something',
        },
        {
          name: 'Kookies',
          icon: 'something',
        },
      ]
    },
  },
  getters: {
    containerState(): boolean {
      return this.containerOpen
    },
    categoriesState(): any[] {
      return this.categories
    },
  },
})
