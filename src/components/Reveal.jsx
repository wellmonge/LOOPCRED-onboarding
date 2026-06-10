import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Reveal({ children, className = '', style }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
