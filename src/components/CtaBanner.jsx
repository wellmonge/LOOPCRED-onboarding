import Reveal from './Reveal'
import { DOWNLOAD_URL, WHATSAPP_LINK } from '../config'

export default function CtaBanner() {
  return (
    <section id="cta">
      <div className="cta-glow" />
      <div className="container">
        <Reveal>
          <h2 className="section-title">Pronto para organizar <span>sua carteira?</span></h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Fale com a gente pelo WhatsApp e receba sua licença em minutos.
          </p>
          <div className="cta-btns">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            Adquirir Licença pelo WhatsApp
          </a>
          <a
            href={DOWNLOAD_URL}
            download
            className="btn btn-ghost"
            style={{ fontSize: '1.05rem', padding: '15px 36px' }}
          >
            Baixar e Testar Grátis
          </a>
          </div>
          <p className="cta-note">Licença anual · Sem mensalidade · Instalação assistida inclusa</p>
        </Reveal>
      </div>
    </section>
  )
}
