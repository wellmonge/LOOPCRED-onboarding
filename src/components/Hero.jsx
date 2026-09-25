import { DOWNLOAD_URL, WHATSAPP_LINK } from '../config'

const metrics = [
  { num: '100%', label: 'Funciona offline' },
  { num: 'SAC',  label: 'Amortização integrada' },
  { num: 'AES-256', label: 'Backup criptografado' },
  { num: 'Multi', label: 'Usuários em rede' },
]

const BARS = [30, 45, 38, 62, 55, 78, 100]

function DashboardMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <span className="mock-dot" /><span className="mock-dot" /><span className="mock-dot" />
        <span className="mock-title">LOOPCRED · Dashboard</span>
      </div>
      <div className="mock-body">
        <div className="mock-stats">
          <div className="mock-stat"><span>Saldo em aberto</span><i style={{ width: '80%', background: 'var(--amber)' }} /></div>
          <div className="mock-stat"><span>Inadimplência</span><i style={{ width: '50%', background: '#f87171' }} /></div>
          <div className="mock-stat"><span>Recebido no período</span><i style={{ width: '65%', background: '#4ade80' }} /></div>
        </div>
        <div className="mock-chart">
          <span>Recebimentos por mês</span>
          <div className="mock-bars">
            {BARS.map((h, i) => (
              <div key={i} className={i === BARS.length - 1 ? 'on' : ''} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="mock-row">
          <div className="mock-avatar" />
          <div className="mock-lines"><i style={{ width: '45%' }} /><i style={{ width: '28%' }} /></div>
          <b className="ok">Em dia</b>
        </div>
        <div className="mock-row">
          <div className="mock-avatar" />
          <div className="mock-lines"><i style={{ width: '38%' }} /><i style={{ width: '24%' }} /></div>
          <b className="late">Em atraso</b>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero">
      <svg className="hero-rings" width="900" height="900" viewBox="0 0 900 900" fill="none" aria-hidden="true">
        <circle cx="450" cy="450" r="440" stroke="#F59E0B" strokeOpacity="0.10" strokeWidth="1.5" />
        <circle cx="450" cy="450" r="340" stroke="#F59E0B" strokeOpacity="0.14" strokeWidth="1.5" strokeDasharray="4 10" />
        <circle cx="450" cy="450" r="240" stroke="#F59E0B" strokeOpacity="0.18" strokeWidth="1.5" />
      </svg>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="tag">Software de Gestão de Empréstimos</div>
            <h1>
              Gerencie sua carteira{' '}
              <span className="gold">com total controle.</span>
            </h1>
            <p>
              LOOPCRED é o sistema desktop completo para gestão de carteiras de crédito —
              contratos SAC, parcelas automáticas, controle de inadimplência e relatórios,
              tudo em um só lugar. Sem internet. Sem mensalidade de servidor.
            </p>
            <div className="hero-ctas">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">Adquirir Licença</a>
              <a href={DOWNLOAD_URL} download className="btn btn-ghost">Baixar e Testar Grátis</a>
            </div>
          </div>
          <DashboardMock />
        </div>
        <div className="hero-metrics">
          {metrics.map(m => (
            <div className="metric" key={m.label}>
              <div className="metric-num">{m.num}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
