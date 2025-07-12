import { TimelineItem } from '../../../types/timeline'

const items: TimelineItem = [
  {
    title:
      '"Somnia - 7. Epitomé" was interpreted by Edinburgh University\'s Composers\' Orchestra',
    description: `
    <div class="w-full flex justify-center items-center">
      <iframe
        src="https://www.youtube.com/embed/J4nDhtjSfpI?si=kC61qx63R4Uo3pr_&amp;start=2171"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full"
      >
      </iframe>
    </div>
    `,
    date: {
      start: null,
      end: { day: 4, month: 4, year: 2024 }
    },
    img: {
      description: "Composer's Orchestra Spring concert 2024.",
      src: './compOrchSpring2024.png'
    }
  },
  {
    title:
      '"Advent of Music 2024 - Days 23 & 24" interpreted by the University of Edinburgh\'s Composers\' Orchestra',
    description: `
    <div class="w-full flex justify-center items-center">
      <iframe 
        src="https://www.youtube.com/embed/B_WB5iTuyA0?si=WFPIKP3JNZDQd6Wl&amp;start=46"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full"
      >
      </iframe>
    </div>
    `,
    date: {
      start: null,
      end: { day: 3, month: 4, year: 2025 }
    },
    img: {
      description: "Composer's Orchestra Spring concert 2025.",
      src: './compOrchSpring2025.png'
    }
  },
  {
    title: 'Advent of Music 2024',
    description: `
    <p>
        Inspired by "advent of code" coding I challenge, I designed a composing challenge tofollow during advent 2024
    </p>
    <p>
        Take a look at the challenge at
         <a class="text-emerald-500 underline underline-offset-2" href="https://adventofmusic.rmercado.dev/">
         adventofmusic.rmercado.dev
         </a>.
    </p>
    <div class="w-full flex justify-center items-center">
      <iframe  
        src="https://www.youtube.com/embed/videoseries?si=9m_1I6Ld4dW-Q1u-&amp;list=PLbrnaQABw0sDlpMEqARFtUb62G2UdYCsN"
        title="Advent of Music 2024"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="max-w-full"
      >
      </iframe>
    </div>
    `,
    date: {
      start: { day: 1, month: 12, year: 2024 },
      end: { day: 24, month: 12, year: 2024 }
    },
    img: {
      src: './AdventOfMusic2024.png',
      description: 'Advent of Music 2024'
    }
  },
  {
    title:
      'Played bass for recording of EP "Poderozo Nombre" by Zamar Adoración.',
    description: `<p>
      Played the bass for the four songs of the EP. <br />
      The Recording was done in collaboration with Latin Grammy nominated Producers Eduardo Bladinieres and Gil Elguezabal.<br />
      Two of the songs have been nominated for the 2025 Catholic Music Awards.
    </p>`,
    date: {
      end: { day: 14, month: 8, year: 2023 }
    },
    img: {
      src: './poderosoNombre.png',
      description: 'Poderoso Nombre EP'
    }
  },
  // new TimelineItem(
  //   'Played Bass for recording of Album "Juniper" by indie band Juniper.',
  //   `<p>
  //
  //   </p>`,
  //   {
  //     end: { day: 1, month: 10, year: 2022 }
  //   },
  //   'music'
  // ),
  {
    title: 'Bassist at Zamar Adoración',
    description: `<p>
      Played the bass for the Worship group Zamar Adoración.<br />
      Collaborated in the composition and recording of songs.
    </p>`,
    date: {
      start: { day: 23, month: 5, year: 2021 },
      end: { day: 31, month: 8, year: 2023 }
    },
    img: {
      src: './poderosoNombre.png',
      description: 'Zamar Adoración'
    }
  },
  {
    title: "Ryan Leach's composing competition July 2023",
    description: `<p>
      Submitted a piece for participating on the competition.
    </p>
    <div class="w-full">
      <iframe 
        src="https://www.youtube.com/embed/-8IpBZpXhcI?si=68aosP-nw5h-IKx9"
        title="Wanderer of the Terra Canyon"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full"
      >
      </iframe>
    </div>
    `,
    date: {
      end: { day: 15, month: 6, year: 2023 }
    },
    img: {
      src: './rlcc062023.png'
    }
  },
  {
    title: "Ryan Leach's composing competition January 2023",
    description: `<p>
      Submitted a piece for participating on the competition.
    </p>
    <div class="w-full">
      <iframe 
        src="https://www.youtube.com/embed/qKF2Tb7AGAE?si=MFg5CAVYjlaWLlKW"
        title="Ryan Leach\'s Composing Competition January 2023"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full"
      >
      </iframe>
    </div>
    `,
    date: {
      end: { day: 15, month: 1, year: 2023 }
    },
    img: {
      src: './rlcc012023.png'
    }
  }
]

export const musicTimelineItems: TimelineItem = [
  ...items.map((item) => ({ ...item, category: 'music' }))
]
