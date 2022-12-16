<template>
  <div class="flex flex-col gap-5 h-full ">
    <Header />
    <section class="bg-base p-5 rounded-[20px]">
      <div class="flex justify-between gap-2.5 pb-5">
        <BackButton title="Breeds" />

        <select multiple v-model="staticOptions.filterByName" class="select w-[226px] text-lightGrey"
          placeholder="All breeds">
          <option class="breed-options" v-for="{ label, value } in breedsOption" :key="value" :value="value"
            :label="label">
          </option>
        </select>

        <select v-model="staticOptions.limit" class="select w-[100px] text-lightGrey">
          <option class="breed-options" v-for="{ value, label } in imageLimit" :key="value" :value="value"
            :label="label">
          </option>
        </select>

        <button @click="staticOptions.sort = 'dsc'" class="sorting-btn">
          <SortingUpIcon />
        </button>

        <button  @click="staticOptions.sort = 'asc'" class="sorting-btn">
          <SortingDownIcon />
        </button>
      </div>

      <div class="h-[600px] overflow-y-auto">
        <GalleryImage class="mt-medium gap-medium" :data="gridData" />
      </div>
    </section>
  </div>

</template>

<style lang="scss">
.select {
  @apply h-[40px] px-2.5 py-[5px] bg-grey font-jost font-normal leading-[30px] text-base rounded-[10px] outline outline-2 outline-transparent hover:outline-hovered ease-in-out duration-300;

  .breed-options {
    @apply font-normal pt-2.5 px-2 text-sm;
  }
}

.sorting-btn {
  @apply flex items-center justify-center w-10 h-10 p-2 bg-grey rounded-[10px] outline outline-2 outline-transparent fill-lightGrey hover:border-active hover:fill-active hover:outline-hovered ease-in-out duration-300;
}
</style>

<script setup lang="ts">
import SortingDownIcon from '@/assets/icons/SortingDownIcon.vue'
import SortingUpIcon from '@/assets/icons/SortingUpIcon.vue'
const breedsStore = useBreedsStore()
const { allBreeds, filteredBreeds, staticOptions } = storeToRefs(breedsStore)

const imageLimit: { label: string; value: number | string }[] = [
  {
    value: 5,
    label: 'Limit: 5'
  },
  {
    value: 10,
    label: 'Limit: 10'
  },
  {
    value: 15,
    label: 'Limit: 15'
  },
  {
    value: 20,
    label: 'Limit: 20'
  }
]

const breedsOption = computed<{ label: string; value: number | string }[]>(() => {
  return allBreeds.value.map(item => ({ label: item.name, value: item.name }))
})

const gridData = computed<{ value: number | string; img: string; name: string }[]>(() => {
  return filteredBreeds.value.map(item => ({ value: item.id, img: item.image.url, name: item.name }))
})

</script>
