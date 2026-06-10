import Logo from './Logo'

const WA = 'https://wa.me/5565992082256'

const metrics = [
  { num: '100%', label: 'Funciona Offline' },
  { num: 'SAC',  label: 'Amortização Integrada' },
  { num: 'AES',  label: 'Backup Criptografado' },
  { num: 'Multi', label: 'Usuários em Rede' },
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="tag">Software de Gestão de Empréstimos</div>
        <div className="hero-logo">
          <Logo height={72} />
        </div>
        <h1>
          Gerencie sua carteira<br />
          <span className="gold">com total controle.</span>
        </h1>
        <p>
          LOOPCRED é o sistema desktop completo para gestão de carteiras de crédito —
          contratos SAC, parcelas automáticas, controle de inadimplência e relatórios,
          tudo em um só lugar. Sem internet. Sem mensalidade de servidor.
        </p>
        <div className="hero-ctas">
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary">Adquirir Licença</a>
          <a href="#how" className="btn btn-ghost">Ver Como Funciona</a>
        </div>
        <div className="hero-metrics">
          {metrics.map(m => (
            <div className="metric" key={m.label}>
              <div className="metric-num">{m.num}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="hero-divider" />
      </div>
    </section>
  )
}
