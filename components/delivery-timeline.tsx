import { TrackingEntry } from "../app/inquiry/data";

interface DeliveryTimelineProps {
  timeline: TrackingEntry["timeline"];
}

export function DeliveryTimeline({ timeline }: DeliveryTimelineProps) {
  return (
    <div className="relative space-y-0">
      {/* Continuous vertical line that spans the entire timeline */}
      <div className="absolute left-1.5 top-1.5 bottom-0 w-0.5 bg-gray-200 h-[calc(100%-24px)]"></div>
      
      {timeline.map((event, index) => (
        <div key={index} className="flex items-start gap-4 py-3 relative group">
          {/* Circle indicator */}
          <div className="relative z-10">
            <div className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-pink-500' : 'bg-gray-400'
            } border-2 border-white transition-transform duration-200 group-hover:scale-110`} />
          </div>
          
          {/* Content */}
          <div className="flex-1 transition-all duration-200 ease-in-out group-hover:translate-x-0.5">
            <p className="text-sm text-gray-600 mb-1">{event.timestamp}</p>
            <p className="text-sm">{event.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 