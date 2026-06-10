import Reveal from './Reveal'

const WA = 'https://wa.me/5565992082256'

export default function CtaBanner() {
  return (
    <section id="cta">
      <div className="cta-glow" />
      <div className="container">
        <Reveal>
          <div className="tag">Comece Agora</div>
          <h2 className="section-title">Pronto para organizar <span>sua carteira?</span></h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Centenas de agentes de crédito já gerenciam seus empréstimos com LOOPCRED.
            Sua licença chega em minutos pelo WhatsApp.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '1.05rem', padding: '16px 40px' }}
          >
            Adquirir Licença pelo WhatsApp
          </a>
          <p className="cta-note">Licença anual · Sem mensalidade · Instalação assistida inclusa</p>
        </Reveal>
      </div>
    </section>
  )
}
