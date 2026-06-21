import { useState } from 'react'
import Logo from './Logo'

const DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1zv6XLsYKL5SNxeA3o0mEpDuah63NL98s'

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
          <a className="btn btn-ghost nav-cta" href={DOWNLOAD} download>Baixar e Testar Grátis</a>
          <a className="btn btn-primary nav-cta" href="https://wa.me/+556574004208?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20uma%20licen%C3%A7a%20do%20LOOPCRED.%20Poderiam%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noreferrer">Adquirir Licença</a>
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
