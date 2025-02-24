import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';
import { artists } from '../data/artists';

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative text-center z-10">
          <h1 className="text-8xl font-bold mb-4 tracking-wider">𝙷𝙾𝙿𝙴</h1>
          <p className="text-xl tracking-widest">TATTOO & PIERCING</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">NOSSA ARTE, SUA HISTÓRIA</h2>
          <p className="text-lg mb-8">
          No Hope Tattoo Studio, cada tatuagem é mais do que tinta na pele é uma história eternizada, uma identidade expressa, uma marca de quem você é. Nossa missão é transformar suas ideias, memórias e emoções em arte, criando tatuagens que refletem sua essência de forma única e autêntica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black text-white">
              <h3 className="text-xl font-bold mb-2">ORIGINALIDADE</h3>
              <p>Designs exclusivos e personalizados para cada cliente</p>
            </div>
            <div className="p-6 bg-black text-white">
              <h3 className="text-xl font-bold mb-2">EXPERIÊNCIA</h3>
              <p>Anos de expertise em diferentes estilos de tatuagem</p>
            </div>
            <div className="p-6 bg-black text-white">
              <h3 className="text-xl font-bold mb-2">SEGURANÇA</h3>
              <p>Ambiente esterilizado e materiais de alta qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">NOSSOS ARTISTAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-black border-2 border-white p-4 transform hover:scale-105 transition-transform">
                <Link to={`/artist/${artist.id}`} className="block">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-56 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-300 mb-2">{artist.specialty}</p>
                  <p className="text-sm text-gray-400 mb-4">{artist.instagram}</p>
                </Link>
                <a 
                  href={`https://wa.me/${artist.whatsapp}?text=Olá%20${artist.firstName},%20gostaria%20de%20fazer%20uma%20tatuagem!`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">𝓢𝓽𝓾𝓭𝓲𝓸</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img 
              src="/HOPE/img/studio/1.png" 
              alt="Tattoo studio" 
              className="w-full h-80 object-cover hover:opacity-75 transition-opacity"
            />
            <img 
              src="/HOPE/img/studio/2.png" 
              alt="Tattoo studio" 
              className="w-full h-80 object-cover hover:opacity-75 transition-opacity"
            />
            <img 
              src="/HOPE/img/studio/3.png" 
              alt="Tattoo studio" 
              className="w-full h-80 object-cover hover:opacity-75 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">LOCALIZAÇÃO E HORÁRIOS</h2>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4"/>
              <p>Av. São Vicente, 290 - Bom Despacho , MG</p>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-4"/>
              <p>Agende seu horário pelo WhatsApp!</p>
            </div>
            <div className="flex items-center">
  <Instagram className="w-6 h-6 mr-4"/>
  <a 
    href="https://www.instagram.com/hopebd_/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-500 hover:underline"
  >
    @hopetattoo
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p>&copy; 2024 Hope Tattoo Studio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;