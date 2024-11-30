import * as React from "react"

const Timeline = (({ className, ...props }, ref) => (
  <ol ref={ref} className={className} {...props} />
))
Timeline.displayName = "Timeline"

const TimelineItem =  (({ className, ...props }, ref) => (
  <li ref={ref} className={`flex ${className}`} {...props} />
))
TimelineItem.displayName = "TimelineItem"

const TimelineSeparator = (({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col items-center ${className}`} {...props} />
))
TimelineSeparator.displayName = "TimelineSeparator"

const TimelineDot =  (({ className, ...props }, ref) => (
  <div ref={ref} className={`w-10 h-10 rounded-full flex items-center justify-center ${className}`} {...props} />
))
TimelineDot.displayName = "TimelineDot"

const TimelineConnector =  (({ className, ...props }, ref) => (
  <div ref={ref} className={`w-1 h-full ${className}`} {...props} />
))
TimelineConnector.displayName = "TimelineConnector"

const TimelineContent = (({ className, ...props }, ref) => (
  <div ref={ref} className={`flex-1 ml-6 mb-10 ${className}`} {...props} />
))
TimelineContent.displayName = "TimelineContent"

export { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent }

