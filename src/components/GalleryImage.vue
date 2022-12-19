<template>
  <div class="grid">
    <img v-for="item in data" :key="item.value" :src="item.img" alt="dog"
      class=" w-full h-full object-cover rounded-[20px]">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    value: string | number
    img: string
    name: string
  }[]
}>()
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>


<!--nice grid template don't work -->
<!-- <template>
  <div class="flex flex-col gap-5">
    <div v-for="(chunk, index) of imageArray" :key="index" :class="index % 2 === 0 ? 'grid1' : 'grid2'">
      <div v-for="image of chunk" :key="image.id">
        <img :src="image.url" alt="cat" class="w-full h-full object-cover rounded-[20px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    value: string | number
    img: string
    name: string
  }[]
}>()

const imageArray = computed((data) => {
  const result = [];
  for (let i = 0; i < data.images.length; i += 5) {
    const chunk = data.images.slice(i, i + 5);
    result.push(chunk);
  }
  return result as any;
});

</script>

<style scoped lang="scss">

.grid1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 140px);
  gap: 20px;

  >*:nth-child(1) {
    grid-row: span 2;
  }

  >*:nth-child(4) {
    grid-row: span 2;
    grid-column: span 2;
  }
}

.grid2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 140px);
  gap: 20px;

  // >: nth-child(3) {
  //   grid-row: span 2;
  // }

  // >: nth-child(4) {
  //   grid-row: span 2;
  //   grid-column: span 2;
  // }
}
</style> -->