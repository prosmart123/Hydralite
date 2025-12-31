import { Award, Lightbulb, Shield, Zap } from "lucide-react";

const achievementCards = [
  {
    icon: Award,
    title: "30+ Years of Innovation Experience",
    description: "Led by industry veterans with decades of hands-on experience in developing products for healthcare and defense sectors.",
    highlight: "3 Decades"
  },
  {
    icon: Lightbulb,
    title: "First-of-Its-Kind Technologies in India",
    description: "Pioneers behind innovations such as water-powered LED lighting, antimicrobial ambient disinfection systems, and advanced hospital safety devices.",
    highlight: "Patent Applied"
  },
  {
    icon: Shield,
    title: "Healthcare & Defense Focus",
    description: "Specialized solutions designed for critical applications where reliability and performance are non-negotiable.",
    highlight: "Mission Critical"
  }
];

const AboutUs = () => {
  return (
    <section id="features" className="bg-black text-white py-20 md:py-32 px-6 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90 tracking-wide">Innovation Since 1994</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white uppercase">Built on Experience.</span>
                <br />
                <span className="text-white uppercase">Driven by Purpose.</span>
              </h2>
            </div>

            <div className="space-y-6 border-l-2 border-white/20 pl-6">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                Hydralite Nature Power Pvt. Ltd. is an Indian innovation-driven startup incorporated in May 2024.
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
                We specialize in developing sustainable, affordable, and life-enhancing products for healthcare, safety, and everyday living. Our solutions are designed specifically for Indian conditions, where accessibility, affordability, and reliability matter most.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-5 py-2.5 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium text-white tracking-wide">Healthcare</span>
              </div>
              <div className="px-5 py-2.5 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium text-white tracking-wide">Safety</span>
              </div>
              <div className="px-5 py-2.5 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium text-white tracking-wide">Sustainability</span>
              </div>
            </div>
          </div>

          {/* Right Content - Achievement Cards - Desktop Only */}
          <div className="hidden lg:block space-y-5">
            {achievementCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="group relative">
                  <div className="relative flex items-start gap-5 bg-white/[0.03] backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight uppercase tracking-wide">
                          {card.title}
                        </h3>
                        <div className="flex-shrink-0 px-3 py-1 bg-white/10 rounded-md border border-white/20">
                          <span className="text-xs font-semibold text-white whitespace-nowrap tracking-wider">
                            {card.highlight}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Patent Portfolio */}
            <div className="mt-8 p-6 bg-white/[0.02] rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-base font-semibold text-white uppercase tracking-wide">Patent Portfolio</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Several of our core technologies are patent-applied and designed to be scalable across healthcare institutions, rural programs, and consumer markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
