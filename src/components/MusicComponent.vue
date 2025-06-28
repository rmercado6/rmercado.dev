<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="w-full">
      <div class="flex flex-col p-4 sm:p-8">
        <div class="mb-4 sm:mb-8">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold">
            Listen to some of my compositions
          </h2>
        </div>
        <div class="w-full flex justify-center">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/videoseries?si=MNypf3szBOpE5mEX&amp;list=PLbrnaQABw0sBNDWW8cMZ-ZCkZNc7SOeul"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>
