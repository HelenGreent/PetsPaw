<template>
  <router-link
    :to="{ name: $routeNames.breedItem, params: { id } }"
    class="h-full w-full flex justify-center rounded-[20px]"
  >
    <img
      class="w-full h-full"
      fit="cover"
      :src="src"
      alt="dog"
    >
    <div class="w-full h-full flex bg-[#f0707899]">
      <p class="text-center w-full bg-white text-base py-[5px] rounded-[10px]">{{ name }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  id: number | string
  name: string
}>()

</script>
