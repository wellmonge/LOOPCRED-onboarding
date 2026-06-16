import Logo from './Logo'

const PRODUCT = [
  { label: 'Como Funciona', href: '#how' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Planos', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const CONTACT = [
  { label: 'WhatsApp: (65) +55 7400-4208', href: 'https://wa.me/+556574004208' },
]

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Logo height={50} />
            <p>Software desktop para gestão de carteiras de crédito. Contratos, parcelas, inadimplência e relatórios — em um loop contínuo.</p>
          </div>
          <div className="footer-col">
            <h4>Produto</h4>
            <ul>
              {PRODUCT.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              {CONTACT.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 LOOPCRED. Todos os direitos reservados.</span>
          <span>
            <a href="#">Política de Privacidade</a>&nbsp;·&nbsp;
            <a href="#">Termos de Serviço</a>&nbsp;·&nbsp;
            <a href="#">Contrato de Licença</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
