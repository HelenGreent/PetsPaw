<template>
  <nav class="flex gap-2.5 pt-[2px] px-[2px]">
    <form @submit.prevent="onSubmit" class="w-full flex gap-2.5 pt-[2px] px-[2px]">
      <input ref="inputRef" type="text" placeholder="Search for breeds by name"
        class="w-full py-[15px] pl-5 font-jost font-normal text-xl text-lightGrey  bg-base rounded-[20px] outline outline-2 outline-transparent hover:outline-hovered ease-in-out duration-300" />
      <button type="submit"
        class="h-[40px] mt-[10px] ml-[-55px] p-2.5 rounded-[10px] bg-hovered fill-active hover:fill-base hover:bg-active ease-in-out duration-300">
        <SearchIcon class="mb-2" />
      </button>
    </form>
      <router-link class="reaction-btn" to="/breeds">
        <LikeIcon />
      </router-link>

      <router-link class="reaction-btn !pt-[16px]" to="/breeds">
        <FavoriteIcon />
      </router-link>

      <router-link class="reaction-btn" to="/breeds">
        <DislikeIcon />
      </router-link>
  </nav>
  <!-- <ul>
    <li v-for="{ label, value } in searchHandler" :key="value" :label="label" class="font-normal text-black pt-2.5 px-2 text-sm" 
      >
      {{ label }}
    </li>
  </ul> -->
</template>

<style lang="scss" scoped>
.reaction-btn {
  @apply p-[15px] rounded-[20px] bg-base fill-active hover:bg-hovered active:bg-active active:fill-base ease-in-out duration-300;
}
</style>

<script setup lang="ts">
import LikeIcon from '@/assets/icons/LikeIcon.vue'
import FavoriteIcon from '@/assets/icons/FavoriteIcon.vue'
import DislikeIcon from '@/assets/icons/DislikeIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'

//not finish but work
const breedsStore = useBreedsStore()
const { allBreeds } = storeToRefs(breedsStore)

const breedsOption = computed<{ label: string; value: number | string }[]>(() => {
  return allBreeds.value.map(item => ({ label: item.name, value: item.name }))
})

const inputValue = ref('')
const inputRef = ref<HTMLInputElement>()

const searchHandler = computed<{ label: string; value: number | string }[]>(() => {
  if (inputValue.value.trim().length > 0) {
    return breedsOption.value.filter((breed) => breed.label.toLowerCase().includes
      (inputValue.value.trim().toLowerCase()))
  }
  return breedsOption.value
})

function onSubmit() {
  if (!inputRef.value) return
  inputValue.value = inputRef.value.value
}
</script>
