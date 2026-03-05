"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export function MentorAuthority() {
    return (
        <section className="px-6 py-20 bg-brand-black border-y border-dark-red/20 relative overflow-hidden">
            {/* Background radial gradient */}
            <div className="absolute inset-x-0 bottom-[-50%] h-[150%] w-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary-glow text-xl md:text-2xl font-black uppercase tracking-[0.2em] glow-text drop-shadow-xl">
                        EL MENTOR
                    </h2>
                    <div className="h-1 w-16 md:w-24 bg-primary mx-auto mt-6 rounded-full opacity-60"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group shrink-0"
                    >
                        {/* Blurry glow backdrop */}
                        <div className="absolute inset-0 bg-primary/40 rounded-full blur-[40px] transition-all group-hover:blur-[60px] duration-500"></div>

                        <div className="relative size-64 md:size-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-[0_0_40px_rgba(255,0,0,0.3)]">
                            <img
                                alt="Jonathan Toro Photo"
                                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-primary text-white p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.5)] border-2 border-brand-black">
                            <BadgeCheck className="w-8 h-8 md:w-10 md:h-10 fill-white text-primary" />
                        </div>
                    </motion.div>

                    <div className="text-center md:text-left space-y-6">
                        <div>
                            <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
                                Jonathan Toro
                            </h3>
                            <span className="block text-lg md:text-xl font-bold text-primary-glow mt-2 tracking-wide">
                                Arquitecto de Imperios Pyme
                            </span>
                        </div>

                        <div className="text-slate-300 text-sm md:text-base leading-relaxed font-medium space-y-4 max-w-lg">
                            <p>
                                Estratega detrás de negocios que han roto el techo de la operatividad para convertirse en <strong className="text-primary font-black drop-shadow-md">máquinas de rentabilidad autónoma.</strong>
                            </p>
                            <p>
                                Especialista en rescatar empresas estancadas sustituyendo el sudor del dueño por <strong className="text-white">ingeniería empresarial.</strong> A través del Método NÉXOR, no solo transforma embudos; transmuta la identidad del empresario para escalar a las siete cifras sin colapsar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
