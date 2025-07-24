import { TimelineItem } from '../../../types/timeline'

const items: Omit<TimelineItem, 'category'>[] = [
  {
    title: 'Catholic Missionary',
    description: `
    <p>Impuslo</p>
    <p>Impulso is a catholic youth movement from the Archdiocese of Monterrey in my hometown: Monterrey, Nuevo León, México.</p><br />
    <p>Impuslo provided me with a space to come closer to God and serve the others. Learn to love like Jesus has loved us before.</p><br />
    <p>
      This youth movement challenged me in many ways, primarily by teaching me to go out of my comfort zone and help the others.
      It provided me with opportunities to put my gifts to the service of others while teaching me many of my today core values
      which are centered around collaboration (team work) and trust in those who are around you.
    </p><br />
    <p>
      Impulso trusted in me to lead their communities in multiple times, including leading retreat planning and execution, 
      mission planning and execution, coordinating the group presence in one of the parishes, and even coordinating the whole
      movement for the entire Archdiocese.
    </p><br />
    <p>
      I could write many entrances in this timeline about the things that I've done through this ministry, but I decided to
      focus them all in one entrance. After all, 10 years is a long time!
      <br /><br />
      I can only express how grateful I am to this movement as it has heavily contributed to
      who I am today.
    </p>
    `,
    date: {
      start: { day: 23, month: 6, year: 2013 },
      end: { day: 13, month: 8, year: 2023 }
    },
    tags: [],
    img: {
      src: '/impulso.png',
      description: 'Impulso Logo',
      class: 'bg-white'
    }
  },
  {
    title: 'Seven Sacred Sactuaries',
    description: `
    <p>Edinburgh Jesuit Church</p>
    <p>
      Developed a website as a guide to the Seven Sacred Sanctuaries pilgrimage hosted by the
      Edinburgh jesuit Church of the Sacred heart.
    </p>
    <a class="text-emerald-600 underline" href="https://sevensacredsanctuaries2025.onrender.com/" target="_blank">Seven Sacred Sanctuaries pilgrimage 2025 web guide</a>.
    `,
    date: {
      end: { day: 18, month: 4, year: 2025 }
    },
    tags: []
  },
  {
    title: 'Second Saturday Worship',
    description: `
    <p>Played the guitar for a monthly worship and eucharistic adoration night hosted by the Edinburgh Jesuit Church of the Sacred Heart.</p>
    `,
    date: {
      start: { day: 1, month: 1, year: 2024 }
    },
    tags: []
  },
  {
    title: 'Open Doors',
    description: `
    <p>Open doors is a catholic initiative which aims to bridge teh distance between catholic communities in Edinburgh.</p>
    <br/>
    <p>My main contribution to this is the development of an online application for publishing the communities activities.
    <br/>
    This is currently a WIP.
    </p>
    `,
    date: {
      start: { day: 1, month: 3, year: 2025 }
    },
    tags: []
  }
]

export const spiritualTimelineItems: TimelineItem[] = [
  ...items.map((x) => ({ ...x, category: 'spiritual' } as TimelineItem))
]
