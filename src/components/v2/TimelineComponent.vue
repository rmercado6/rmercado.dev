<script setup lang="ts">
import { computed, ref } from 'vue'
import { timelineItems, TimelineItem } from '@/types/timeline'

const selectedCategory = ref('all')
const expandedItem = ref(null)

const filteredTimelineItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return timelineItems
  }
  return timelineItems.filter(
    (item: TimelineItem) => item.category === selectedCategory.value
  )
})

function getFilteredTimelineItemsByYear(year: number) {
  return filteredTimelineItems.value.filter(
    (item: TimelineItem) => item.date.end.year === year
  )
}

function getYears() {
  const years = new Set<number>()
  for (const item of filteredTimelineItems.value) {
    years.add(item.date.end.year)
  }
  return Array.from(years).sort((a, b) => b - a)
}

const categories = [
  { name: 'All', key: 'all' },
  { name: 'Studies', key: 'studies' },
  { name: 'Professional Experience', key: 'professional' },
  { name: 'Personal Projects', key: 'personal' },
  { name: 'Music', key: 'music' }
]
</script>

<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen my-10 md:my-0"
  >
    <div class="flex justify-center gap-4 pb-6">
      <template v-for="category in categories" :key="category.key">
        <a
          class="flex items-center justify-center text-center"
          @click="selectedCategory = category.key"
          @mouseenter="selectedCategory = category.key"
          :class="{
            'underline font-bold px-2 bg-gray-400/20':
              selectedCategory === category.key
          }"
        >
          {{ category.name }}
        </a>
      </template>
    </div>
    <div class="flex flex-col items-center timeline w-screen px-6">
      <span
        class="flex rounded-full p-2 w-fit aspect-square justify-center items-center text-xs"
      >
        Today
      </span>
      <template v-for="year in getYears()">
        <template
          v-for="(item, index) in getFilteredTimelineItemsByYear(year)"
          :key="`${year}-${index}`"
        >
          <div
            class="flex p-2 border timelineItem gap-3 max-w-full select-none"
            :class="
              expandedItem === `${year}-${index}`
                ? 'border-emerald-700/50 bg-gray-700/10'
                : 'dark:border-gray-200 border-gray-400 hover:border-emerald-500/70 cursor-pointer'
            "
          >
            <div v-if="item.img" class="shrink-0">
              <img
                class="h-12 border dark:border-gray-200/30 border-gray-400 aspect-square object-cover"
                :src="item.img.src"
                :class="item.img.class"
                :alt="item.img.desc"
              />
            </div>
            <template v-if="expandedItem !== `${year}-${index}`">
              <div
                class="flex flex-col text-wrap items-start text-left shrink"
                @click="expandedItem = `${year}-${index}`"
              >
                <span class="font-semibold">{{ item.title }}</span>
                <span class="text-xs">{{ item.getDateString() }}</span>
              </div>
            </template>
            <template v-if="expandedItem === `${year}-${index}`">
              <div class="flex flex-col text-wrap items-start text-left shrink">
                <span class="font-bold">{{ item.title }}</span>
                <span class="text-xs">{{ item.getDateString() }}</span>
                <span v-html="item.description" />
              </div>
              <div class="shrink-0">
                <div
                  @click="expandedItem = null"
                  class="aspect-square w-5 flex hover:bg-gray-300/20 cursor-pointer"
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
            </template>
          </div>
          <span class="timelineItem">{{ year }}</span>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}

span.timelineItem,
div.timelineItem {
  margin-top: 20px;
  position: relative;
}

.timelineItem:before,
.timelineItem:after {
  content: '';
  height: 20px;
  border-left: 1px solid;
  position: absolute;
  @apply dark:border-gray-200 border-gray-400;
}

:after {
  top: 100%;
  left: 50%;
}

:before {
  bottom: 100%;
  left: 50%;
}

span.timelineItem:first-of-type:before {
  display: none;
}

span.timelineItem:last-of-type:after {
  border-style: dashed;
}

.timeline {
  white-space: nowrap;
  text-align: center;
}
</style>
