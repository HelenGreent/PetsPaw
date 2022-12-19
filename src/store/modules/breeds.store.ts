import { breeds } from './breeds'
import type { IStaticOptions, IBreed } from './breeds'

export const useBreedsStore = defineStore('breeds', () => {
  const breedsState = ref(breeds)

  const staticOptions = ref<IStaticOptions>({
    limit: 5,
    sort: 'default',
    filterByName: []
  })

  const showLimit = ref(staticOptions.value.limit)

  const filterBreeds = computed<IBreed[]>(() => {
    const breeds = [...breedsState.value]
    
    if (staticOptions.value.sort === 'asc') { breeds.sort((a, b) => a.name.localeCompare(b.name)) }
    else if (staticOptions.value.sort === 'dsc') { breeds.sort((a, b) => b.name.localeCompare(a.name)) }
    // random array 
    // else breeds = function shuffle(breeds) {
    //   for (let i = breeds.length - 1; i > 0; i--) {
    //     let temp = breeds[i]
    //     let random = Math.floor(Math.random() * (i + 1))
    
    //     breeds[i] = breeds[random]
    //     breeds[random] = temp
    //   }
    //   return breeds;
    // }
    return breeds.filter(item => {
      return staticOptions.value.filterByName.length === 0 || staticOptions.value.filterByName.includes(item.name)
    })
  })

  const limitedBreeds = computed<IBreed[]>(() => {
    return filterBreeds.value.slice(0, showLimit.value)
  })

  watch(() => staticOptions.value.limit, (newValue) => {
    showLimit.value = newValue
  })

  return {
    staticOptions,
    filterBreeds: limitedBreeds,
    allBreeds: breedsState
  }
})
