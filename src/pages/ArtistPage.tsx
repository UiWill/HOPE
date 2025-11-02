import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Instagram, Send } from 'lucide-react';
import { artists } from '../data/artists';

function ArtistPage() {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen light-section flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-xl md:text-2xl mb-4 font-didot text-black">Artista não encontrado</p>
          <Link to="/" className="text-gray-700 hover:text-black underline transition-colors">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen light-section">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Link
          to="/"
          className="inline-flex items-center text-gray-700 hover:text-black mb-6 md:mb-8 border border-gray-300 px-4 py-2 hover:border-gray-600 hover:shadow-md transition-all duration-300 rounded bg-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para a página inicial
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-lg">
              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${artist.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <img
              src={artist.profileImage || artist.image}
              alt={artist.name}
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-didot text-black">{artist.name}</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">{artist.specialty}</p>
            <p className="text-gray-600 mb-6 md:mb-8">{artist.instagram}</p>
            <div className="bg-white p-6 md:p-8 rounded-lg mb-6 md:mb-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-didot text-black">Sobre o Artista</h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{artist.bio}</p>
            </div>
            {artist.whatsapp ? (
              <a
                href={`https://wa.me/${artist.whatsapp}?text=Olá%20${artist.firstName},%20gostaria%20de%20agendar%20um%20horário!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white py-3 md:py-4 px-6 md:px-8 rounded hover:bg-gray-800 hover:shadow-lg transition-all duration-300 text-base md:text-lg"
              >
                <MessageCircle size={24} />
                Conversar pelo WhatsApp
              </a>
            ) : (
              <a
                href={artist.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white py-3 md:py-4 px-6 md:px-8 rounded hover:bg-gray-800 hover:shadow-lg transition-all duration-300 text-base md:text-lg"
              >
                <Send size={24} />
                Agendar Horário Online
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className="section-title text-2xl md:text-3xl font-bold mb-8 md:mb-12 font-didot text-black">Galeria de Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {artist.gallery.map((image, index) => (
              <div key={index} className="gallery-image">
                <img
                  src={image}
                  alt={`Trabalho de ${artist.name}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;