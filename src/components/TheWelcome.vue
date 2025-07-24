<script setup lang="ts"></script>

<template>
  <div
    class="h-screen flex flex-col justify-center items-center px-8 md:pl-12 flex justify-center"
  >
    <section class="flex flex-col items-center max-w-2xl">
      <!-- content - start -->
      <div class="flex flex-col justify-center lg:pt-12 xl:pt-24">
        <div class="grid grid-cols-2 gap-1">
          <div
            class="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 flex items-center h-full text-center"
          >
            <h1>Ricardo Mercado Cavazos</h1>
          </div>
          <div class="max-w-full p-6 flex items-center">
            <img
              src="/profile.jpg"
              alt="profile pic"
              class="w-full aspect-square object-cover rounded-3xl"
            />
          </div>
        </div>
        <p
          class="xl:text-lg leading-relaxed mb-8 md:mb-12 text-justify italic opacity-70"
        >
          MSc. Advanced Technologies for Financial Computing at The University
          of Edinburgh.
        </p>

        <p class="xl:text-lg leading-relaxed mb-8 md:mb-12 text-justify">
          Dedicated software developer combining 4+ years of professional
          experience, adept at devising innovative software solutions, tailored
          to client requirements. Experienced in understanding client demands,
          identifying and addressing priorities to deliver cutting-edge
          improvements. Passionate musician and orchestral composer.
        </p>
      </div>
      <!-- content - end -->

      <!-- social - start -->
      <div class="flex justify-center lg:justify-start items-center gap-4">
        <span
          class="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase"
          >Contact</span
        >
        <span class="w-12 h-px bg-gray-200"></span>

        <div class="flex gap-4">
          <a href="mialto:contact@rmercado.dev">
            <svg class="w-5 h-5" width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7.175q.125 0 .262-.038q.138-.037.263-.112L19.6 8.25q.2-.125.3-.312q.1-.188.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.437q.1.188.3.288l7.075 4.425q.125.075.263.112q.137.038.262.038Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-mercado-cavazos-0607a2249"
            target="_blank"
          >
            <svg
              class="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>

          <a href="https://github.com/rmercado6" target="_blank">
            <svg
              class="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- social - end -->
    </section>
  </div>
</template>
