<template>
  <div class="flex flex-col items-center">
    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-emerald-700 mb-2 sm:mb-4">
      <slot name="icon"></slot>
    </div>

    <h3 class="text-lg md:text-xl font-semibold text-center mb-2">
      <slot></slot>
    </h3>
    <p class="text-gray-500 text-center mb-2">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<style scoped></style>
