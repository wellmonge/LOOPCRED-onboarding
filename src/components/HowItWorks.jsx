import Reveal from './Reveal'

const STEPS = [
  {
    icon: '💬',
    title: 'Fale Conosco',
    desc: 'Entre em contato pelo WhatsApp, escolha o plano ideal e efetue o pagamento. Você recebe o arquivo de licença (.lck) em minutos.',
  },
  {
    icon: '⚙️',
    title: 'Instale e Configure',
    desc: 'Instale o LOOPCRED no seu computador Windows ou Mac, importe o arquivo de licença e configure em menos de 5 minutos.',
  },
  {
    icon: '👥',
    title: 'Cadastre seus Clientes',
    desc: 'Registre clientes com CPF/CNPJ e crie contratos de empréstimo com amortização SAC, taxas e prazos personalizados.',
  },
  {
    icon: '📈',
    title: 'Gerencie e Receba',
    desc: 'Acompanhe parcelas, registre pagamentos, emita relatórios e mantenha o controle completo da sua carteira de crédito.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <Reveal>
          <div className="tag">Como Funciona</div>
          <h2 className="section-title">Do contato ao <span>primeiro contrato</span></h2>
          <p className="section-sub">Comece a usar em menos de um dia — sem configuração de servidor, sem suporte técnico especializado.</p>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.title}>
              <div className="step">
                <div className="step-num">0{i + 1}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
