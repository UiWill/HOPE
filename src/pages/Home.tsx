import React, { useState, useEffect } from 'react';
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

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <div className="light-section min-h-screen">
      {/* Hero Section */}
      <header className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="relative text-center z-20 px-4">
          <h1 className="hero-title text-7xl md:text-8xl lg:text-9xl font-bold mb-6 font-didot text-black">
            HOPE
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl tracking-[0.3em] mb-8 font-didot text-gray-800">
            TATTOO - PIERCING - BARBER SHOP
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transformando arte em memórias permanentes
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="white-section py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 md:mb-16 font-didot text-black scroll-fade-in">NOSSA ARTE, SUA HISTÓRIA</h2>
          <p className="text-base md:text-lg mb-12 md:mb-16 leading-relaxed text-gray-700 scroll-fade-in">
            No Hope Tattoo Studio, transformamos suas ideias em arte permanente.
            Com uma equipe de artistas talentosos e experientes, criamos tatuagens
            únicas que contam sua história através da nossa arte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-gray-50 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 scroll-fade-in-left">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-didot text-black">ORIGINALIDADE</h3>
              <p className="text-gray-600 text-sm md:text-base">Designs exclusivos e personalizados para cada cliente</p>
            </div>
            <div className="p-6 md:p-8 bg-gray-50 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 scroll-scale-in">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-didot text-black">EXPERIÊNCIA</h3>
              <p className="text-gray-600 text-sm md:text-base">Anos de expertise em diferentes estilos de tatuagem</p>
            </div>
            <div className="p-6 md:p-8 bg-gray-50 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 scroll-fade-in-right">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-didot text-black">SEGURANÇA</h3>
              <p className="text-gray-600 text-sm md:text-base">Ambiente esterilizado e materiais de alta qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="light-section py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center font-didot text-black scroll-fade-in">NOSSOS ARTISTAS</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
              {artists.map((artist, index) => (
                <div key={artist.id} className="artist-card p-6 rounded-lg scroll-scale-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <Link to={`/artist/${artist.id}`} className="block group">
                    <div className="relative overflow-hidden mb-6 rounded-md">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-didot text-black">{artist.name}</h3>
                    <p className="text-gray-700 mb-2">{artist.specialty}</p>
                    <p className="text-sm text-gray-500 mb-4">{artist.instagram}</p>
                  </Link>
                  {artist.whatsapp ? (
                    <a
                      href={`https://wa.me/${artist.whatsapp}?text=Olá%20${artist.firstName},%20gostaria%20de%20agendar%20um%20horário!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded btn-hover-lift"
                    >
                      <MessageCircle size={20} className="icon-bounce" />
                      Contato WhatsApp
                    </a>
                  ) : (
                    <a
                      href={artist.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded btn-hover-lift"
                    >
                      <Send size={20} className="icon-bounce" />
                      Agendar Horário
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="white-section py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center font-didot text-black scroll-fade-in">NOSSO ESTÚDIO</h2>
          <p className="text-center text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto scroll-fade-in">
            Conheça o ambiente aconchegante e profissional onde a magia acontece
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="gallery-image aspect-[3/4] overflow-hidden">
              <img
                src="/HOPE/img/HOPE CENTER.jpg"
                alt="HOPE CENTER - Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-image aspect-[3/4] overflow-hidden relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/HOPE/img/studio/hope.png"
              >
                <source src="/HOPE/img/studio/piercing.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
            <div className="gallery-image aspect-[3/4] overflow-hidden relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/HOPE/img/studio/hope.png"
              >
                <source src="/HOPE/img/studio/video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="join" className="light-section py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center font-didot text-black scroll-fade-in">JUNTE-SE À NOSSA EQUIPE</h2>
          <p className="text-center text-base md:text-lg mb-10 md:mb-12 text-gray-700">
            Você é um tatuador talentoso ou um body piercer experiente? Estamos sempre em busca de novos artistas para fazer parte do nosso estúdio.
          </p>

          <div className="mb-10 md:mb-12 p-6 border border-gray-300 bg-white rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 font-didot text-black">Como funciona o processo?</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                  <li>Preencha o formulário abaixo com seus dados e informações sobre seu trabalho</li>
                  <li>Nossa equipe receberá sua mensagem diretamente no email <span className="font-semibold text-black">contato@hopetattoo.com</span></li>
                  <li>Analisaremos seu portfólio e experiência</li>
                  <li>Se houver compatibilidade com nosso estúdio, entraremos em contato para uma entrevista</li>
                </ol>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="join-form p-6 md:p-8 rounded-lg">
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.error ? 'bg-red-50 border border-red-300 text-red-800' : 'bg-green-50 border border-green-300 text-green-800'}`}>
                <p className="text-center text-sm md:text-base">{formStatus.message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium mb-2">Link do Portfólio (Instagram/Behance)</label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Sua Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md"
                placeholder="Conte-nos sobre sua experiência, estilo de trabalho e por que gostaria de fazer parte da nossa equipe..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-8 rounded-md font-medium btn-hover-lift"
                disabled={formStatus.submitted && !formStatus.error}
              >
                <Send size={20} className="icon-bounce" />
                Enviar Candidatura
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="white-section py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center font-didot text-black scroll-fade-in">LOCALIZAÇÃO E HORÁRIOS</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="contact-info p-6 md:p-8 text-center rounded-lg scroll-fade-in-left">
              <MapPin className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-black icon-pulse"/>
              <p className="text-gray-700 text-sm md:text-base">Av. São Vicente, 290 - Bom Despacho, MG</p>
            </div>
            <div className="contact-info p-6 md:p-8 text-center rounded-lg scroll-scale-in">
              <Clock className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-black icon-spin"/>
              <p className="text-gray-700 text-sm md:text-base">Agende seu horário pelo WhatsApp!</p>
            </div>
            <div className="contact-info p-6 md:p-8 text-center rounded-lg scroll-fade-in-right">
              <Instagram className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-black icon-bounce"/>
              <p className="text-gray-700 text-sm md:text-base">@hopetattoo</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="scroll-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center font-didot text-black">Encontre-nos no Mapa</h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8!2d-45.2597!3d-19.7133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQyJzQ4LjAiUyA0NcKwMTUnMzUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr&q=Av.+São+Vicente,+290+-+Bom+Despacho,+MG"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização HOPE Tattoo Studio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="beige-section py-8 text-center border-t border-gray-300">
        <p className="text-gray-600 text-sm">&copy; 2024 Hope Tattoo Studio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;