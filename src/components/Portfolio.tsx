import { useState } from 'react';
import { X, Play, Maximize2 } from 'lucide-react';

// Interface atualizada com o campo 'filter'
interface PortfolioItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  videoSrc?: string;
  title: string;
  category: string;
  location: string;
  filter: 'cortinas' | 'persianas' | 'videos';
}

// LISTA DE PROJETOS ORGANIZADA E ATUALIZADA
const portfolioItems: PortfolioItem[] = [
  // --- PERSIANAS ---
  { 
    id: 4, 
    type: 'image', 
    src: '/portfolio/Gabriela4.jpeg', 
    title: 'Home Office Executivo', 
    category: 'Persiana Rolô Screen',
    location: 'Escritório Privativo',
    filter: 'persianas'
  },
  { 
    id: 5, 
    type: 'image', 
    src: '/portfolio/Gabriela5.jpg', 
    title: 'Varanda Integrada', 
    category: 'Tela Solar 3%',
    location: 'Espaço Gourmet',
    filter: 'persianas'
  },

  // --- VÍDEOS ---
  { 
    id: 30, 
    type: 'video', 
    src: '/portfolio/Gabriela3.jpg', 
    videoSrc: '/portfolio/Gabriela3_video.mp4', 
    title: 'Hall Pé Direito Duplo (Vídeo)', 
    category: 'Detalhes em Movimento',
    location: 'Mansão Park Way',
    filter: 'videos'
  },
  { 
    id: 31, // NOVO VÍDEO
    type: 'video', 
    src: '/portfolio/Gabriela12.jpeg', // Capa (Foto da varanda)
    videoSrc: '/portfolio/Gabriela12_video.mp4', // ⚠️ COLOQUE O VÍDEO DA VARANDA COM ESSE NOME
    title: 'Varanda Gourmet (Vídeo)', 
    category: 'Cortinas Outdoor',
    location: 'Área de Lazer',
    filter: 'videos'
  },

  // --- CORTINAS ---
  { 
    id: 24, // NOVA FOTO
    type: 'image', 
    src: '/portfolio/Gabriela24.jpeg', 
    title: 'Living com Vista Panorâmica', 
    category: 'Cortina Wave Pé Direito Duplo',
    location: 'Mansão Lago Norte',
    filter: 'cortinas'
  },
  { 
    id: 23, // NOVA FOTO
    type: 'image', 
    src: '/portfolio/Gabriela23.jpeg', 
    title: 'Living Integrado em "L"', 
    category: 'Cortina de Linho Off-White',
    location: 'Residência Sudoeste',
    filter: 'cortinas'
  },
  { 
    id: 22, // NOVA FOTO
    type: 'image', 
    src: '/portfolio/Gabriela22.jpeg', 
    title: 'Home Theater Sofisticado', 
    category: 'Veludo com Painel de Madeira',
    location: 'Sala de TV',
    filter: 'cortinas'
  },
  { 
    id: 21, // NOVA FOTO
    type: 'image', 
    src: '/portfolio/Gabriela21.jpeg', 
    title: 'Sala de Jantar Integrada', 
    category: 'Linho Rústico',
    location: 'Apartamento Noroeste',
    filter: 'cortinas'
  },
  { 
    id: 1, 
    type: 'image', 
    src: '/portfolio/Gabriela1.jpg', 
    title: 'Living com Painel Amadeirado', 
    category: 'Cortinas em Linho',
    location: 'Residência Lago Sul',
    filter: 'cortinas'
  },
  { 
    id: 2, 
    type: 'image', 
    src: '/portfolio/Gabriela2.jpg', 
    title: 'Suíte Master Minimalista', 
    category: 'Cortina Wave Blackout',
    location: 'Apartamento Noroeste',
    filter: 'cortinas'
  },
  { 
    id: 3, 
    type: 'image', 
    src: '/portfolio/Gabriela3.jpg', 
    title: 'Hall Pé Direito Duplo', 
    category: 'Cortina Translúcida',
    location: 'Mansão Park Way',
    filter: 'cortinas'
  },
  { 
    id: 6, 
    type: 'image', 
    src: '/portfolio/Gabriela6.jpeg', 
    title: 'Sala de Jantar', 
    category: 'Gaze de Linho',
    location: 'Casa Alphaville',
    filter: 'cortinas'
  },
  { 
    id: 7, 
    type: 'image', 
    src: '/portfolio/Gabriela7.jpeg', 
    title: 'Grand Living', 
    category: 'Cortina Wave Longa',
    location: 'Residência Damha',
    filter: 'cortinas'
  },
  { 
    id: 8, 
    type: 'image', 
    src: '/portfolio/Gabriela8.jpeg', 
    title: 'Dormitório Confort', 
    category: 'Blackout Cinza',
    location: 'Apartamento Águas Claras',
    filter: 'cortinas'
  },
  { 
    id: 9, 
    type: 'image', 
    src: '/portfolio/Gabriela9.jpeg', 
    title: 'Home Theater', 
    category: 'Cortina Acústica',
    location: 'Sala de TV',
    filter: 'cortinas'
  },
  { 
    id: 10, 
    type: 'image', 
    src: '/portfolio/Gabriela10.jpeg', 
    title: 'Sala de Reuniões', 
    category: 'Corporativo',
    location: 'Sede Empresarial',
    filter: 'cortinas'
  },
  { 
    id: 12, 
    type: 'image', 
    src: '/portfolio/Gabriela12.jpeg', 
    title: 'Varanda Gourmet Noturna', 
    category: 'Cortinas Outdoor',
    location: 'Área de Lazer',
    filter: 'cortinas'
  },
  { 
    id: 13, 
    type: 'image', 
    src: '/portfolio/Gabriela13.jpeg', 
    title: 'Penteadeira Clássica', 
    category: 'Gaze de Linho',
    location: 'Suíte Master',
    filter: 'cortinas'
  },
  { 
    id: 14, 
    type: 'image', 
    src: '/portfolio/Gabriela14.jpeg', 
    title: 'Living Monumental', 
    category: 'Pé Direito Duplo',
    location: 'Mansão Park Way',
    filter: 'cortinas'
  },
  { 
    id: 15, 
    type: 'image', 
    src: '/portfolio/Gabriela15.jpeg', 
    title: 'Lounge Corporativo', 
    category: 'Cortina Wave',
    location: 'Sala de Conferência',
    filter: 'cortinas'
  },
  { 
    id: 16, 
    type: 'image', 
    src: '/portfolio/Gabriela16.jpeg', 
    title: 'Home Cinema', 
    category: 'Blackout 100%',
    location: 'Sala de TV',
    filter: 'cortinas'
  },
  { 
    id: 17, 
    type: 'image', 
    src: '/portfolio/Gabriela17.jpeg', 
    title: 'Sala de Estar Integrada', 
    category: 'Cortina Wave Iluminada',
    location: 'Residência Sudoeste',
    filter: 'cortinas'
  },
  { 
    id: 18, 
    type: 'image', 
    src: '/portfolio/Gabriela18.jpeg', 
    title: 'Cantinho de Leitura', 
    category: 'Estilo Clássico',
    location: 'Varanda Interna',
    filter: 'cortinas'
  },
  { 
    id: 19, 
    type: 'image', 
    src: '/portfolio/Gabriela19.jpeg', 
    title: 'Sala Íntima / Painel', 
    category: 'Blackout Bege',
    location: 'Apartamento Asa Norte',
    filter: 'cortinas'
  },
  { 
    id: 20, 
    type: 'image', 
    src: '/portfolio/Gabriela20.jpeg', 
    title: 'Sala de Jantar', 
    category: 'Cortina com Forro',
    location: 'Residência Guará',
    filter: 'cortinas'
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'todos' | 'cortinas' | 'persianas' | 'videos'>('todos');

  // Lógica de Filtragem
  const filteredItems = activeCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filter === activeCategory);

  // Lista de botões para o menu
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cortinas', label: 'Cortinas' },
    { id: 'persianas', label: 'Persianas' },
    { id: 'videos', label: 'Vídeos' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#080808] relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 block">
            Nossos Projetos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Portfólio <span className="text-gray-600">Selecionado</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
        </div>

        {/* Menu de Filtros (Abas) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`text-sm md:text-base font-medium tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-300 relative group ${
                activeCategory === cat.id 
                  ? 'text-white' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {cat.label}
              {/* Linha indicadora animada */}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transform transition-transform duration-300 ${
                activeCategory === cat.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`} />
            </button>
          ))}
        </div>

        {/* Grid de Projetos (Masonry) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto animate-in fade-in duration-700">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid rounded-sm overflow-hidden cursor-pointer border border-white/5 bg-[#121212]"
              onClick={() => setSelectedItem(item)}
            >
              {/* Container da Mídia */}
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Overlay Dark no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ícone Central (Play ou Zoom) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
                    {item.type === 'video' ? <Play fill="white" size={24} /> : <Maximize2 size={24} />}
                  </div>
                </div>

                {/* Texto Informativo (Slide Up) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className={`inline-block px-3 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest rounded-sm ${item.type === 'video' ? 'bg-red-600 text-white' : 'bg-white text-black'}`}>
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs uppercase tracking-wide border-l-2 border-gray-600 pl-3">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Tag de Vídeo (Canto Superior) */}
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Vídeo</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mensagem caso não haja itens no filtro (Segurança) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}

      </div>

      {/* Modal / Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          {/* Botão Fechar */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-50 group"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
          >
            <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Área de Conteúdo */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            {selectedItem.type === 'video' && selectedItem.videoSrc ? (
              <video
                src={selectedItem.videoSrc}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 outline-none"
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
            )}

            {/* Legenda do Modal */}
            <div className="mt-8 text-center animate-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-white font-serif text-3xl mb-2">{selectedItem.title}</h3>
              <div className="flex items-center justify-center gap-4 text-gray-400 text-xs uppercase tracking-[0.2em]">
                <span className="text-gray-300">{selectedItem.category}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>{selectedItem.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;