"use client";

import { motion } from "framer-motion";
import { HeartCrack, Lock, Clock, AlertTriangle } from "lucide-react";

const CHAOS_POINTS = [
    {
        icon: HeartCrack,
        title: "Hemorragia Silenciosa",
        text: "Tu dinero se escapa en gastos invisibles y una estructura que no escala.",
    },
    {
        icon: Lock,
        title: "La Cárcel del Ego",
        text: "Crees que nadie puede hacerlo como tú y terminas siendo el cuello de botella.",
    },
    {
        icon: Clock,
        title: "La Esclavitud 24/7",
        text: "Si dejas de trabajar el negocio muere. No tienes una empresa, tienes un auto-empleo agotador.",
    },
    {
        icon: AlertTriangle,
        title: "Inestabilidad Crónica",
        text: "Un mes vendes, el otro no. Vives en una montaña rusa de ansiedad financiera.",
    },
];

export function TheChaos() {
    return (
        <section className="px-6 py-16 bg-dark-grey/40 border-y border-dark-red/30 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase leading-tight">
                        El caos que te mantiene en la <span className="text-primary glow-text">pobreza</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary-glow mx-auto rounded-full shadow-[0_0_15px_rgba(255,0,0,0.6)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {CHAOS_POINTS.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 md:p-8 rounded-2xl bg-dark-red/10 border border-dark-red/30 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <point.icon className="text-primary w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                                <h4 className="text-primary font-black uppercase text-sm md:text-base">{point.title}</h4>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                                {point.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
