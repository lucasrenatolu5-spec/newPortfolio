interface IconProps {
  className?: string
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5C22 6.6 17.5 2 12 2Z" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A4.5 4.5 0 0 1 16 8Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.38 5.07L2 22l5.25-1.38c1.43.78 3.07 1.22 4.79 1.22 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 1.8c4.48 0 8.11 3.63 8.11 8.11 0 4.48-3.63 8.11-8.11 8.11-1.64 0-3.16-.48-4.44-1.31l-.32-.2-3.1.81.83-3.02-.21-.31a8.05 8.05 0 0 1-1.27-4.38c0-4.48 3.63-8.11 8.51-8.11Zm4.48 11.6c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.12-.12.27-.31.4-.46.13-.16.17-.27.26-.45.08-.18.04-.33-.04-.46-.08-.12-.5-1.2-.69-1.65-.18-.43-.37-.37-.5-.38h-.43c-.14 0-.37.05-.57.27-.2.22-.76.74-.76 1.81 0 1.07.78 2.1.89 2.25.11.14 1.5 2.29 3.65 3.12 1.82.7 2.2.56 2.6.52.4-.04 1.29-.53 1.47-1.04.18-.51.18-.94.13-1.04-.05-.1-.18-.16-.4-.27Z" />
    </svg>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="5" y1="19" x2="19" y2="5" />
      <polyline points="9 5 19 5 19 15" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/* ---- skill icons ---- */

export function ReactIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#5ee9c8" />
      <g stroke="#5ee9c8" strokeWidth="1.1">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#4f8bff" opacity="0.15" />
      <text x="12" y="16.5" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="700" fill="#4f8bff" textAnchor="middle">
        TS
      </text>
    </svg>
  )
}

export function JavaScriptIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e" opacity="0.15" />
      <text x="12" y="16.5" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#f7df1e" textAnchor="middle">
        JS
      </text>
    </svg>
  )
}

export function Html5Icon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#ff6b4a" strokeWidth="1.6">
      <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" />
      <path d="M7 7h10l-.4 4.5H8.6M7.5 11.5l.4 5 4 1.1 4-1.1.4-4.6" />
    </svg>
  )
}

export function Css3Icon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4f8bff" strokeWidth="1.6">
      <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" />
      <path d="M16.5 7h-9l.3 3.4 6.7.1-.5 5.5-3.2.9-3.2-1-.2-2" />
    </svg>
  )
}

export function GitIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4.5" r="1.8" />
      <circle cx="6" cy="16" r="1.8" />
      <circle cx="18" cy="16" r="1.8" />
      <path d="M12 6.3 6 14.2M12 6.3l6 7.9M7.5 16h9" />
    </svg>
  )
}

export function ViteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 19 6 19 14 12 22 5 14 5 6" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="5" y1="6" x2="19" y2="14" />
      <line x1="19" y1="6" x2="5" y2="14" />
    </svg>
  )
}

/* ---- pillar icons ---- */

export function CodeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

export function DeviceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8 7 17M17 7l2.8-2.8" />
    </svg>
  )
}
