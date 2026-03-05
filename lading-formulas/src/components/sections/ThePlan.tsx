"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Filter } from "lucide-react";

const MODULES = [
    {
        num: "M1",
        title: "La Anatomía del Ego",
        desc: "Desmontamos la identidad que te mantiene operando en pequeño y construimos el mindset implacable de CEO escalable.",
        icon: Zap,
    },
    {
        num: "M2",
        title: "El Cash Flow Switch",
        desc: "El sistema técnico para encender el flujo de caja predecible en 72 horas y detener las pérdidas innecesarias.",
        icon: TrendingUp,
    },
    {
        num: "M3",
        title: "El Embudo Invisible",
        desc: "Cómo automatizar la adquisición de clientes de alto ticket sin sacrificar un solo minuto de tu tiempo libre.",
        icon: Filter,
    },
];

export function ThePlan() {
    return (
        <section className="px-6 py-20 bg-dark-grey/20 relative">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary-glow text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-4 md:px-6 py-1.5 md:py-2 border border-primary/30 bg-primary/10 rounded-full drop-shadow-md shadow-primary/20">
                        Tu Plan de Ataque
                    </span>
                    <h2 className="text-white text-3xl md:text-5xl font-black mt-8 uppercase tracking-tight">
                        3 Palancas de <span className="text-primary glow-text">Control Total</span>
                    </h2>
                </div>

                <div className="relative pl-10 md:pl-16 space-y-16 before:absolute before:inset-y-0 before:left-[21px] md:before:left-[35px] before:w-[2px] before:bg-primary/20 before:-z-10">
                    {MODULES.map((mod, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group bg-dark-red/5 p-6 md:p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-all shadow-xl"
                        >
                            {/* Timeline Marker Node */}
                            <div
                                className="absolute -left-[56px] md:-left-[70px] top-6 flex size-12 md:size-14 items-center justify-center rounded-xl bg-primary text-white text-sm md:text-base font-black glow-shadow border-[3px] border-brand-black shadow-[0_0_20px_rgba(255,0,0,0.5)] z-10"
                                aria-hidden="true"
                            >
                                {mod.num}
                            </div>

                            <h4 className="flex items-center gap-3 text-primary-glow font-bold uppercase text-base md:text-xl tracking-wide mb-3">
                                <mod.icon className="w-6 h-6 shrink-0" />
                                Módulo {index + 1}: {mod.title}
                            </h4>
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                                {mod.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
