import { Check, Minus, Info } from 'lucide-react'
import Reveal from './Reveal'
import { DOWNLOAD_URL, WHATSAPP_LINK } from '../config'

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
                <div className="plan-head">
                  <div className="plan-name">{plan.name}</div>
                  {plan.badge && <div className={`plan-badge${plan.featured ? ' hot' : ''}`}>{plan.badge}</div>}
                </div>
                <div className="plan-price" style={!plan.price ? { fontSize: '2.2rem' } : {}}>
                  {plan.price
                    ? <><sup>R$</sup>{plan.price}<span className="period"> {plan.period}</span></>
                    : 'Sob Consulta'}
                </div>
                <p className="plan-desc">{plan.desc}</p>
                {plan.note && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--amber)', marginBottom: '0', marginTop: '-4px', opacity: 0.85, display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                    <Info size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
                    {plan.note}
                  </p>
                )}
                <div className="plan-sep" />
                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f.text} className={f.on ? '' : 'off'}>
                      {f.on ? <Check size={15} strokeWidth={2.5} /> : <Minus size={15} strokeWidth={2.5} />}
                      {f.text}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {plan.cta}
                </a>
                <a
                  href={DOWNLOAD_URL}
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
