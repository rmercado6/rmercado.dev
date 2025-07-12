<script setup lang="ts">
import { computed, ref } from 'vue'
import { TimelineItem, getStartDate, getEndDate } from '@/types/timeline'
import TimelineItemComponent from '@/components/v2/TimelineItemComponent.vue'
import { timelineItems } from './data/timelineData'

const selectedCategory = ref('all')
const selectedItem = ref<TimelineItem | null>(null)

const filteredTimelineItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return timelineItems
  }
  return timelineItems.filter(
    (item: TimelineItem) => item.category === selectedCategory.value
  )
})

const selectedTimeSpan = computed(() => {
  if (!selectedItem.value) return { from: null, to: null }
  return {
    from: selectedItem.value.date.start.year,
    to: selectedItem.value.date.end.year
  }
})

function getFilteredTimelineItemsByYear(year: number) {
  const filteredItems = filteredTimelineItems.value.filter(
    (item: TimelineItem) => {
      if (item.category === 'studies') return item.date.end.year === year
      return item.date.start
        ? item.date.start.year === year
        : item.date.end.year === year
    }
  )
  return filteredItems.sort((a, b) => {
    const aDate =
      a.category === 'studies'
        ? getEndDate(a)
        : a.date.start
        ? getStartDate(a)
        : getEndDate(a)
    const bDate =
      b.category === 'studies'
        ? getEndDate(b)
        : b.date.start
        ? getStartDate(b)
        : getEndDate(b)
    return bDate - aDate
  })
}

function getYears() {
  const eventYears = new Set<number>()
  for (const item of filteredTimelineItems.value) {
    eventYears.add(item.date.start ? item.date.start.year : item.date.end.year)
  }
  const startYear = Array.from(eventYears).sort((a, b) => a - b)[0]
  const currentYear = new Date().getFullYear()
  const years = []
  for (let i = 0; i <= currentYear - startYear; i++) {
    years.push(currentYear - i)
  }
  return years
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
    class="flex flex-col items-center justify-start max-h-screen h-screen overflow-y-auto overflow-x-hidden my-0 py-6 w-full"
  >
    <div
      class="flex justify-center gap-4 py-3 px-4 sticky top-0 dark:bg-black bg-white z-10 border border-gray-200 dark:border-gray-500 max-w-full text-xs md:text-md"
    >
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
    <div
      class="flex flex-col items-center timeline max-w-full w-screen md:px-6"
    >
      <span
        class="flex rounded-full p-2 w-fit aspect-square justify-center items-center text-xs timelineItem"
      >
        Today
      </span>
      <template v-for="year in getYears()" :key="year">
        <template
          v-for="(item, index) in getFilteredTimelineItemsByYear(year)"
          :key="`${year}-${index}`"
        >
          <timeline-item-component
            :item
            :open="selectedItem?.title === item.title"
            @selected="(e) => (selectedItem = e)"
          ></timeline-item-component>
        </template>

        <span class="timelineItem">
          {{ year }}
        </span>
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

.timelineItem:after {
  content: '';
  height: 20px;
  border-left: 1px solid;
  position: absolute;
}

.timelineItem:after.selected {
  @apply border-emerald-500;
}

:after {
  top: 100%;
  left: 50%;
}

span.timelineItem:last-of-type:after {
  border-style: dashed;
}

.timeline {
  white-space: nowrap;
  text-align: center;
}
</style>
