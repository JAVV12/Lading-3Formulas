"use client";

import { motion } from "framer-motion";
import { BarChart4, LayoutDashboard, ShieldCheck, HelpCircle } from "lucide-react";

export function OfferAndGuarantee() {
    return (
        <>
            <section className="px-6 py-20 bg-brand-black relative overflow-hidden">
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h3 className="text-primary-glow text-xl md:text-2xl font-black uppercase tracking-widest mb-10 text-center glow-text">
                        BONOS DE ACCIÓN RÁPIDA
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {/* Bonus 1 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-3xl bg-dark-grey border border-dark-red/40 hover:border-primary/50 transition-colors shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-primary/20 text-primary-glow text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase border border-primary/30">
                                    VALOR: $47 — GRATIS
                                </span>
                                <BarChart4 className="text-primary w-8 h-8 flex-shrink-0 drop-shadow-md" />
                            </div>
                            <h4 className="text-white font-bold text-xl md:text-2xl mb-3 uppercase tracking-tight">Plantilla Cash Flow Switch</h4>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                Es la herramienta exacta para auditar tus finanzas y encontrar las fugas de dinero en menos de 15 minutos exactos.
                            </p>
                        </motion.div>

                        {/* Bonus 2 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-3xl bg-dark-grey border border-dark-red/40 hover:border-primary/50 transition-colors shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-primary/20 text-primary-glow text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase border border-primary/30">
                                    VALOR: $67 — GRATIS
                                </span>
                                <LayoutDashboard className="text-primary w-8 h-8 flex-shrink-0 drop-shadow-md" />
                            </div>
                            <h4 className="text-white font-bold text-xl md:text-2xl mb-3 uppercase tracking-tight">TABLERO DE CONTROL PREDICTIVO</h4>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                Herramienta táctica para liberar el flujo de caja futuro desde la estrategia. Monitoreo constante 100% predecible.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing and Guarantee Block */}
            <section className="px-6 py-24 bg-dark-red/5 border-t border-dark-red/30">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-stretch justify-center">

                    {/* Main Pricing Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 p-8 md:p-10 rounded-[2rem] bg-dark-grey mockup-frame text-center relative overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.15)] focus-within:ring-2 focus-within:ring-primary"
                    >
                        <div className="absolute -top-16 -right-16 size-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>

                        <h2 className="text-white text-xl font-black mb-8 uppercase tracking-widest border-b border-white/10 pb-4 inline-block">
                            INICIA TU TRANSFORMACIÓN
                        </h2>

                        <div className="flex flex-col items-center gap-2 mb-10">
                            <span className="text-slate-400 text-xs md:text-sm font-bold line-through uppercase tracking-[0.2em] mb-1">
                                VALOR REAL $171 USD
                            </span>
                            <span className="text-primary-glow text-5xl md:text-6xl font-black glow-text leading-tight my-2 drop-shadow-2xl">
                                HOY $47 USD
                            </span>
                            <span className="text-neon-green text-xs md:text-sm font-black uppercase tracking-widest mt-4 border border-neon-green/30 px-4 py-2 rounded-lg bg-neon-green/10 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
                                AHORRO $124 USD
                            </span>
                            <p className="text-slate-500 text-[10px] md:text-xs mt-6 font-bold uppercase tracking-[0.2em]">
                                PAGO ÚNICO • ACCESO DE POR VIDA
                            </p>
                        </div>

                        <button className="w-full bg-primary text-white font-black py-6 md:py-7 rounded-2xl glow-button uppercase tracking-[0.15em] text-base md:text-lg hover:bg-white hover:text-primary active:scale-95 transition-all shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                            Quiero liberar mi flujo
                        </button>
                    </motion.div>

                    {/* Guarantee Shield Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-1/2 p-8 md:p-10 rounded-[2rem] bg-dark-grey border border-dark-red/30 text-center relative overflow-hidden shadow-2xl flex flex-col justify-center"
                    >
                        <ShieldCheck className="text-primary w-20 h-20 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]" />
                        <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-4 uppercase tracking-tighter">
                            Garantía Cero Riesgo 7 Días
                        </h3>
                        <p className="text-primary-glow text-[10px] md:text-xs font-black tracking-[0.2em] mb-6 uppercase border border-primary/20 bg-primary/5 inline-block mx-auto px-3 py-1 rounded">
                            RESPALDADO POR HOTMART
                        </p>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                            Prueba el método completo por una semana. Si no sientes que tu visión operativa del negocio ha cambiado radicalmente, te devolvemos el <strong className="text-primary-glow glow-text font-black">100% de tu dinero</strong> de inmediato. Cero preguntas, todo el riesgo es nuestro.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* FAQ inline */}
            <section className="px-6 py-20 bg-brand-black">
                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <HelpCircle className="text-primary w-6 h-6" />
                        <h3 className="text-white text-2xl font-black uppercase tracking-tight">Preguntas Frecuentes</h3>
                    </div>

                    {[
                        { q: "¿Necesito tener un negocio ya funcionando?", a: "Sí, este sistema de palancas está diseñado para optimizar y escalar modelos que ya tienen tracción en el mercado pero están estancados operativamente." },
                        { q: "¿Por qué el precio es tan bajo ($47)?", a: "Queremos democratizar el acceso fundamental al Método NEXOR y que la inversión inicial no sea el obstáculo para tu libertad financiera." },
                        { q: "¿Cuándo recibo el acceso al entrenamiento?", a: "Totalmente inmediato. Después del pago seguro recibirás un correo automático con tus credenciales de acceso para la plataforma exclusiva." }
                    ].map((faq, i) => (
                        <details key={i} className="group bg-dark-grey border border-dark-red/20 hover:border-primary/40 rounded-2xl p-6 transition-colors open:bg-dark-red/5 focus-within:ring-2 ring-primary/30">
                            <summary className="text-primary-glow font-bold text-lg cursor-pointer outline-none select-none list-none relative pr-8">
                                {faq.q}
                                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white font-mono text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="text-slate-400 text-sm md:text-base mt-4 font-medium leading-relaxed">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </section>
        </>
    );
}
