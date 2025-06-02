<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import Timeline from '@/components/v2/Timeline.vue'
import Education from '@/components/EducationComponent.vue'
import Skills from '@/components/SkillsComponent.vue'
import Contact from '@/components/ContactComponent.vue'
import Music from '@/components/MusicComponent.vue'
</script>

<template>
  <main class="md:px-10">
    <TheWelcome />
    <Timeline />
    <Education />
    <Skills />
    <Music />
    <Contact />
  </main>
</template>
