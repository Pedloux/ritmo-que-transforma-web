import { Users, Target, BookOpen } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Users,
      title: "Alegria Contagiante",
      description: "Criamos um ambiente de pura felicidade onde todos se sentem parte de algo especial e único."
    },
    {
      icon: Target,
      title: "Energia Autêntica",
      description: "Samba genuíno que desperta emoções verdadeiras e conecta pessoas de todas as idades."
    },
    {
      icon: BookOpen,
      title: "Memórias Eternas",
      description: "Momentos que ficam gravados no coração para sempre, criando histórias que serão contadas por gerações."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher o{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Apito de Mestre?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformamos festas em experiências emocionantes que seus convidados 
            vão lembrar para sempre, com autenticidade e alegria genuína.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-brand opacity-10 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Methodology Description */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              O Segredo da Nossa Magia
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada show é único e personalizado para sua festa. Combinamos repertório especial, 
              interação genuína com os convidados e toda energia do samba autêntico para criar 
              momentos que ninguém esquece. É música, é emoção, é celebração da vida!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;