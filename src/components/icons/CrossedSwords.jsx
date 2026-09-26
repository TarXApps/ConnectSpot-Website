export default function CrossedSwords({ className, strokeWidth = 1.5, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="16.3" y1="19" x2="19" y2="16.3" />
      <line x1="19" y1="19" x2="21" y2="21" />
      <line x1="19" y1="5" x2="5" y2="19" />
      <line x1="7.7" y1="19" x2="5" y2="16.3" />
      <line x1="5" y1="19" x2="3" y2="21" />
    </svg>
  );
}
