<script setup lang="ts">
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FoodCard from "./FoodCard.vue";
import type { Swap } from "../types/alimentos.interface";
import type { Alimento } from "../types/alimentos.interface";

const modules = [Navigation, Pagination, Autoplay];

const paginationOptions = {
  el: ".swiper-pagination",
  clickable: true,
};

const navigationOptions = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};

const props = defineProps<{
  intercambios: Swap[];
  compareWith?: Alimento | null;
  action?: () => void;
}>();
</script>

<template>
  <swiper :modules="modules" :pagination="paginationOptions" :navigation="navigationOptions">
    <swiper-slide v-for="(swap, index) in intercambios.slice(0, 5)" :key="index">
      <div class="w-full overflow-auto rounded-lg px-12 pt-4 pb-10">
        <FoodCard
          :intercambio="swap"
          :compareWith="compareWith || null"
          :action="!!action ? action : undefined"
        />
      </div>
    </swiper-slide>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev">
      <svg
        class="h-auto w-auto stroke-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.25 6L9 12.25L15.25 18.5"
          stroke=""
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="swiper-button-next">
      <svg
        class="stroke-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 19L15 12.75L8.75 6.5"
          stroke=""
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </swiper>
</template>
