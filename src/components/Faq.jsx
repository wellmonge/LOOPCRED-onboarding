import { useState } from 'react'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Qual a diferença entre Licença Servidor e Licença Cliente?',
    a: 'A Licença Servidor é instalada no computador principal — ele guarda o banco de dados, processa os contratos e pode ser usado sozinho por um único operador. A Licença Cliente é instalada em outras máquinas da mesma rede e se conecta ao servidor para que múltiplos operadores trabalhem simultaneamente nos mesmos dados. As duas podem ser adquiridas juntas (Pacote Equipe) ou separadamente conforme sua necessidade.',
  },
  {
    q: 'O LOOPCRED funciona sem internet?',
    a: 'Sim. O LOOPCRED é um software desktop instalado diretamente no seu computador. Todos os dados ficam no banco de dados local — não é necessária conexão com a internet para o uso diário. A internet é usada apenas para ativação da licença.',
  },
  {
    q: 'Em quais sistemas operacionais o LOOPCRED funciona?',
    a: 'O LOOPCRED está disponível para Windows (7, 10 e 11) e macOS. O instalador é fornecido após a aquisição da licença.',
  },
  {
    q: 'O que é o modo multi-usuário em rede?',
    a: 'No plano Equipe e Empresarial, um computador atua como servidor (licença servidor) e os demais computadores da rede se conectam a ele como clientes (licenças cliente). Todos os operadores trabalham simultaneamente nos mesmos dados em tempo real, sem necessidade de internet.',
  },
  {
    q: 'Como funciona o backup?',
    a: 'O backup gera um arquivo .lcbak criptografado com AES-256-GCM protegido por uma senha que só você conhece. Ele contém todos os contratos, clientes, pagamentos e comprovantes. Para restaurar, basta importar o arquivo e inserir a senha.',
  },
  {
    q: 'Posso transferir a licença para outro computador?',
    a: 'Sim. Entre em contato pelo WhatsApp para solicitar a transferência. O processo é simples e rápido — basta informar a nova máquina e emitiremos uma licença atualizada.',
  },
  {
    q: 'Como recebo o arquivo de licença após o pagamento?',
    a: 'Após a confirmação do pagamento, o arquivo de licença (.lck) é enviado diretamente pelo WhatsApp em minutos. O processo de instalação e ativação leva menos de 5 minutos.',
  },
]

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = i => setOpenIdx(openIdx === i ? null : i)

  return (
    <section id="faq">
      <div className="container">
        <Reveal style={{ textAlign: 'center' }}>
          <div className="tag">FAQ</div>
          <h2 className="section-title">Perguntas <span>frequentes</span></h2>
        </Reveal>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <Reveal key={item.q}>
              <div className={`faq-item${openIdx === i ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={openIdx === i}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <ChevronIcon />
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
