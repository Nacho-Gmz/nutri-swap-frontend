<template>
  <v-app-bar color="primaryContainer">
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('toggle-drawer')" />
    <v-toolbar-title>NutriSwap</v-toolbar-title>
    <ThemeToggler class="mr-5" />
  </v-app-bar>
</template>
