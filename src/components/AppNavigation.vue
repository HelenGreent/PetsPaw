<template>
  <div class="grid grid-rows-[24px_100px_1fr] mx-auto font-jost">
    <header class="flex items-center gap-x-2">
      <img src="/paw.svg" alt="PetsPaw" />
      <h1 class="font-bold text-black">PetsPaw</h1>
    </header>

    <div class="flex flex-col mt-10 gap-2.5">
      <h1 class="text-4xl font-medium text-black mt-3">Hi intern!</h1>
      <p class="font-normal text-xl text-lightGrey leading-8">
        Welcome to MSI 2022 Front-end test
      </p>
    </div>

    <div class="flex flex-col mt-32">
      <p class="text-xl font-medium leading-[30px] text-black">Lets start using The Dogs API</p>

      <div class="flex flex-row justify-between items-center mt-5">

        <div class="nav-item group">
          <div class="bg-lavender nav-bg group-hover:border-base
            group-active:border-hovered
            ease-in-out duration-300">
            <img src="../assets/images/voting.png" alt="gallery">
          </div>
          <router-link class="nav-btn letterSpacing-tightest 
            group-hover:bg-hovered group-hover:text-hover 
            group-active:bg-active group-active:text-base group-active:text-sm
            ease-in-out duration-300" :to="{ name: $routeNames.voting }">Voting</router-link>
        </div>

        <div class="nav-item group">
          <div class="bg-light-green nav-bg group-hover:border-base 
            group-active:border-hovered
            ease-in-out duration-300">
            <img src="../assets/images/breeds.png" alt="breeds">
          </div>
          <router-link class="nav-btn letterSpacing-tightest 
            group-hover:bg-hovered group-hover:text-hover 
            group-active:bg-active group-active:text-base group-active:text-sm
          ease-in-out duration-300" :to="{ name: $routeNames.breeds }">Breed</router-link>
        </div>

        <div class="nav-item group">
          <div class="bg-yellow nav-bg group-hover:border-base 
            group-active:border-hovered
            ease-in-out duration-300">
            <img src="../assets/images/gallery.png" alt="gallery">
          </div>
          <router-link class="nav-btn letterSpacing-tightest 
            group-hover:bg-hovered group-hover:text-hover 
            group-active:bg-active group-active:text-base group-active:text-sm
            ease-in-out duration-300" :to="{ name: $routeNames.gallery }">Gallery</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-item {
  @apply flex flex-col gap-2.5;
}

.nav-bg {
  @apply w-[134px] h-[196px] rounded-[20px] flex justify-center items-center box-border border-4 border-solid border-baseOpacity;
}

.nav-btn {
  @apply font-jost bg-base text-sm uppercase px-[30px] text-center rounded-[10px] font-medium text-hover py-2.5;
}

// .nav-btn:hover+.nav-bg {
//   @apply border-8  border-base;
// }
</style>
