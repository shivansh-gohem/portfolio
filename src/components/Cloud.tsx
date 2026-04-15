const Cloud = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 128 64" className={className} fill="currentColor">
    <rect x="32" y="0" width="64" height="8" />
    <rect x="24" y="8" width="80" height="8" />
    <rect x="16" y="16" width="16" height="8" />
    <rect x="80" y="16" width="32" height="8" />
    <rect x="0" y="24" width="128" height="8" />
    <rect x="0" y="32" width="128" height="8" />
    <rect x="8" y="40" width="112" height="8" />
    <rect x="16" y="48" width="96" height="8" />
    <rect x="32" y="56" width="64" height="8" />
  </svg>
);

export default Cloud;
