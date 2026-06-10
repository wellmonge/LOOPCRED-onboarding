import Reveal from './Reveal'

const FEATURES = [
  {
    icon: '👥',
    title: 'Cadastro de Clientes',
    desc: 'Registre clientes com CPF ou CNPJ, dados de contato e histórico de crédito. Consulte e filtre toda a sua base em segundos.',
  },
  {
    icon: '📋',
    title: 'Contratos com Amortização SAC',
    desc: 'Gere contratos de empréstimo com amortização SAC, prazo, taxa de juros e parcelas calculadas automaticamente.',
  },
  {
    icon: '💰',
    title: 'Controle de Pagamentos',
    desc: 'Registre pagamentos parciais e totais. O sistema calcula automaticamente multa de 2% e juros de mora por atraso.',
  },
  {
    icon: '📊',
    title: 'Dashboard Financeiro',
    desc: 'Visualize em tempo real o saldo em aberto, inadimplência, recebimentos do período e a saúde geral da sua carteira.',
  },
  {
    icon: '📄',
    title: 'Relatórios e Exportação',
    desc: 'Exporte contratos, carnês de parcelas e extratos em PDF ou HTML com um clique, prontos para impressão ou envio.',
  },
  {
    icon: '🔒',
    title: 'Backup Criptografado',
    desc: 'Proteja seu histórico com backup AES-256-GCM protegido por senha. Restaure todos os dados a qualquer momento.',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <Reveal>
          <div className="tag">Funcionalidades</div>
          <h2 className="section-title">
            Tudo que você precisa para<br /><span>gerir sua carteira</span>
          </h2>
          <p className="section-sub">Do contrato ao recebimento — sem planilha, sem papel, sem complicação.</p>
        </Reveal>
        <div className="features-grid">
          {FEATURES.map(f => (
            <Reveal key={f.title}>
              <div className="feat-card">
                <span className="feat-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
