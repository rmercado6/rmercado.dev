<script setup>
import TimelineItem from './TimelineItem.vue'
import AxtelIcon from './icons/AxtelIcon.vue'
import CitiIcon from './icons/CitiIcon.vue'
</script>

<template>
  <div class="flex flex-col justify-center h-screen">
      <h1 class="text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
        Experiencia Laboral
      </h1>
    <TimelineItem>
      <template #icon>
        <AxtelIcon />
      </template>
      <template #heading>AXTEL</template>
      <template #time-period>sept. 2021 - actualidad</template>
      <template #job-title>Desarrollador de automatización y análisis de datos</template>

      <ul class="list-disc ml-10">
        <li>Automatización de recolección, procesamiento y almacenamiento de datos (Python, MySQL).</li>
        <li>Generación de vistas y procedimientos (SQL) y APIs (Flask) para consulta de la información recolectada.</li>
        <li>Generación de reportes de datos con indicadores clave para la toma de decisiones (PowerBI).</li>
        <li>Diseño de tableros de indicadores clave (Kibana).</li>
        <li>Desarrollo de portal de indicadores clave para uso de clientes (Python - Flask, Vue.js).</li>
        <li>Análisis de requerimientos de sistemas (Trato directo con cliente).</li>
        <li>Automatización de publicación de sistemas web CI/CD (Jenkins).</li>
      </ul>
    </TimelineItem>

    <TimelineItem>
      <template #icon>
        <CitiIcon />
      </template>
      <template #heading>CORPORACION EN INVESTIGACION TECNOLOGICA E INFORMATICA S.A.P.I DE C.V.</template>
      <template #time-period>ago. 2018 – sept. 2021</template>
      <template #job-title>Desarrollador Web FullStack</template>

      <ul class="list-disc ml-10">
        <li>Mantenimiento de aplicaciones web internas. (Java, ORACLE SQL, JavaScript).</li>
        <li>Desarrollador FullStack (C# y Java).</li>
      </ul>
    </TimelineItem>
  </div>
</template>
