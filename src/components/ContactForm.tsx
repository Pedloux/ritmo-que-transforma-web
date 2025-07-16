import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    participantes: "",
    dataEvento: "",
    tipoEvento: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposta Enviada! 🎵",
      description: "Entraremos em contato em até 2 horas úteis para alinhar todos os detalhes.",
    });
    
    // Reset form
    setFormData({
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      participantes: "",
      dataEvento: "",
      tipoEvento: "",
      mensagem: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="cotacao" className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
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
              Vamos Criar uma{" "}
              <span className="text-yellow-300">
                Experiência Única
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conte-nos sobre seu evento e receba uma proposta personalizada 
              em até 2 horas úteis
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
                      <p className="text-white font-medium">(11) 99999-9999</p>
                      <p className="text-white/80 text-sm">WhatsApp 24h</p>
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
                    98% de aprovação dos clientes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
                    Metodologia exclusiva e comprovada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
                    Atendimento personalizado
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleChange("empresa", e.target.value)}
                      placeholder="Nome da empresa"
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
                    <Label htmlFor="telefone">WhatsApp *</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="participantes">Nº de Participantes</Label>
                    <Select onValueChange={(value) => handleChange("participantes", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20-50">20 a 50 pessoas</SelectItem>
                        <SelectItem value="51-100">51 a 100 pessoas</SelectItem>
                        <SelectItem value="101-200">101 a 200 pessoas</SelectItem>
                        <SelectItem value="201-500">201 a 500 pessoas</SelectItem>
                        <SelectItem value="500+">Mais de 500 pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataEvento">Data Desejada</Label>
                    <Input
                      id="dataEvento"
                      type="date"
                      value={formData.dataEvento}
                      onChange={(e) => handleChange("dataEvento", e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="tipoEvento">Tipo de Evento</Label>
                    <Select onValueChange={(value) => handleChange("tipoEvento", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="team-building">Team Building</SelectItem>
                        <SelectItem value="integracao">Integração de Equipes</SelectItem>
                        <SelectItem value="convencao">Convenção/Evento Corporativo</SelectItem>
                        <SelectItem value="treinamento">Treinamento/Workshop</SelectItem>
                        <SelectItem value="comemorativo">Evento Comemorativo</SelectItem>
                        <SelectItem value="diversidade">Programa de Diversidade</SelectItem>
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
                      placeholder="Conte-nos mais sobre seus objetivos e expectativas para o evento..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full mt-8"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  * Campos obrigatórios. Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;