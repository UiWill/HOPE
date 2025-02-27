import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, MessageCircle, Send, Mail } from 'lucide-react';
import { artists } from '../data/artists';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    portfolio: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: true, error: false, message: 'Enviando sua mensagem...' });
    
    try {
      // Simulação de envio - em produção, isso seria substituído por uma chamada real à API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você implementaria a lógica para enviar o formulário para um backend
      // Por exemplo:
      // const response = await fetch('https://api.hopetattoo.com/candidates', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Falha ao enviar formulário');
      
      console.log('Dados do formulário:', formData);
      setFormStatus({ 
        submitted: true, 
        error: false, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      });
      
      // Limpar o formulário após envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        portfolio: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormStatus({ 
        submitted: true, 
        error: true, 
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.' 
      });
    }
  };

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
          <h1 className="hero-title text-7xl md:text-8xl font-bold mb-4 font-didot">HOPE</h1>
          <p className="text-xl tracking-[0.3em] opacity-90 mb-8 font-didot">TATTOO & PIERCING</p>
         
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-4xl font-bold mb-16 font-didot">NOSSA ARTE, SUA HISTÓRIA</h2>
          <p className="text-lg mb-16 leading-relaxed opacity-90">
            No Hope Tattoo Studio, transformamos suas ideias em arte permanente. 
            Com uma equipe de artistas talentosos e experientes, criamos tatuagens 
            únicas que contam sua história através da nossa arte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4 font-didot">ORIGINALIDADE</h3>
              <p className="opacity-80">Designs exclusivos e personalizados para cada cliente</p>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4 font-didot">EXPERIÊNCIA</h3>
              <p className="opacity-80">Anos de expertise em diferentes estilos de tatuagem</p>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4 font-didot">SEGURANÇA</h3>
              <p className="opacity-80">Ambiente esterilizado e materiais de alta qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center font-didot">NOSSOS ARTISTAS</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
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
                    <h3 className="text-xl font-bold mb-2 font-didot">{artist.name}</h3>
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
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center font-didot">GALERIA</h2>
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

      {/* Join Our Team Section */}
      <section id="join" className="py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center font-didot">JUNTE-SE À NOSSA EQUIPE</h2>
          <p className="text-center text-lg mb-12 opacity-90">
            Você é um tatuador talentoso ou um body piercer experiente? Estamos sempre em busca de novos artistas para fazer parte do nosso estúdio.
          </p>
          
          <div className="mb-12 p-6 border border-white/10 bg-white/5 rounded-lg">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-white/70 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2 font-didot">Como funciona o processo?</h3>
                <ol className="list-decimal pl-5 space-y-2 text-white/80">
                  <li>Preencha o formulário abaixo com seus dados e informações sobre seu trabalho</li>
                  <li>Nossa equipe receberá sua mensagem diretamente no email <span className="text-white">contato@hopetattoo.com</span></li>
                  <li>Analisaremos seu portfólio e experiência</li>
                  <li>Se houver compatibilidade com nosso estúdio, entraremos em contato para uma entrevista</li>
                </ol>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="join-form bg-black/50 p-8 border border-white/10 rounded-lg">
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.error ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'}`}>
                <p className="text-center">{formStatus.message}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white focus:border-white/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white focus:border-white/50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white focus:border-white/50"
                />
              </div>
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">Link do Portfólio (Instagram/Behance)</label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white focus:border-white/50"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Sua Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white focus:border-white/50"
                placeholder="Conte-nos sobre sua experiência, estilo de trabalho e por que gostaria de fazer parte da nossa equipe..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-black py-3 px-8 rounded-md hover:bg-gray-200 transition-all duration-300 font-medium"
                disabled={formStatus.submitted && !formStatus.error}
              >
                <Send size={20} />
                Enviar Candidatura
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl font-bold mb-16 text-center font-didot">LOCALIZAÇÃO E HORÁRIOS</h2>
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
        <p className="opacity-70">&copy; 2024 Hope Tattoo Studio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;