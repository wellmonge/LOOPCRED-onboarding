import Reveal from './Reveal'

const WA = 'https://wa.me/+556574004208?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20uma%20licen%C3%A7a%20do%20LOOPCRED.%20Poderiam%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F'
const DOWNLOAD = '/LoopCred-1.1.0.msi'

const PLANS = [
  {
    name: 'Licença Servidor',
    tag: 'SERVIDOR',
    price: '699',
    period: '/ ano',
    desc: 'Para uso solo ou como hub central da sua equipe. Contém o banco de dados e toda a lógica do sistema.',
    note: 'Pode ser adquirida sozinha ou junto com licenças Cliente.',
    features: [
      { text: 'Banco de dados local (offline)', on: true },
      { text: 'Clientes e contratos ilimitados', on: true },
      { text: 'Amortização SAC', on: true },
      { text: 'Controle de parcelas e pagamentos', on: true },
      { text: 'Dashboard financeiro', on: true },
      { text: 'Exportação PDF / HTML', on: true },
      { text: 'Backup criptografado AES-256', on: true },
      { text: 'Aceita conexões de Clientes em rede', on: true },
    ],
    cta: 'Adquirir Licença Servidor',
    featured: false,
  },
  {
    name: 'Licença Cliente',
    tag: 'CLIENTE',
    price: '399',
    period: '/ ano · por estação',
    desc: 'Para cada operador adicional que se conecta ao servidor na mesma rede. Adquira quantas precisar.',
    note: 'Requer uma Licença Servidor ativa na rede.',
    badge: 'Por Estação',
    features: [
      { text: 'Acesso completo ao sistema', on: true },
      { text: 'Trabalho simultâneo em rede local', on: true },
      { text: 'Clientes e contratos ilimitados', on: true },
      { text: 'Amortização SAC', on: true },
      { text: 'Controle de parcelas e pagamentos', on: true },
      { text: 'Dashboard financeiro', on: true },
      { text: 'Exportação PDF / HTML', on: true },
      { text: 'Banco de dados próprio', on: false },
    ],
    cta: 'Adquirir Licença Cliente',
    featured: false,
  },
  {
    name: 'Pacote Equipe',
    tag: 'SERVIDOR + CLIENTES',
    price: null,
    period: '',
    desc: 'Servidor e Clientes adquiridos juntos com desconto. Ideal para escritórios e financeiras com múltiplos operadores.',
    note: 'Quantidade de licenças Cliente à sua escolha.',
    badge: 'Mais Popular',
    features: [
      { text: '1 Licença Servidor inclusa', on: true },
      { text: 'Licenças Cliente à sua escolha', on: true },
      { text: 'Desconto no pacote', on: true },
      { text: 'Banco de dados centralizado', on: true },
      { text: 'Todos os operadores em tempo real', on: true },
      { text: 'Backup criptografado AES-256', on: true },
      { text: 'Exportação PDF / HTML', on: true },
      { text: 'Suporte de instalação em rede', on: true },
    ],
    cta: 'Montar Meu Pacote',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal style={{ textAlign: 'center' }}>
          <div className="tag">Licenças</div>
          <h2 className="section-title">Servidor e Cliente — <span>juntos ou separados</span></h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Compre apenas o que você precisa. Licença anual, sem mensalidade. Todos incluem suporte de instalação.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {PLANS.map(plan => (
            <Reveal key={plan.name}>
              <div className={`plan${plan.featured ? ' featured' : ''}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div className="plan-name">{plan.name}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '8px', opacity: 0.8 }}>
                  {plan.tag}
                </div>
                <div className="plan-price" style={!plan.price ? { fontSize: '2.2rem' } : {}}>
                  {plan.price
                    ? <><sup>R$</sup>{plan.price}<span className="period"> {plan.period}</span></>
                    : 'Sob Consulta'}
                </div>
                <p className="plan-desc">{plan.desc}</p>
                {plan.note && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0', marginTop: '-4px', opacity: 0.85 }}>
                    ⓘ {plan.note}
                  </p>
                )}
                <div className="plan-sep" />
                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f.text} className={f.on ? '' : 'off'}>{f.text}</li>
                  ))}
                </ul>
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {plan.cta}
                </a>
                <a
                  href={DOWNLOAD}
                  download
                  className="btn btn-ghost"
                  style={{ marginTop: '8px' }}
                >
                  Baixar e Testar Grátis
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
