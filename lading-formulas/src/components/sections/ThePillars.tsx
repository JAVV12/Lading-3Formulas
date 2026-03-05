"use client";

import { motion } from "framer-motion";
import { Award, Wallet, PlaneTakeoff } from "lucide-react";

const PILLARS = [
    {
        icon: Award,
        title: "Autoridad Inequívoca",
        desc: "Posiciónate como la única opción lógica en tu mercado saturado.",
    },
    {
        icon: Wallet,
        title: "Flujo de Caja Predictivo",
        desc: "Sistemas matemáticos que garantizan ingresos constantes cada mes.",
    },
    {
        icon: PlaneTakeoff,
        title: "Libertad de Operación",
        desc: "Delegación inteligente y procesos que funcionan sin tu presencia física.",
    },
];

export function ThePillars() {
    return (
        <section className="px-6 py-20 text-center max-w-5xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight">
                ¿CÓMO ROMPER EL <span className="text-primary-glow italic glow-text">ESTANCAMIENTO?</span>
            </h2>
            <p className="text-white mb-16 text-sm md:text-base font-bold uppercase tracking-widest bg-dark-red/20 inline-block px-4 py-2 border border-dark-red/50 rounded-lg">
                LOS 3 PILARES DEL MÉTODO NEXOR PARA EL CONTROL TOTAL DE TU NEGOCIO:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                {PILLARS.map((pillar, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="flex flex-col md:flex-row md:items-start items-center text-center md:text-left gap-5 p-8 rounded-3xl bg-dark-grey border border-dark-red/20 hover:border-primary/40 transition-colors shadow-2xl"
                    >
                        <div className="flex size-14 md:size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 glow-shadow mb-2 md:mb-0">
                            <pillar.icon className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                        </div>
                        <div>
                            <h4 className="text-primary-glow font-bold text-lg md:text-xl mb-2 tracking-tight">
                                {pillar.title}
                            </h4>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                                {pillar.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
