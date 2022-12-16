import { homeRouteNames } from '@/views/home/home.routes'
import { breedsRouteNames } from '@/views/breeds/breeds.routes'
import { votingRouteNames } from '@/views/voting/voting.routes'
import { galleryRouteNames } from '@/views/gallery/gallery.route'

export const routeNames = {
  ...homeRouteNames,
  ...breedsRouteNames,
  ...votingRouteNames,
  ...galleryRouteNames
}