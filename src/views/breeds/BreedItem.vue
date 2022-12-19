<template>
  <div class="flex flex-col gap-5 h-full ">
    <Header />
    <section class="bg-base p-5 rounded-[20px]">
      <div class="flex justify-between gap-2.5 pb-5">
        <BackButton title="BreedItem" />
      </div>
      <img src="@/assets/images/dog.png" :alt="name" class=" w-full min-h-[250px] rounded-[20px]" />
      <div class="w-full flex flex-col gap-2 mt-7 border-solid border-2 border-hovered p-10
        rounded-[20px]">

        <h2 class="text-center font-bold text-black text-3xl"> Hangehoh{{ name }}</h2>
        <p class="text-center font-medium text-lightGrey text-xl">{{ bredFor }}</p>

        <div class="grid grid-cols-2 gap-2.5">

          <div>
            <p class="text-lightGrey">
              <strong class="text-back font-medium">Temperament:</strong><br>
              {{ temperament }}
            </p>
          </div>

          <div>
            <p class="text-lightGrey">
              <strong class="text-back font-medium">Height:</strong> {{ height }}
            </p>
            <p class="text-lightGrey">
              <strong class="text-back font-medium">Weight:</strong> {{ weight }}
            </p>
            <p class="text-lightGrey">
              <strong class="text-back font-medium">Life span:</strong> {{ lifeSpan }}
            </p>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  url?: string
  name?: string
  bredFor?: string
  temperament?: string
  height?: string
  weight?: string
  lifeSpan?: string
}>()
</script>