<template>
  <nav class="flex gap-2.5 pt-[2px] px-[2px]">
    <input
      type="text"
      placeholder="Search for breeds by name"
      class="w-full py-[15px] pl-5 font-jost font-normal text-xl text-lightGrey  bg-base rounded-[20px] outline outline-2 outline-transparent hover:outline-hovered ease-in-out duration-300"
    />
    <button class="h-[40px] mt-[10px] ml-[-55px] p-2.5 rounded-[10px] bg-hovered fill-active hover:fill-base hover:bg-active ease-in-out duration-300">
      <SearchIcon class="mb-2"/>
    </button>
    <router-link class="reaction-btn" to="/breeds">
      <LikeIcon />
    </router-link>

    <router-link class="reaction-btn !pt-[16px]" to="/breeds">
      <FavoriteIcon />
    </router-link>

    <router-link class="reaction-btn" to="/breeds" >
      <DislikeIcon />
    </router-link>
  </nav>
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
</script>

<!-- <template>
  <div class="flex gap-2.5">
    <input
      type="text"
      placeholder="Search for breeds by name"
      class="w-full py-[15px] pl-5 bg-base rounded-[20px] active:border-none"
    />
    <button class="ml-[-50px] p-2.5 rounded-[20px] bg-hovered active:bg-active">
      <img
        :src="Search"
        alt="Search"
      />
    </button>

    <button class="reaction-btn">
      <img
        :src="Like"
        alt="Like"
        class="hover:fill-cyan-700"
      />
    </button>

    <button class="reaction-btn">
      <img
        :src="Favorite"
        alt="Favorite"
        class="active:fill-base"
      />
    </button>

    <button class="reaction-btn group">
      <img
        :src="Dislike"
        alt="Dislike"
        class="group-active:fill-base"
      />
    </button>
  </div>
</template>

<style lang="scss">
.reaction-btn {
  @apply p-[15px] rounded-[20px] bg-base hover:bg-hovered active:bg-active;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import Search from "@/assets/icons/Search.svg";
import Like from "@/assets/icons/Like.svg";
import Dislike from "@/assets/icons/Dislike.svg";
import Favorite from "@/assets/icons/Favorite.svg";

export default defineComponent({
  setup() {
    return { Search, Like, Dislike, Favorite };
  },
});
</script> -->