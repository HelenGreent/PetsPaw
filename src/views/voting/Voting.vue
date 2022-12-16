<template>
  <div class="flex flex-col gap-5 overflow-y-auto h-full">
    <Header />
    <div class="overflow-y-auto gap-2.5 px-5 p-5 bg-base rounded-[20px]">

      <div class="flex justify-between">
        <BackButton title="Voting" />
      </div>

      <div class="mt-2.5 relative">
        <div class="rounded-[20px] overflow-hidden">
          <img class="w-full rounded-[20px]" src="../../../src/assets/images/dog.png" alt="dog">
        </div>

        <div class="flex flex-row absolute bottom-[-44px] right-[50%] translate-x-[50%]">

          <button class="add-to-group-btn bg-light-green border-4 border-base border-solid rounded-l-[20px] fill-base hover:bg-light-green-opacity hover:fill-light-green ease-in-out duration-300">
            <LikeIcon />
          </button>

          <button class="add-to-group-btn bg-active border-base border-solid border-y-4 fill-base hover:fill-active hover:bg-hovered ease-in-out duration-300">
            <FavoriteIcon />
          </button>

          <button class="add-to-group-btn bg-yellow border-4 border-base border-solid rounded-r-[20px] fill-base hover:fill-yellow hover:bg-yellow-opacity ease-in-out duration-300">
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
</script>