import { SlidersHorizontal } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface GalleryFilterProps {
  activeStyle: string;
  activeBudget: string;
  activeTimeline: string;
  onStyleChange: (style: string) => void;
  onBudgetChange: (budget: string) => void;
  onTimelineChange: (timeline: string) => void;
  onReset: () => void;
}

export function GalleryFilter({
  activeStyle,
  activeBudget,
  activeTimeline,
  onStyleChange,
  onBudgetChange,
  onTimelineChange,
  onReset
}: GalleryFilterProps) {
  const styles: FilterOption[] = [
    { value: 'all', label: 'All Styles' },
    { value: 'modern', label: 'Modern' },
    { value: 'traditional', label: 'Traditional' },
    { value: 'contemporary', label: 'Contemporary' },
    { value: 'transitional', label: 'Transitional' }
  ];

  const budgets: FilterOption[] = [
    { value: 'all', label: 'All Budgets' },
    { value: 'under-30k', label: 'Under $30K' },
    { value: '30k-50k', label: '$30K - $50K' },
    { value: '50k-75k', label: '$50K - $75K' },
    { value: '75k-100k', label: '$75K - $100K' },
    { value: 'over-100k', label: 'Over $100K' }
  ];

  const timelines: FilterOption[] = [
    { value: 'all', label: 'All Timelines' },
    { value: 'under-4weeks', label: 'Under 4 Weeks' },
    { value: '4-8weeks', label: '4-8 Weeks' },
    { value: '8-12weeks', label: '8-12 Weeks' },
    { value: 'over-12weeks', label: 'Over 12 Weeks' }
  ];

  const hasActiveFilters = activeStyle !== 'all' || activeBudget !== 'all' || activeTimeline !== 'all';

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary-900" />
          <h3 className="text-lg font-bold text-neutral-800">Filter Projects</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-primary-900 hover:text-primary-700 font-semibold transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-3">
            Style
          </label>
          <div className="flex flex-wrap gap-2">
            {styles.map((style) => (
              <button
                key={style.value}
                onClick={() => onStyleChange(style.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeStyle === style.value
                    ? 'bg-primary-900 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {style.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-3">
            Budget Range
          </label>
          <div className="flex flex-wrap gap-2">
            {budgets.map((budget) => (
              <button
                key={budget.value}
                onClick={() => onBudgetChange(budget.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeBudget === budget.value
                    ? 'bg-primary-900 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {budget.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-3">
            Project Timeline
          </label>
          <div className="flex flex-wrap gap-2">
            {timelines.map((timeline) => (
              <button
                key={timeline.value}
                onClick={() => onTimelineChange(timeline.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTimeline === timeline.value
                    ? 'bg-primary-900 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {timeline.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
