<script setup lang="ts">
defineProps({
  color: { type: String, default: "primaryContainer" },
  variant: {
    type: String as () =>
      | "elevated"
      | "flat"
      | "text"
      | "tonal"
      | "outlined"
      | "plain",
    default: "elevated",
  },
  titleText: { type: String, default: "Title" },
  subtitleText: { type: String, default: "" },
  descriptionText: {
    type: String,
    default:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, eligendi repudiandae, distinctio ea officia id illum ipsa nulla minima dignissimos, corporis ab optio voluptatibus tempora! Ratione obcaecati numquam magnam labore!",
  },
  actions: {
    type: Boolean,
    default: false,
  },
  buttons: {
    type: Array as () => Array<{ text: string; action: () => void }>,
    default: () => [],
  },
});
</script>

<template>
  <v-card
    :color="color"
    :variant="variant"
    class="pa-4 rounded-xl"
  >
    <v-card-item>
      <v-card-title class="font-weight-bold text-on-primaryContainer text-wrap">
        {{ titleText }}
      </v-card-title>
      <v-card-subtitle
        v-if="subtitleText"
        class="text-on-primaryContainer text-wrap"
      >
        {{ subtitleText }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="text-justify">
      {{ descriptionText }}
    </v-card-text>

    <v-card-actions v-if="actions">
      <v-btn
        v-for="(button, index) in buttons"
        :key="index"
        class="rounded-xl"
        color="primary"
        variant="elevated"
        @click="button.action"
      >
        {{ button.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
