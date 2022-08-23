<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center my-10 md:my-0">
    
    <div class="w-full">
        <h1 class="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
          Educación
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          <!-- image - start -->
          <a href="https://sireac.rmercado.dev/" class="group h-48 md:h-80 md:col-span-3 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="/fime.jpeg" loading="lazy" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 via-gray-800 to-transparent opacity-70 absolute inset-0 pointer-events-none"></div>

            <div class="inline-block flex flex-col text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              <div>
                <span class="font-bold">Ingeniero en Tecnología de software</span>
                <span class="italic ml-3 text-sm">(ago. 2015 – mayo 2020)</span>
              </div>
              <span>Universidad Autónoma de Nuevo León; Facultad de ingeniería Mecánica y Eléctrica.</span>
              <span class="group-hover:underline">Tesis: Sistema de recomendación de acordes a partir de la expresión de sentimientos deseada.</span>
            </div>            
          </a>
          <!-- image - end -->

          <!-- image - start -->
          <a class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="/ib.jpg" loading="lazy" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 to-transparent opacity-70 absolute inset-0 pointer-events-none"></div>

            <div class="inline-block flex flex-col text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              <div>
                <span class="font-bold">Diploma del Bachillerato Internacional</span>
                <span class="italic ml-3 text-sm">(ago. 2012 – mayo 2015)</span>
              </div>
              <span>Universidad de Monterrey</span>
            </div>
          </a>
          <!-- image - end -->

          <!-- image - start -->
          <a href="https://kaggle.com" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="/kaggle.png" loading="lazy" class="w-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 to-transparent opacity-70 absolute inset-0 pointer-events-none"></div>

            <div class="inline-block flex flex-col text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              <div>
                <span class="font-bold">Autocapacitación de Machine Learning</span>
                <span class="italic ml-3 text-sm">(2022)</span>
              </div>
              <span>kaggle.com</span>
            </div>
          </a>
          <!-- image - end -->

          <!-- image - start -->
          <a href="https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="/dockerkubernetes.jpg" loading="lazy" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 via-gray-800 to-transparent opacity-70 absolute inset-0 pointer-events-none"></div>

            <div class="inline-block flex flex-col text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              <div>
                <span class="font-bold">Autocapacitación de Docker y Kubernetes</span>
                <span class="italic ml-3 text-sm">(2021)</span>
              </div>
              <span>TechWorld with Nana</span>
            </div>
          </a>
          <!-- image - end -->
        </div>
    </div>

  </div>
</template>
