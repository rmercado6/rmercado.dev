<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TimelineItem, getStartDate, getEndDate } from '@/types/timeline'
import TimelineItemComponent from '@/components/v2/TimelineItemComponent.vue'
import { timelineItems } from './data/timelineData'

const selectedCategory = ref('all')
const selectedItem = ref<TimelineItem | null>(null)
const showTags = ref(false)

const filteredTimelineItems = computed(() => {
  const nSelectedTags = selectedTags.value.size
  const categoryAll = selectedCategory.value === 'all'

  if (categoryAll && nSelectedTags === 0) return timelineItems

  return timelineItems.filter((item) => {
    const isInCategory = !categoryAll
      ? item.category === selectedCategory.value
      : true

    if (!item.tags && nSelectedTags > 0) return false
    if (!item.tags || nSelectedTags === 0) return isInCategory

    let hasTag = false
    item.tags.forEach((tag) => {
      if (selectedTags.value.has(tag)) hasTag = true
    })
    return isInCategory && hasTag
  })
})

const filteredTimelineItemsByCategory = computed(() => {
  if (selectedCategory.value === 'all') return timelineItems

  return timelineItems.filter(
    (item) => item.category === selectedCategory.value
  )
})

const selectedTimeSpan = computed(() => {
  if (!selectedItem.value) return { from: null, to: null }
  return {
    from: selectedItem.value.date.start.year,
    to: selectedItem.value.date.end.year
  }
})

const tags = computed(() => {
  const tags = new Set<string>([])

  filteredTimelineItemsByCategory.value.forEach((item) => {
    if (item.tags) item.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort((a, b) => {
    const A = a.toUpperCase()
    const B = b.toUpperCase()
    return A < B ? -1 : A > B ? 1 : 0
  })
})

const selectedTags = ref<Set<string>>(new Set([]))

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

watch(tags, () => {
  selectedTags.value.forEach((tag) => {
    if (!tags.value.has(tag)) selectedTags.value.delete(tag)
  })
})

watch(showTags, () => {
  selectedTags.value.clear()
})

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
    class="flex flex-col items-center justify-start h-screen overflow-y-auto overflow-x-hidden my-0 py-6 w-full md:px-4 px-6"
  >
    <div
      class="py-3 px-4 sticky top-0 dark:bg-black bg-white z-10 border border-gray-200 dark:border-gray-500 max-w-full text-xs md:text-md"
    >
      <div class="w-full flex justify-center gap-2 flex-wrap">
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
        <div
          class="flex items-center justify-center text-center cursor-pointer"
          @click="showTags = !showTags"
        >
          <span class="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-tag-icon lucide-tag w-3 h-3"
            >
              <path
                d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
              />
              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
      <div
        v-if="showTags"
        class="w-full flex flex-wrap gap-1 items-center mt-2"
      >
        <template v-for="tag in tags" :key="tag">
          <template v-if="!selectedTags.has(tag)">
            <a
              class="px-1 border border-gray-200 dark:border-gray-500 rounded-lg flex items-center justify-center"
              @click="selectedTags.add(tag)"
            >
              {{ tag }}
            </a>
          </template>
          <template v-else>
            <a
              class="px-1 border border-gray-200 dark:border-gray-500 rounded-lg flex items-center justify-center bg-emerald-500/40"
              @click="selectedTags.delete(tag)"
            >
              {{ tag }}
            </a>
          </template>
        </template>
      </div>
    </div>
    <div
      class="flex flex-col items-center timeline w-screen md:px-6 px-4 max-w-2xl"
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
