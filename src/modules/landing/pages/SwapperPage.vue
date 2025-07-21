<script setup lang="ts">
import FoodCombobox from "@/modules/common/components/FoodCombobox.vue";
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <SimpleCard>
      <FoodCombobox></FoodCombobox>
    </SimpleCard>
  </div>
</template>
