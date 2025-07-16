const BigNumbers = () => {
  const stats = [
    {
      number: "26",
      unit: "anos",
      label: "de história",
      description: "Experiência consolidada no mercado"
    },
    {
      number: "1500",
      unit: "+",
      label: "eventos realizados",
      description: "Experiências transformadoras"
    },
    {
      number: "98",
      unit: "%",
      label: "de aprovação",
      description: "Clientes satisfeitos e engajados"
    },
    {
      number: "125",
      unit: "mil+",
      label: "pessoas impactadas",
      description: "Vidas tocadas pela música"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements - Removidos para fundo branco */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#221a16]">
            Por que Confiar na{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Apito de Mestre?
            </span>
          </h2>
          <p className="text-xl text-[#221a16] max-w-2xl mx-auto">
            Números que comprovam nossa excelência em criar experiências memoráveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-[#221a16]">
                  {stat.number}
                </span>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent ml-1">
                  {stat.unit}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-[#221a16] mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-[#221a16]/80 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-[#221a16] text-lg mb-6">
            Junte-se às empresas que já transformaram suas equipes
          </p>
          <div className="flex justify-center">
            <div className="bg-[#221a16]/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <span className="text-[#221a16] font-medium">
                ⭐ 4,9 estrelas no Google | 250+ avaliações
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigNumbers;