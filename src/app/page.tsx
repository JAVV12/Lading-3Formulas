import { StickyCountdown } from "@/components/ui/StickyCountdown";
import { Hero } from "@/components/sections/Hero";
import { TheChaos } from "@/components/sections/TheChaos";
import { ThePillars } from "@/components/sections/ThePillars";
import { MentorAuthority } from "@/components/sections/MentorAuthority";
import { ThePlan } from "@/components/sections/ThePlan";
import { OfferAndGuarantee } from "@/components/sections/OfferAndGuarantee";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-sans antialiased overflow-x-hidden selection:bg-primary/30">
      <StickyCountdown />

      <Hero />
      <TheChaos />
      <ThePillars />
      <MentorAuthority />
      <ThePlan />
      <OfferAndGuarantee />

      {/* Footer */}
      <footer className="py-12 bg-dark-grey text-center border-t border-dark-red/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-metallic-grey text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} NEXOR METHOD • JONATHAN TORO • TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-[#1C1C1E]">
            <span className="w-12 h-1 bg-dark-red/20 rounded-full"></span>
            <span className="text-dark-red/40 text-xs font-black tracking-widest uppercase">Neon Red</span>
            <span className="w-12 h-1 bg-dark-red/20 rounded-full"></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
