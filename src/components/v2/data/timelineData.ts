import { TimelineItem } from '../../../types/timeline'
import { educationTimelineItems } from './education'
import { professionalTimelineItems } from './professional'
import { musicTimelineItems } from './music'
import { personalProjects } from './personalProjects'

export const timelineItems: TimelineItem[] = [
  ...professionalTimelineItems,
  ...educationTimelineItems,
  ...musicTimelineItems,
  ...personalProjects
]
