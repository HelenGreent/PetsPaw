import type { RouteRecordRaw } from 'vue-router'
import Voting from './Voting.vue'

export const votingRouteNames = {
  voting: 'voting'
}

export const votingRoutes: RouteRecordRaw[] = [
  {
    path: '/voting',
    name: votingRouteNames.voting,
    component: Voting
  }
]
