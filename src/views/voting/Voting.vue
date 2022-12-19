<template>
  <div class="flex flex-col gap-5 overflow-y-auto h-full">
    <Header />
    <div class="gap-2.5 px-5 p-5 bg-base rounded-[20px]">

      <div class="flex justify-between">
        <BackButton title="Voting" />
      </div>

      <div class="mt-2.5 flex justify-center h-[360px]  relative">

        <div v-show="sliderActive === item.value" v-for="item in Data" :key="item.value" class="rounded-[20px]" alt="dog">  
            <img class="h-[360px] rounded-[20px]" :src="item.img" alt="dog">
        </div>

        <button @click="prevSlider()" class="absolute bottom-[50%] left-[5%] slider-btn">
          <p class="text-xl"> &#8249; </p>
        </button>
        <button @click="nextSlider()" class=" absolute bottom-[50%] right-[5%] slider-btn">
          <p class="text-xl"> &#8250; </p>
        </button>
        <div class="flex flex-row absolute bottom-[-44px] right-[50%] translate-x-[50%]">

          <button
            class="add-to-group-btn bg-light-green border-4 border-base border-solid rounded-l-[20px] fill-base hover:bg-light-green-opacity hover:fill-light-green ease-in-out duration-300">
            <LikeIcon />
          </button>

          <button
            class="add-to-group-btn bg-active border-base border-solid border-y-4 fill-base hover:fill-active hover:bg-hovered ease-in-out duration-300">
            <FavoriteIcon />
          </button>

          <button
            class="add-to-group-btn bg-yellow border-4 border-base border-solid rounded-r-[20px] fill-base hover:fill-yellow hover:bg-yellow-opacity ease-in-out duration-300">
            <DislikeIcon />
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-to-group-btn {
  @apply flex items-center justify-center w-20 h-20;
}
</style>

<script lang="ts" setup>
import LikeIcon from '@/assets/icons/LikeIcon.vue'
import DislikeIcon from '@/assets/icons/DislikeIcon.vue'
import FavoriteIcon from '@/assets/icons/FavoriteIcon.vue'
const breedsStore = useBreedsStore()
const { allBreeds } = storeToRefs(breedsStore)

const Data = computed<{ value: number | string; img: string; name: string }[]>(() => {
  return allBreeds.value.map(item => ({ value: item.id, img: item.image.url, name: item.name }))
})

const sliderActive = ref(26)

function prevSlider() {
  sliderActive.value--
}

function nextSlider() {
    sliderActive.value++
}
</script>

<style lang="scss" scoped>
.slider-btn {
  @apply w-10 h-10 flex items-center justify-center rounded-full bg-hovered text-active hover:text-base hover:bg-active ease-in-out duration-300
}
</style>