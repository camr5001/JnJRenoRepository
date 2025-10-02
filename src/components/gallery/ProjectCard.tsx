import { useState } from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';

interface ProjectCardProps {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  location?: string;
  duration?: string;
  completionDate?: string;
  budgetRange?: string;
  style?: string;
  onClick: () => void;
}

export function ProjectCard({
  title,
  beforeImage,
  afterImage,
  description,
  location,
  duration,
  completionDate,
  budgetRange,
  style,
  onClick
}: ProjectCardProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card hoverable>
      <div
        className="relative h-72 overflow-hidden rounded-t-xl bg-neutral-100 cursor-pointer group"
        onClick={onClick}
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        <img
          src={showAfter ? afterImage : beforeImage}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-bold text-neutral-800">
            {showAfter ? 'After' : 'Before'}
          </span>
        </div>

        {style && (
          <div className="absolute top-4 right-4 bg-primary-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-xs font-semibold text-white capitalize">{style}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm font-medium">Click to view full gallery</p>
        </div>
      </div>

      <CardBody className="space-y-3">
        <h3 className="text-xl font-bold text-neutral-800 hover:text-primary-900 transition-colors cursor-pointer" onClick={onClick}>
          {title}
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 pt-3 border-t border-neutral-100">
          {location && (
            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
              <MapPin className="w-4 h-4 text-primary-900" />
              <span>{location}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
              <Clock className="w-4 h-4 text-primary-900" />
              <span>{duration}</span>
            </div>
          )}
          {completionDate && (
            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
              <Calendar className="w-4 h-4 text-primary-900" />
              <span>{completionDate}</span>
            </div>
          )}
        </div>

        {budgetRange && (
          <div className="bg-primary-50 rounded-lg px-3 py-2">
            <span className="text-xs font-semibold text-primary-900">
              Investment: {budgetRange}
            </span>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
