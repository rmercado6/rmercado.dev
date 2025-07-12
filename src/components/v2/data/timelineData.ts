import { TimelineItem } from '../../../types/timeline'
import { educationTimelineItems } from './education'
import { professionalTimelineItems } from './professional'
import { musicTimelineItems } from './music'

export const timelineItems: TimelineItem[] = [
  ...professionalTimelineItems,
  ...educationTimelineItems,
  ...musicTimelineItems
]
