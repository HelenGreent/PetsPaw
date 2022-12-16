<template>
  <div class="flex flex-col gap-5 h-full">
    <Header />
    <div class="gap-2.5 px-5 p-5 bg-base rounded-[20px]">

      <div class="flex justify-between">
        <BackButton title="Gallery" />
        <button
          class="flex items-center gap-2.5 h-[40px] px-[30px] py-[5px] bg-hovered font-medium text-xs text-active leading-4 uppercase rounded-[10px] tracking-[2px] fill-active hover:bg-active hover:fill-base hover:text-white ease-in-out duration-300">
          <UploadIcon />
          Upload
        </button>
      </div>

      <div class="grid grid-cols-2 grid-rows-2 bg-grey rounded-[20px] mt-5 pt-2.5 px-5 pb-5 gap-x-5 gap-y-2.5">
        <div>
          <h2 class="select-caption">ORDER</h2>
          <select v-model="staticOptions.sort" class="select">
            <option v-for="{ label, value } in  orderParams" :key="value" :value="value" :label="label">
            </option>
          </select>
        </div>

        <div>
          <h2 class="select-caption">TYPE</h2>
          <select class="select">
            <option v-for="{ value, label } in typeParams" :key="value" :value="value" :label="label">
            </option>
          </select>
        </div>

        <div>
          <h2 class="select-caption">BREED</h2>
          <select multiple v-model="staticOptions.filterByName" class="select">
            <option v-for="{ value, label } in breedsOption" :key="value" :value="value" :label="label">
            </option>
          </select>
        </div>
        
        <div>
          <h2 class="select-caption">LIMIT</h2>
          <div class="flex gap-2.5">
            <select v-model="staticOptions.limit" class="select">
              <option v-for="{ value, label } in imageLimit" :key="value" :value="value" :label="label">
              </option>
            </select>
            <button
              class="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-base fill-active hover:bg-active hover:fill-base ease-in-out duration-300">
              <RefreshIcon />
            </button>
          </div>
        </div>

      </div>

      <div class="h-[600px] overflow-y-auto">
        <GalleryImage class="mt-medium gap-medium" :data="gridData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped >
.select-caption {
  @apply px-2.5 text-lightGrey font-jost font-medium text-[10px] leading-[18px] uppercase;
}

.select {
  @apply px-2.5 text-black bg-base rounded-[10px] w-full py-2 outline outline-2 outline-transparent hover:outline-hovered ease-in-out duration-300;
}
</style>

<script lang="ts" setup>
import UploadIcon from '@/assets/icons/UploadIcon.vue'
import RefreshIcon from '@/assets/icons/RefreshIcon.vue'
const breedsStore = useBreedsStore()
const { allBreeds, filteredBreeds, staticOptions } = storeToRefs(breedsStore)

const orderParams: { label: string; value: string }[] = [
  {
    value: 'default',
    label: 'Random'
  },
  {
    value: 'asc',
    label: 'Asc'
  },
  {
    value: 'dsc',
    label: 'Desc'
  }
]

const typeParams: { label: string; value: string }[] = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'static',
    label: 'Static'
  },
  {
    value: 'animated',
    label: 'Animated'
  }
]

const imageLimit: { label: string; value: number | string }[] = [
  {
    value: 5,
    label: '5 items per page'
  },
  {
    value: 10,
    label: '10 items per page'
  },
  {
    value: 15,
    label: '15 items per page'
  },
  {
    value: 20,
    label: '20 items per page'
  }
]

const breedsOption = computed<{ label: string; value: number | string }[]>(() => {
  return allBreeds.value.map(item => ({ label: item.name, value: item.name }))
})

const gridData = computed<{ value: number | string; img: string; name: string }[]>(() => {
  return filteredBreeds.value.map(item => ({ value: item.id, img: item.image.url, name: item.name }))
})
</script>