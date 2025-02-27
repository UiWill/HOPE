import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Instagram } from 'lucide-react';
import { artists } from '../data/artists';

function ArtistPage() {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-4 font-didot">Artista não encontrado</p>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 border border-gray-800 px-4 py-2 hover:border-white transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para a página inicial
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="flex gap-4">
                <a 
                  href={`https://instagram.com/${artist.instagram}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <img 
              src={artist.profileImage || artist.image} 
              alt={artist.name} 
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4 font-didot">{artist.name}</h1>
            <p className="text-xl text-gray-300 mb-4">{artist.specialty}</p>
            <p className="text-gray-400 mb-6">{artist.instagram}</p>
            <div className="bg-gray-900/50 p-8 rounded-lg mb-8 border border-white/10 hover:border-white/30 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4 font-didot">Sobre o Artista</h2>
              <p className="text-gray-300 leading-relaxed">{artist.bio}</p>
            </div>
            <a 
              href={`https://wa.me/${artist.whatsapp}?text=Olá%20${artist.firstName},%20gostaria%20de%20fazer%20uma%20tatuagem!`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-green-600 text-white py-4 px-8 rounded hover:bg-green-700 transition-all duration-300 text-lg"
            >
              <MessageCircle size={24} />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="section-title text-3xl font-bold mb-12 font-didot">Galeria de Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artist.gallery.map((image, index) => (
              <div key={index} className="gallery-image">
                <img 
                  src={image} 
                  alt={`Trabalho de ${artist.name}`} 
                  className="w-full h-80 object-cover rounded-lg"
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