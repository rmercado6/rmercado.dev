<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import TimelineComponent from '@/components/v2/TimelineComponent.vue'
import Education from '@/components/EducationComponent.vue'
import Skills from '@/components/SkillsComponent.vue'
import Contact from '@/components/ContactComponent.vue'
import Music from '@/components/MusicComponent.vue'
</script>

<template>
  <main class="md:px-10">
    <TheWelcome />
    <TimelineComponent />
    <Education />
    <Skills />
    <Music />
    <Contact />
  </main>
</template>
