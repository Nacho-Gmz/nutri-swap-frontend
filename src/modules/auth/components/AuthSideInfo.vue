<template>
  <div
    class="bg-brand-950 relative hidden h-full w-full items-center lg:grid lg:w-1/2 dark:bg-white/5"
  >
    <div class="z-1 flex items-center justify-center">
      <div class="flex max-w-xs flex-col items-center gap-4">
        <RouterLink to="/">
          <div
            class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105"
            style="will-change: transform; backface-visibility: hidden; transform: translateZ(0)"
          >
            <span class="block rounded-xl">
              <h1 class="glow glow-green text-6xl font-bold text-green-100 md:text-8xl">
                NutriSwap
              </h1>
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
