import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    initials: 'RM',
    name: 'Rafael M.',
    role: 'Agente de Crédito · MT',
    body: '"Antes eu controlava tudo em planilha e sempre tinha erro. Com o LOOPCRED, os contratos e parcelas são gerados automaticamente. Economizo horas toda semana e não perco mais nenhum pagamento em atraso."',
  },
  {
    initials: 'CL',
    name: 'Carolina L.',
    role: 'Gestora · Financeira Fidelis',
    body: '"A função de multi-usuário em rede mudou nossa operação. Cada operador trabalha no seu posto e tudo fica centralizado no servidor. O backup criptografado me dá tranquilidade total sobre a segurança dos dados."',
  },
  {
    initials: 'JS',
    name: 'João S.',
    role: 'Sócio · Crédito Ágil',
    body: '"O cálculo de multa e juros de mora automático eliminou as discussões com clientes. O sistema mostra exatamente o que está devendo e por quê. Suporte rápido e produto que realmente funciona."',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <Reveal style={{ textAlign: 'center' }}>
          <div className="tag">Depoimentos</div>
          <h2 className="section-title">A escolha de quem <span>empresta</span></h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            O que agentes de crédito e financeiras dizem sobre o LOOPCRED.
          </p>
        </Reveal>
        <div className="testi-grid">
          {TESTIMONIALS.map(t => (
            <Reveal key={t.name}>
              <div className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-body">{t.body}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
