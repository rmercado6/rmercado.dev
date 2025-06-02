<script setup lang="ts">
import { computed, ref } from 'vue'
import { TimelineItem } from '../../types/timeline'

const selectedCategory = ref('all')

const timelineItems: TimelineItem[] = [
  new TimelineItem(
    'MSc Advanced Technologies For Financial Computing',
    'University of Edinburgh',
    {
      start: { day: 11, month: 9, year: 2023 },
      end: { day: 21, month: 11, year: 2024 },
    },
    'studies'
  ),
  new TimelineItem(
    'BSc Software Engineering',
    'Universidad Autónoma de Nuevo León',
    {
      start: { day: 1, month: 8, year: 2015 },
      end: { day: 31, month: 5, year: 2020 },
    },
    'studies'
  ),
  new TimelineItem(
    'Internation Baccaleureate Organization Diploma Progranmme',
    'Universidad de Monterrey',
    {
      start: { day: 1, month: 8, year: 2013 },
      end: { day: 30, month: 6, year: 2015 },
    },
    'studies'
  ),
  new TimelineItem(
    'Professional Experience',
    'Professional Experience',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 },
    },
    'professional'
  ),
  new TimelineItem(
    'Professional Experience',
    'Professional Experience',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 },
    },
    'professional'
  ),
  new TimelineItem(
    'Personal Projects',
    'Personal Projects',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 },
    },
    'personal'
  ),
  new TimelineItem(
    'Music',
    'Music',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 },
    },
    'music'
  ),
]

const filteredTimelineItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return timelineItems
  }
  return timelineItems.filter(
    (item) => item.category === selectedCategory.value
  )
})

function getFilteredTimelineItemsByYear(year: number) {
  return filteredTimelineItems.value.filter(
    (item) => item.date.end.year === year
  )
}

function getYears() {
  const years = new Set<number>()
  for (const item of filteredTimelineItems.value) {
    years.add(item.date.end.year)
  }
  return Array.from(years).sort((a, b) => b - a)
}
</script>
<template>
  <div class="flex flex-col justify-center min-h-screen my-10 md:my-0">
    <div class="flex justify-center gap-4 pb-6">
      <a @click="selectedCategory = 'all'">All</a>
      <a @click="selectedCategory = 'studies'">Studies</a>
      <a @click="selectedCategory = 'professional'">Professional Experience</a>
      <a @click="selectedCategory = 'personal'">Personal Projects</a>
      <a @click="selectedCategory = 'music'">Music</a>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <div
        class="flex rounded-full p-2 border border-gray-200 w-fit aspect-square justify-center items-center text-xs text-gray-500"
      >
        <span>Today</span>
      </div>
      <template v-for="year in getYears()">
        <template
          v-for="item in getFilteredTimelineItemsByYear(year)"
          :key="item.title"
        >
          <div class="flex flex-col p-2 border border-gray-200">
            <span>{{ item.title }}</span>
            <span class="hidden">{{ item.description }}</span>
            <span>{{ item.getDateString() }}</span>
          </div>
        </template>
        <span>{{ year }}</span>
      </template>
    </div>
  </div>
</template>
<style scoped>
a {
  cursor: pointer;
}
</style>
