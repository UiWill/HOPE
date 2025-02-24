import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { artists } from '../data/artists';

function ArtistPage() {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-4">Artista não encontrado</p>
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
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para a página inicial
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={artist.profileImage || artist.image} 
              alt={artist.name} 
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
            <p className="text-xl text-gray-300 mb-4">{artist.specialty}</p>
            <p className="text-gray-400 mb-6">{artist.instagram}</p>
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Sobre o Artista</h2>
              <p className="text-gray-300 leading-relaxed">{artist.bio}</p>
            </div>
            <a 
              href={`https://wa.me/${artist.whatsapp}?text=Olá%20${artist.firstName},%20gostaria%20de%20fazer%20uma%20tatuagem!`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              <MessageCircle size={24} />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Galeria de Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artist.gallery.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Trabalho de ${artist.name}`} 
                className="w-full h-80 object-cover rounded-lg hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;