import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Star, Instagram, Linkedin, Youtube } from "lucide-react";
import mestreLogo from "/lovable-uploads/6ad80a4b-fee0-44ae-aae5-9a4c4ed43f9e.png";

const Footer = () => {
  const navigation = [
    { name: "Sobre", href: "#sobre" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#cotacao" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={mestreLogo} 
                alt="Apito de Mestre - Logo"
                className="w-16 h-16 object-contain bg-white rounded-xl p-2"
              />
              <div>
                <h3 className="text-2xl font-bold">Apito de Mestre</h3>
                <p className="text-white/80">Ritmo que Transforma Resultados</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Há 26 anos criando experiências musicais que fortalecem culturas 
              organizacionais e transformam equipes em verdadeiras orquestras corporativas.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm">4,9/5 (250+ avaliações Google)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-white font-medium">(11) 94763-3483</p>
                  <p className="text-white/60 text-sm">WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-white font-medium">contato@apitodemestre.com.br</p>
                  <p className="text-white/60 text-sm">E-mail</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-white font-medium">São Paulo, SP</p>
                  <p className="text-white/60 text-sm">Atendemos todo Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-brand rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para Transformar seu Evento?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Solicite uma proposta personalizada e descubra como a música pode 
            transformar sua festa em um evento memorável.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => scrollToSection('#orcamento')}
            className="bg-white text-primary hover:bg-white/90"
          >
            Solicitar Proposta Gratuita
          </Button>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a 
              href="https://www.instagram.com/apitodemestre/" 
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/apito-de-mestre-entretenimento/" 
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@ApitodeMestre/videos" 
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              © 2024 Apito de Mestre®. Todos os direitos reservados.
            </p>
            <p className="text-white/40 text-xs mt-1">
              CNPJ: 12.401.276/0001-60 | Desenvolvido com ❤️ e muita música
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;