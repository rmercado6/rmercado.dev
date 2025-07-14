import { TimelineItem } from '../../../types/timeline'

const items = [
  {
    title: 'Software Developer Level 2',
    description: 'Podfather',
    description: `
    <p>Podfather; Edinburgh, Scotland.</p>
    <br />
    <p class="font-semibold">Highlights:</p>
    <ul class="list-disc text-justify ml-4">
      <li>
        Collaborated to migrate Vue2 SPA to Vue3 while spotting and fixing
        visual and functional bugs.
      </li>
      <li>
        Contributed to the development of a Reorderable Table component through
        the implementation of visual and functional logic as well as
        contributing to the corresponding backend logic development.
      </li>
    </ul>
    `,
    tags: [
      'VueJS',
      'TypeScript',
      'PHP',
      'Doctrine Entities',
      'Symphony',
      'TDD'
    ],
    date: {
      start: { day: 11, month: 11, year: 2024 },
      end: null
    },
    img: {
      description: 'Podfather Logo',
      src: './podfather_logo.jpeg'
    }
  },
  {
    title: 'Fullstack Web developer intern at CITI',
    description: `
    <p>Corporación en Investigación Tecnológica e Informática (CITI); Nuevo León, México.</p>
    <br />
    <p class="font-semibold">Highlights:</p>
    <ul class="list-disc text-justify ml-4">
      <li>
        Developed automated test cases for an online banking mobile application.
      </li>
      <li>
        Gave maintenance to legacy codebases which included Struts web applications and SOAP APIs.
      </li>
      <li>
        Documented REST APIs.
      </li>
    </ul>
    `,
    tags: [
      'Java',
      'JS',
      'Spring framework',
      'jQuery',
      'bootstrap',
      'Oracle SQL Server',
      'jUnit',
      'Struts',
      'SOAP APIs',
      'REST APIs'
    ],
    date: {
      start: { day: 6, month: 8, year: 2018 },
      end: { day: 6, month: 8, year: 2019 }
    },
    img: {
      src: './citi.webp',
      description: 'CITI Logo',
      class: 'bg-white'
    }
  },
  {
    title: 'Senior Software Developer',
    description: `
    <p>Accenture México; Nuevo León, México.</p>
    <br />
    <p class="font-semibold">Highlights:</p>
    <ul class="list-disc text-justify ml-4">
      <li>
        Analysed, designed, and developed a single robust Python script to interconnect multiple
        systems to a central system for a financial retirement company in the US. The script was
        configurable and adaptable through JSON files, reducing the workload to 1 script instead of
        10. This enabled the team to meet delivery timelines.
      </li>
      <li>
        Conducted technical interviews to recruit Python developers for the project.
      </li>
      <li>
        Developed web services applications for a Healthcare company in the US. Improved team
        performance by developing Postman collections for endpoint validation of Rest services,
        resulting in reduced time spent testing endpoints.
      </li>
    </ul>
    `,
    tags: [
      'Java',
      'Python',
      'Client interaction',
      'Design of solutions',
      'Unit Testing',
      'Microservices',
      'Monoliths',
      'AWS Lambda',
      'Jenkins',
      'Spring Boot'
    ],
    date: {
      start: { day: 31, month: 10, year: 2022 },
      end: { day: 1, month: 9, year: 2023 }
    },
    img: {
      description: 'Accenture Logo',
      src: '/accenture.png',
      class: 'bg-white'
    }
  },
  {
    title: 'Data Scientist',
    description: `
    <p>Axtel; Nuevo León, México.</p>
    <br />
    <p class="font-semibold">Highlights:</p>
    <ul class="list-disc text-justify ml-4">
      <li>
        Analysed, designed, developed, and implemented Python scripts to collect data from network
        hardware and generate automated PowerBI reports which replaced manual ones, enabling
        the department to focus on insights, and enhanced productivity for faster decision-making in
        response to volatility in network capacity demands. Worked closely with other departments
        to generate a proper data pipeline and obtain intranet hosting and networking for the
        solution’s various components.
      </li>
      <li>
        Collaborated in multidisciplinary teams to collect required resources and data for projects
        while leading the development team.
      </li>
      <li>
        Leveraged the service’s data to develop a client-oriented web application from scratch using
        Flask framework and Vue.js. This added value to the service by allowing clients to visualize
        data relevant to their contracted services.
      </li>
    </ul>
    `,
    tags: [
      'Python',
      'Flask',
      'VueJS',
      'Microsoft PowerBI',
      'MySQL',
      'Jenkins',
      'Linux on-premises hosting'
    ],
    date: {
      start: { day: 6, month: 9, year: 2021 },
      end: { day: 28, month: 10, year: 2022 }
    },
    img: {
      description: 'Axtel Logo',
      src: '/axtel.png'
    }
  },
  {
    title: 'Desarrollador Web Full Stack',
    description: `
    <p>Corporación en Investigación Tecnológica e Informática (CITI); Nuevo León, México.</p>
    <br />
    <p class="font-semibold">Highlights:</p>
    <ul class="list-disc text-justify ml-4">
      <li>
        Developed a package using Java’s reflection API that contained annotations and classes
        facilitating seamless integration between the new transactional product and the clients’
        services.
      </li>
      <li>
        Designed and developed a real-time chat in a .NET framework web application for a Mexican
        government department. Worked closely with the security department to design an alternate
        solution for web sockets since they were blocked by a security policy. Decided to use
        JS web workers as a solution.
      </li>
      <li>
        Developed features on the front-end and back-end of a transaction website for a Mexican
        mobile telecommunications provider using Spring Framework web applications and
        ActiveMQ.
      </li>
      <li>
        On-demand bug-fixing for a productive application. Worked closely with the Operations
        department to deliver on-time quality deployments.
      </li>
    </ul>
    `,
    tags: [
      'Java',
      'C#',
      'JS',
      'Spring framework',
      '.NET framework',
      'jQuery',
      'bootstrap',
      'Oracle SQL Server',
      'Microsoft SQL Server',
      'ActiveMQ'
    ],
    date: {
      start: { day: 1, month: 1, year: 2019 },
      end: { day: 1, month: 1, year: 2021 }
    },
    img: {
      description: 'CITI Logo',
      src: '/citi.webp',
      class: 'bg-white'
    }
  }
]

export const professionalTimelineItems: TimelineItem[] = [
  ...items.map((x) => ({ ...x, category: 'professional' }))
]
