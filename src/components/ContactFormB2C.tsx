import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone } from "lucide-react";

const ContactFormB2C = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    convidados: "",
    email: "",
    whatsapp: "",
    dataEvento: "",
    cidade: "",
    tipoFesta: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Orçamento Solicitado! 🎵",
      description: "Entraremos em contato em até 2 horas úteis com seu orçamento personalizado.",
    });
    
    // Reset form
    setFormData({
      nome: "",
      convidados: "",
      email: "",
      whatsapp: "",
      dataEvento: "",
      cidade: "",
      tipoFesta: "",
      mensagem: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="orcamento" className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Solicite seu{" "}
              <span className="text-yellow-300">
                Orçamento
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transforme sua festa em uma experiência inesquecível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Contato Direto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-300" />
                    <div>
                      <p className="text-white font-medium">(11) 94763-3483</p>
                      <p className="text-white/80 text-sm">WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-yellow-300" />
                    <div>
                      <p className="text-white font-medium">contato@apitodemestre.com.br</p>
                      <p className="text-white/80 text-sm">Resposta em 2h úteis</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">
                  Por que escolher a Apito de Mestre?
                </h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
                    26 anos de experiência comprovada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
                    98% de aprovação dos convidados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
                    Experiências únicas e memoráveis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
                    Atendimento em todo o Brasil
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Nome do aniversariante/casal"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="convidados">Número de Convidados *</Label>
                    <Input
                      id="convidados"
                      value={formData.convidados}
                      onChange={(e) => handleChange("convidados", e.target.value)}
                      placeholder="Ex: 80 pessoas"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataEvento">Data do Evento</Label>
                    <Input
                      id="dataEvento"
                      type="date"
                      value={formData.dataEvento}
                      onChange={(e) => handleChange("dataEvento", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade *</Label>
                    <Input
                      id="cidade"
                      value={formData.cidade}
                      onChange={(e) => handleChange("cidade", e.target.value)}
                      placeholder="Ex: São Paulo - SP"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="tipoFesta">Tipo de Festa *</Label>
                    <Select onValueChange={(value) => handleChange("tipoFesta", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casamento">Casamento</SelectItem>
                        <SelectItem value="bodas">Bodas</SelectItem>
                        <SelectItem value="aniversario">Aniversário</SelectItem>
                        <SelectItem value="festa-premium">Festa Premium</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="mensagem">Mensagem Adicional</Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => handleChange("mensagem", e.target.value)}
                      placeholder="Conte-nos mais sobre sua festa e o que você imagina..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-8 bg-gradient-brand text-white hover:shadow-hover font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Quero meu orçamento rápido
                </Button>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Resposta em até 2 horas úteis • Orçamento gratuito • Sem compromisso
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormB2C;