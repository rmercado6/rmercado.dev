<script setup lang="ts">
import { TimelineItem, getDateString } from '@/types/timeline'

withDefaults(
  defineProps<{
    item: TimelineItem
    open: boolean
  }>(),
  {
    open: false
  }
)

const emit = defineEmits<{
  (e: 'selected', item: TimelineItem | null): void
}>()
</script>

<template>
  <div
    class="flex p-2 border timelineItem gap-3 w-full max-w-full select-none border-emerald-500/80 bg-gray-700/10"
    v-if="open"
  >
    <div v-if="item.img" class="shrink-0">
      <img
        class="h-12 border dark:border-gray-200/30 border-gray-400 aspect-square object-cover"
        :src="item.img.src"
        :class="item.img.class"
        :alt="item.img.desc"
      />
    </div>

    <div class="flex flex-col text-wrap items-start text-left grow">
      <span class="font-bold">{{ item.title }}</span>
      <span class="text-xs">{{ getDateString(item) }}</span>
      <span v-html="item.description" class="w-full" />
      <div v-if="item.tags" class="mt-3 p-2 flex flex-wrap gap-1.5 text-xs">
        <template v-for="tag in item.tags" :key="tag">
          <span
            class="p-1 border border-emerald-500/50 rounded-lg items-center flex"
          >
            {{ tag }}
          </span>
        </template>
      </div>
    </div>
    <div class="shrink-0">
      <div
        class="aspect-square w-5 flex hover:bg-gray-300/20 cursor-pointer"
        @click="emit('selected', null)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
    </div>
  </div>
  <div
    v-else
    class="flex p-2 border timelineItem gap-3 w-full select-none border-gray-400 hover:border-emerald-500/70 cursor-pointer"
    @click="emit('selected', item)"
  >
    <div v-if="item.img" class="shrink-0">
      <img
        class="h-12 border dark:border-gray-200/30 border-gray-400 aspect-square object-cover"
        :src="item.img.src"
        :class="item.img.class"
        :alt="item.img.desc"
      />
    </div>
    <div class="flex flex-col text-wrap items-start text-left grow">
      <span class="font-semibold">{{ item.title }}</span>
      <span class="text-xs">{{ getDateString(item) }}</span>
    </div>
  </div>
</template>

<style scoped></style>