import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';
import { artists } from '../data/artists';

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-image"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="relative text-center z-20">
          <h1 className="hero-title text-7xl md:text-8xl font-bold mb-4">HOPE</h1>
          <p className="text-xl tracking-[0.3em] opacity-90 mb-8">TATTOO & PIERCING</p>
          <a 
            href="#artists" 
            className="inline-block px-8 py-3 border-2 border-white/50 hover:border-white bg-black/30 hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          >
            Conheça Nossos Artistas
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-4xl font-bold mb-16">NOSSA ARTE, SUA HISTÓRIA</h2>
          <p className="text-lg mb-16 leading-relaxed opacity-90">
            No Hope Tattoo Studio, transformamos suas ideias em arte permanente. 
            Com uma equipe de artistas talentosos e experientes, criamos tatuagens 
            únicas que contam sua história através da nossa arte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4">ORIGINALIDADE</h3>
              <p className="opacity-80">Designs exclusivos e personalizados para cada cliente</p>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4">EXPERIÊNCIA</h3>
              <p className="opacity-80">Anos de expertise em diferentes estilos de tatuagem</p>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4">SEGURANÇA</h3>
              <p className="opacity-80">Ambiente esterilizado e materiais de alta qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center">NOSSOS ARTISTAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="artist-card p-6">
                <Link to={`/artist/${artist.id}`} className="block group">
                  <div className="relative overflow-hidden mb-6">
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-300 mb-2">{artist.specialty}</p>
                  <p className="text-sm text-gray-400 mb-4">{artist.instagram}</p>
                </Link>
                <a 
                  href={`https://wa.me/${artist.whatsapp}?text=Olá%20${artist.firstName},%20gostaria%20de%20fazer%20uma%20tatuagem!`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  Contato WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center">Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gallery-image aspect-square">
              <img 
                src="/HOPE/img/studio/1.png" 
                alt="Tattoo work" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="gallery-image md:row-span-2 aspect-[3/4]">
              <img 
                src="/HOPE/img/studio/2.png" 
                alt="Tattoo work" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="gallery-image aspect-square">
              <img 
                src="/HOPE/img/studio/3.png" 
                alt="Tattoo work" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center">LOCALIZAÇÃO E HORÁRIOS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="contact-info p-8 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4"/>
              <p className="opacity-90">Av. São Vicente, 290 - Bom Despacho , MG</p>
            </div>
            <div className="contact-info p-8 text-center">
              <Clock className="w-8 h-8 mx-auto mb-4"/>
              <p className="opacity-90">Agende seu horário pelo WhatsApp!</p>
            </div>
            <div className="contact-info p-8 text-center">
              <Instagram className="w-8 h-8 mx-auto mb-4"/>
              <p className="opacity-90">@hopetattoo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="opacity-70">&copy; 2025 Hope Tattoo Studio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;