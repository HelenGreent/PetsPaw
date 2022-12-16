<template>
  <div class="flex flex-row gap-2.5">
    <router-link :to="{ name: $routeNames.home }"
      class="flex items-center justify-center w-10 h-10 p-2 bg-hovered fill-active rounded-[10px] hover:bg-active hover:fill-base ease-in-out duration-300">
      <BackIcon />
    </router-link>
    <h1
      class="h-[40px] px-[30px] py-[5px] bg-active font-medium text-xl leading-[30px] uppercase text-base rounded-[10px] tracking-[2px]">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">

import BackIcon from '@/assets/icons/BackIcon.vue'

defineProps<{
  title: string
}>()

</script>
