import { useState } from 'react'
import Logo from './Logo'
import { DOWNLOAD_URL, WHATSAPP_LINK } from '../config'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <div className="container nav-inner">
        <a className="nav-logo" href="#hero" onClick={close}>
          <Logo height={40} />
        </a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#how" onClick={close}>Como Funciona</a></li>
          <li><a href="#features" onClick={close}>Funcionalidades</a></li>
          <li><a href="#pricing" onClick={close}>Planos</a></li>
          <li><a href="#faq" onClick={close}>FAQ</a></li>
        </ul>

        <div className="nav-ctas">
          <a className="btn btn-ghost nav-cta" href={DOWNLOAD_URL} download>Baixar e Testar Grátis</a>
          <a className="btn btn-primary nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Adquirir Licença</a>
        </div>

        <button
          className="nav-burger"
          aria-label="Alternar menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
