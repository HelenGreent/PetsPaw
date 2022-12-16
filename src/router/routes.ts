import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'
import { breedsRoutes } from '@/views/breeds/breeds.routes'
import { votingRoutes } from '@/views/voting/voting.routes'
import { galleryRoutes } from '@/views/gallery/gallery.route'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  ...homeRoutes,
  ...breedsRoutes,
  ...votingRoutes,
  ...galleryRoutes
]

export {
  routes
}
