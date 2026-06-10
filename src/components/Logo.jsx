import { useId } from 'react'

export default function Logo({ height = 40 }) {
  const uid = useId().replace(/:/g, '')
  const g = `g${uid}`
  const gb = `gb${uid}`
  return (
    <svg height={height} viewBox="0 0 480 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id={gb} x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" stopOpacity="0.18" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <circle cx="34" cy="60" r="26" stroke={`url(#${g})`} strokeWidth="8" fill={`url(#${gb})`} />
      <circle cx="86" cy="60" r="26" stroke={`url(#${g})`} strokeWidth="8" fill={`url(#${gb})`} />
      <circle cx="60" cy="60" r="20" fill="#1a1410" stroke="#F59E0B" strokeWidth="5" />
      <text x="60" y="68" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="20" fill="#F59E0B">¢</text>
      <text x="128" y="72" fontFamily="Syne,Georgia,serif" fontWeight="700" fontSize="44" letterSpacing="2" fill="#faf5eb">LOOP</text>
      <text x="268" y="72" fontFamily="Syne,Georgia,serif" fontWeight="800" fontSize="44" letterSpacing="2" fill="#F59E0B">CRED</text>
    </svg>
  )
}
