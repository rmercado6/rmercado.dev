<script setup lang="ts">
import { computed, ref } from 'vue'
import { timelineItems, TimelineItem } from '@/types/timeline'

const selectedCategory = ref('all')

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
    <div class="flex flex-col items-center timeline">
      <span
        class="flex rounded-full p-2 w-fit aspect-square justify-center items-center text-xs"
      >
        Today
      </span>
      <template v-for="year in getYears()">
        <template
          v-for="item in getFilteredTimelineItemsByYear(year)"
          :key="item.title"
        >
          <div
            class="flex p-2 border dark:border-gray-200 border-gray-400 timelineItem gap-3"
          >
            <div
              v-if="item.img"
              class="aspect-square max-h-full border dark:border-gray-200/30 border-gray-400"
            >
              <img :src="item.img" class="max-h-full h-12" alt="event image" />
            </div>
            <div class="flex flex-col">
              <span>{{ item.title }}</span>
              <span class="hidden">{{ item.description }}</span>
              <span>{{ item.getDateString() }}</span>
            </div>
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
