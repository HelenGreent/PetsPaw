import type { RouteRecordRaw } from 'vue-router'
import Gallery from './Gallery.vue'

export const galleryRouteNames = {
  gallery: 'gallery'
}

export const galleryRoutes: RouteRecordRaw[] = [
  {
    path: '/gallery',
    name: galleryRouteNames.gallery,
    component: Gallery
  }
]
