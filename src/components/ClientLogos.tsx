const ClientLogos = () => {
  const clients = [
    { name: "Itaú", logo: "/lovable-uploads/b3a02e5f-e0cb-4ff4-90e3-a94f4ba5adf3.png" },
    { name: "Ferrero", logo: "/lovable-uploads/c9809b20-145f-4a48-93a3-a2b68d1d8388.png" },
    { name: "Banco do Brasil", logo: "/lovable-uploads/8e758b8c-11da-4e77-adcc-acc1c737b6e9.png" },
    { name: "BIC", logo: "/lovable-uploads/b8c94931-e90c-44b7-83cd-1cfd2404d6a5.png" },
    { name: "Warner Bros", logo: "/lovable-uploads/f3fc3170-1ec1-49d2-b49e-53292385a082.png" },
    { name: "Bosch", logo: "/lovable-uploads/d433af97-1ac8-4858-964f-a138250d3fae.png" },
    { name: "Bracol", logo: "/lovable-uploads/5fa5ebee-15ec-466f-b788-1134d1b9cbc8.png" },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
            Confiança de grandes marcas
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={`Logo ${client.name}`}
                className="h-12 w-auto object-contain filter brightness-0"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className="flex-shrink-0 grayscale opacity-60"
              >
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`}
                  className="h-10 w-auto object-contain filter brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;