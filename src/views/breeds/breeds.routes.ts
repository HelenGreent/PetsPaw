import type { RouteRecordRaw } from 'vue-router'
import Breeds from './Breeds.vue'

export const breedsRouteNames = {
  breeds: 'breeds'
}

export const breedsRoutes: RouteRecordRaw[] = [
  {
    path: '/breeds',
    name: breedsRouteNames.breeds,
    component: Breeds
  }
]
