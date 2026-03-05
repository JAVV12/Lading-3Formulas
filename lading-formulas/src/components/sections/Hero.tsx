"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <header className="pt-12 pb-16 px-6 text-center max-w-4xl mx-auto">
            {/* Sub Title / Brand */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 w-full text-center"
            >
                <h2 className="text-primary-glow text-[11px] font-black uppercase tracking-[0.5em] border-b border-primary/30 pb-2 inline-block">
                    JONATHAN TORO
                </h2>
            </motion.div>

            {/* Premise */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-[95%] mx-auto mb-10"
            >
                <p className="text-white text-base md:text-xl font-extrabold uppercase tracking-[0.1em] leading-snug">
                    Detén la hemorragia.<br />
                    <span className="text-primary-glow glow-text italic">Escala a millones.</span>
                </p>
            </motion.div>

            {/* Main Headline */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 space-y-1"
            >
                <h1 className="flex flex-col items-center">
                    <span className="text-white text-xl md:text-3xl font-bold uppercase tracking-tight block">
                        3 Fórmulas Prohibidas
                    </span>
                    <span className="text-primary-glow text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight block glow-text py-2 whitespace-nowrap w-full text-center">
                        Libera tu Flujo de Caja
                    </span>
                    <span className="text-white text-lg md:text-2xl font-bold uppercase tracking-tight block mt-2">
                        Duplica tus ganancias
                    </span>
                </h1>
            </motion.div>

            {/* Hook Paragraph */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-300 text-base md:text-xl mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
            >
                Este es el sistema de implementación inmediata que te obliga a <strong className="text-white font-bold">romper tu identidad limitante.</strong>
            </motion.p>

            {/* VSL Dark Red Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative w-full shadow-[0_0_50px_rgba(255,0,0,0.15)] aspect-video rounded-2xl overflow-hidden mb-10 vsl-border bg-black cursor-pointer group"
                aria-label="Reproducir VSL Rojo Neon"
                role="button"
                tabIndex={0}
            >
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 transition-colors group-hover:bg-black/40">
                    <div className="size-16 md:size-24 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/40 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                        <Play className="text-primary w-8 h-8 md:w-12 md:h-12 ml-1 fill-primary" />
                    </div>
                </div>
                <img
                    alt="Dark tactical VSL preview preview"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 haze-effect"
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    loading="eager"
                />
            </motion.div>

            {/* CTA neon */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full md:w-auto md:px-14 bg-primary text-white font-black py-5 md:py-6 rounded-xl glow-button uppercase tracking-widest text-sm md:text-lg hover:bg-primary-glow active:scale-[0.98] transition-all"
            >
                Quiero liberar mi flujo de caja
            </motion.button>
        </header>
    );
}
