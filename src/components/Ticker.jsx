const ITEMS = [
  'Amortização SAC Integrada',
  'Contratos Automáticos',
  'Backup AES-256',
  'Controle de Inadimplência',
  'Exportação em PDF',
  'Multi-Usuário em Rede Local',
  'Dashboard em Tempo Real',
  '100% Offline',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
