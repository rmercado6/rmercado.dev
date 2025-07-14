import { TimelineItem } from '../../../types/timeline'

const items: TimelineItem[] = [
  {
    title: 'Kutsu.io',
    description: `
      <p>
        Event invitation management system.
        <br />
        Used twice for a wedding and for a Quinceañera party.
        Has the potential to be grown into a fully fledged product.
        <br />
        An example invitation can be seen
        <a 
          class="text-emerald-500 underline underline-offset-2"
          href="https://kutsu.io/xv-tania/d55d92"
          target="_blank"
        >here</a>.
      </p>`,
    tags: ['PHP', 'JavaScript', 'Laravel', 'Postgres', 'AlpineJS', 'Livewire'],
    date: {
      start: { day: 1, month: 12, year: 2021 },
      end: { day: 31, month: 1, year: 2022 }
    }
  },
  {
    title: 'WellDoc',
    description: `
    <p>
      Dental clinic administration system.
      <br />
      <div class="flex flex-col gap-2">
        <img src="./WellDoc-screen1.jpeg" alt="well-doc" />
        <img src="./WellDoc-screen2.jpeg" alt="well-doc" />
      </div>
    </p>
    `,
    tags: ['PHP', 'Laravel', 'Postgres', 'AlpineJS', 'Livewire'],
    date: {
      start: { day: 1, month: 8, year: 2018 },
      end: { day: 1, month: 9, year: 2021 }
    },
    img: {
      src: './welldoc.png',
      description: 'WellDoc logo',
      class: 'bg-white'
    }
  },
  {
    title: 'Laboratorios de Física - Control de asistencia',
    description: `
    <p>
      Attendance control system for Physics laboratories of the School of
      Electrical and Mechanical Engineering (FIME).
      <div>
        <img
          src="./LaboratoriosFIME-ss1.jpeg"
          alt="Physics Labs attendance control webapp"
        >
      </div> 
    </p>
    `,
    tags: ['PHP', 'JavaScript', 'Laravel', 'Postgres', 'Livewire'],
    date: {
      start: { day: 1, month: 9, year: 2018 },
      end: { day: 1, month: 8, year: 2020 }
    },
    img: {
      src: './fime-logo-1.png',
      description: 'FIME Logo',
      class: 'bg-white'
    }
  },
  {
    title: 'Tutorías',
    description: `
    <p>
      Management tool for the School of Mechanical and Electrical Engineering's (FIME)
      Tutoring department. Allowed to analyze student's results and determine which
      student's would be better benefited by the tutoring program.
    </p>
    `,
    tags: ['Python'],
    date: {
      start: { day: 1, month: 1, year: 2019 },
      end: { day: 31, month: 3, year: 2020 }
    },
    img: {
      src: './fime-logo-1.png',
      description: 'FIME Logo',
      class: 'bg-white'
    }
  },
  {
    title: 'Rally FIME',
    description: `
    <p>
      Registration system for a competency hosted by the School of Mechanical 
      and Electrical Engineering (FIME).
    </p>
    `,
    date: {
      start: { day: 1, month: 1, year: 2019 },
      end: { day: 30, month: 11, year: 2019 }
    },
    img: {
      src: './fime-logo-1.png',
      description: 'FIME Logo',
      class: 'bg-white'
    }
  },
  {
    title: 'Orientación Vocacional',
    description: `
    <p>
      Survey system developed for local government body.
      Aimed to collect young people's interest and allow the government to
      offer education programmes that appeal to them. 
    </p>
    `,
    tags: ['C#', '.NET Framework', 'Javascript', 'JQuery'],
    date: {
      start: { day: 1, month: 8, year: 2019 },
      end: { day: 31, month: 10, year: 2019 }
    }
  },
  {
    title: 'Gerente Virtual',
    description: `
    <p>
      Specialized Restaurant management system.
    </p>
    `,
    tags: ['C#', '.NET Framework', 'Javascript', 'JQuery'],
    date: {
      start: { day: 1, month: 1, year: 2019 },
      end: { day: 31, month: 3, year: 2020 }
    }
  },
  {
    title: 'UHome API',
    description: `
    <p>
      External API for a local real state search engine 'UHome'. 
    </p>
    `,
    tags: ['PHP', 'Laravel', 'Postgres'],
    date: {
      start: { day: 1, month: 9, year: 2019 },
      end: { day: 31, month: 12, year: 2019 }
    }
  },
  {
    title: 'Marketing campaign video game for Caprice',
    description: `
    <p>
      Testing and bug-fixing for a small video game developed in python.
    </p>
    `,
    tags: ['Python'],
    date: {
      start: { day: 1, month: 11, year: 2019 },
      end: { day: 30, month: 11, year: 2019 }
    }
  }
]

export const personalProjects: TimelineItem[] = [
  ...items.map((item) => ({ ...item, category: 'personal' }))
]
