import { useState, useEffect } from "react";
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
    mensagem: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    fbp: "",
    fbc: "",
    gclid: "",
    ga: "",
    referrer: "",
    pageUrl: "",
    userAgent: "",
    fbclid: ""
  });



  // Função para pegar cookies
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || "";
    return "";
  }

  // Preencher campos de rastreamento ao montar
  useEffect(() => {
    // Função para extrair parâmetros UTM e outros do URL
    const getTrackingFields = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return {
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
        gclid: urlParams.get("gclid") || "",
        fbclid: urlParams.get("fbclid") || "",
        fbp: getCookie("_fbp") || "",
        fbc: getCookie("_fbc") || "",
        ga: getCookie("_ga") || "",
        referrer: document.referrer || "",
        pageUrl: window.location.href,
        userAgent: navigator.userAgent || ""
      };
    };
    const tracking = getTrackingFields();
    setFormData((prev) => ({ ...prev, ...tracking }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Montar objeto para envio
    const payload = {
      ...formData,
      utm: {
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
      },
    };
    try {
      await fetch("https://webhook-n8n.grupovorp.com/webhook/apito-de-mestre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      toast({
        title: "Orçamento Solicitado! 🎵",
        description: "Entraremos em contato em até 2 horas úteis com seu orçamento personalizado.",
      });
      setFormData({
        nome: "",
        convidados: "",
        email: "",
        whatsapp: "",
        dataEvento: "",
        cidade: "",
        tipoFesta: "",
        mensagem: "",
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
        fbp: "",
        fbc: "",
        gclid: "",
        ga: "",
        referrer: "",
        pageUrl: "",
        userAgent: "",
        fbclid: ""
      });
    } catch (err) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    }
  };

  // Máscara de telefone para formatos com ou sem nono dígito
  function formatPhone(value: string) {
    // Remove tudo que não for número
    value = value.replace(/\D/g, "");
    if (value.length <= 10) {
      // (11) 9999-9999
      return value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, "");
    } else {
      // (11) 99999-9999
      return value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, "");
    }
  }

  const handleChange = (field: string, value: string) => {
    if (field === "whatsapp") {
      value = formatPhone(value);
    }
    if (field === "convidados") {
      value = value.replace(/\D/g, ""); // Remove tudo que não for número
    }
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
                      placeholder="Ex: 80"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={5}
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
                      maxLength={15}
                      inputMode="tel"
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


                {/* Campos ocultos para rastreamento */}
                <input type="hidden" name="utm_source" value={formData.utm_source} />
                <input type="hidden" name="utm_medium" value={formData.utm_medium} />
                <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
                <input type="hidden" name="utm_term" value={formData.utm_term} />
                <input type="hidden" name="utm_content" value={formData.utm_content} />
                <input type="hidden" name="fbp" value={formData.fbp} />
                <input type="hidden" name="fbc" value={formData.fbc} />
                <input type="hidden" name="gclid" value={formData.gclid} />
                <input type="hidden" name="ga" value={formData.ga} />
                <input type="hidden" name="referrer" value={formData.referrer} />
                <input type="hidden" name="pageUrl" value={formData.pageUrl} />
                <input type="hidden" name="userAgent" value={formData.userAgent} />
                <input type="hidden" name="fbclid" value={formData.fbclid} />

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