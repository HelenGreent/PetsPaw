import { breeds } from './breeds'
import type { IStaticOptions, IBreed } from './breeds.interface'

export const useBreedsStore = defineStore('breeds', () => {
  const breedsState = ref(breeds)

  const staticOptions = ref<IStaticOptions>({
    limit: 20,
    sort: 'default',
    filterByName: []
  })

  const showLimit = ref(staticOptions.value.limit)

  const filteredBreeds = computed<IBreed[]>(() => {
    const breeds = [...breedsState.value]

    if (staticOptions.value.sort === 'asc') breeds.sort((a, b) => a.name.localeCompare(b.name))
    else if (staticOptions.value.sort === 'dsc') breeds.sort((a, b) => b.name.localeCompare(a.name))

    return breeds.filter(item => {
      return staticOptions.value.filterByName.length === 0 || staticOptions.value.filterByName.includes(item.name)
    })
  })

  const limitedBreeds = computed<IBreed[]>(() => {
    return filteredBreeds.value.slice(0, showLimit.value)
  })

  watch(() => staticOptions.value.limit, (newValue) => {
    showLimit.value = newValue
  })

  return {
    staticOptions,
    filteredBreeds: limitedBreeds,
    allBreeds: breedsState
  }
})
