import { TimelineItem } from '../../../types/timeline'

const items: Omit<TimelineItem, 'category'>[] = [
  {
    title: 'Medium Level Technical Career in Music (cello)',
    description: `
    Universidad Autónoma de Nuevo León
    -
    Facultad de Música
    <br />
    Coursed as Cello Instrumentalist
    `,
    tags: ['Music', 'Cello', 'Harmony', 'Counterpoint'],
    date: {
      start: { day: 6, month: 8, year: 2016 },
      end: { day: 1, month: 1, year: 2019 }
    },
    img: {
      description: 'UANL logo',
      src: '/uanl-logo.png'
    }
  },
  {
    title: 'MSc Advanced Technologies For Financial Computing',
    description: `
    University of Edinburgh
    -
    School of informatics
    <br />
    Dissertation: 
    <i class="underline">Automated Financial Document Summarization using GPT</i>
    <br />
    <ul class="list-disc text-justify ml-4">
      <li>Crawled a database of financial documents of UK firms.</li>
      <li>
        Built a python module for querying a large document to a short context
        windowed model.
      </li>
      <li>
        Developed a user interface for querying the models about the collected documents
        and study their responses and the intermediate steps. 
      </li>
    </ul>
    <div class="flex flex-col gap-2">
      <img src="./ExperimentUI-ss1.jpeg" alt="well-doc" />
      <img src="./ExperimentUI-ss2.jpeg" alt="well-doc" />
    </div>
    `,
    tags: [
      'LLMs',
      'ChatGPT 4o',
      'FastAPI',
      'Python',
      'VueJS',
      'Data Collection/Crawling',
      'NLP'
    ],
    date: {
      start: { day: 11, month: 9, year: 2023 },
      end: { day: 21, month: 11, year: 2024 }
    },
    img: {
      description: 'university of edinburgh logo',
      src: '/university-of-edinburgh-logo.png',
      class: 'bg-white'
    }
  },
  {
    title: 'BSc Software Engineering',
    description: `
    Universidad Autónoma de Nuevo León
    -
    Facultad de Ingeniería Mecánica y Eléctrica
    <br />
    Tésis: 
    <i>
      <a href="https://sireac.rmercado.dev" target="_blank" class="underline">
        Sistema de recomendación de acordes basado en sentimientos
      </a>
    </i>
    `,
    tags: [
      'Laravel',
      'Data Collection (Surveys)',
      'Apriori',
      'Data Visualization',
      'Data Analysis'
    ],
    date: {
      start: { day: 1, month: 8, year: 2015 },
      end: { day: 31, month: 5, year: 2020 }
    },
    img: {
      description: 'UANL logo',
      src: '/uanl-logo.png'
    }
  },
  {
    title: 'International Baccalaureate Organization Diploma Programme',
    description: `
    Universidad de Monterrey
    - 
    Prepa Udem Unidad San Pedro
    <br />
    Extended Essay (Film):
    <i>Slow cinema in Carlos Reygadas' Films</i>
    <br />
    <i>Awarded with excellence</i>
    `,
    tags: ['Cinema'],
    date: {
      start: { day: 1, month: 8, year: 2013 },
      end: { day: 30, month: 6, year: 2015 }
    },
    img: {
      description: 'ibo logo',
      src: '/ib.jpg'
    }
  }
]

export const educationTimelineItems: TimelineItem[] = [
  ...items.map((item) => ({ ...item, category: 'studies' } as TimelineItem))
]
