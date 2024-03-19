<script setup>
import TimelineItem from './TimelineItem.vue'
import AccentureIcon from './icons/AccentureIcon.vue'
import AxtelIcon from './icons/AxtelIcon.vue'
import CitiIcon from './icons/CitiIcon.vue'
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen my-10 md:my-0">
    <h1 class="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
      Work Experience
    </h1>
    <div class="ml-10">
      <TimelineItem>
        <template #icon>
          <AccentureIcon />
        </template>
        <template #heading>Accenture Mexico</template>
        <template #time-period>Oct. 2022 - Sept. 2023</template>
        <template #job-title>Senior Software Developer</template>

        <ul class="list-disc ml-10">
          <li>Microservices Development (Java and Spring Boot).</li>
          <li>Unit testing (JUnit).</li>
          <li>Integration testing (Cucumber).</li>
          <li>Developing a data manipulation project from scratch as a solo developer (Python, AWS Lambda).</li>
          <li>Recognized by clients as <i>"Super Dexterous"</i> for creative design proposals and implementation of solutions.</li>
        </ul>
      </TimelineItem>

      <TimelineItem>
        <template #icon>
          <AxtelIcon />
        </template>
        <template #heading>AXTEL</template>
        <template #time-period>Sept. 2021 - Sept. 2022</template>
        <template #job-title>Automation Developer</template>

        <ul class="list-disc ml-10">
          <li>Automate data collection, processing, and storage (Python, MySQL).</li>
          <li>Develop views, stored procedures (SQL), and REST APIs (Flask) for querying the collected data.</li>
          <li>Develop a web application that displays key indicators information for client use. (Python - Flask, Vue.js).</li>
          <li>System requirements analysis (directly with client).</li>
          <li>System deployment automation CI/CD (Jenkins).</li>
        </ul>
      </TimelineItem>

      <TimelineItem>
        <template #icon>
          <CitiIcon />
        </template>
        <template #heading>CORPORACION EN INVESTIGACION TECNOLOGICA E INFORMATICA S.A.P.I DE C.V.</template>
        <template #time-period>Aug. 2018 – Sept. 2021</template>
        <template #job-title>Junior FullStack Developer</template>

        <ul class="list-disc ml-10">
          <li>Maintenance of internal web applications (Java, ORACLE SQL, JavaScript, ActiveMQ, Spring, Sonar).</li>
          <li>Full Stack web applications development (Java, Spring, Maven, Oracle SQL, JavaScript).</li>
          <li>RESTful services development (Java, Spring Boot, Swagger UI for documentation).</li>
        </ul>
      </TimelineItem>
    </div>
  </div>
</template>
