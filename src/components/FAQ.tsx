import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Vocês cobram pela visita técnica?",
      answer: "Não. Para a maioria das regiões de Brasília e entorno, nossa visita técnica para medição e apresentação de catálogos é gratuita e sem compromisso."
    },
    {
      question: "Qual o prazo médio de entrega?",
      answer: "O prazo varia conforme o modelo e o tecido escolhido. Em geral, pedimos entre 15 a 20 dias úteis para confecção sob medida e instalação com garantia de qualidade."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Facilitamos o pagamento para tirar seu sonho do papel. Aceitamos cartões de crédito com parcelamento, PIX e transferência bancária. Consulte condições especiais no WhatsApp."
    },
    {
      question: "Trabalham com motorização de cortinas?",
      answer: "Sim! Somos especialistas em automação. Motorizamos cortinas e persianas, compatíveis com Alexa, Google Home e controle remoto, trazendo conforto e tecnologia para seu lar."
    },
    {
      question: "A instalação faz muita sujeira?",
      answer: "Nossa equipe é treinada para uma instalação limpa e organizada. Utilizamos equipamentos que minimizam o pó e deixamos o ambiente higienizado após o serviço."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 block">
            Dúvidas Comuns
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Perguntas <span className="text-gray-500">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-white/10 rounded-sm overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#121212] border-white/20' : 'bg-transparent hover:bg-white/5'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full border border-white/10 transition-colors ${openIndex === index ? 'bg-white text-black' : 'text-gray-400'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;