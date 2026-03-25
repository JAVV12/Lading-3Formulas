'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VSLPlayer from '@/components/VSLPlayer';

// Variants with any casting to avoid strict easing type issues in this environment
const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

export default function Home() {
    const [showButton, setShowButton] = useState(false);
    const [timeLeft, setTimeLeft] = useState(899); // 14:59 en segundos

    // Lógica del Contador Regresivo
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const TRIGGER_SECONDS = 5;

    const handleProgress = (state: { playedSeconds: number }) => {
        if (!showButton && state.playedSeconds >= TRIGGER_SECONDS) {
            setShowButton(true);
        }
    };

    return (
        <main className="min-h-screen bg-brand-black overflow-x-hidden selection:bg-primary selection:text-white pt-16">
            {/* Sticky/Fixed Countdown Bar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="sticky-countdown"
            >
                <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="material-symbols-outlined text-brand-black text-sm md:text-base animate-pulse">timer</span>
                    <p className="text-[10px] sm:text-[12px] md:text-sm lg:text-base font-black tracking-[0.05em] sm:tracking-[0.15em] text-brand-black uppercase">LA OFERTA TERMINA EN: </p>
                    <span className="text-brand-black font-black tracking-widest text-sm md:text-xl lg:text-2xl border-b-2 border-brand-black/40 tabular-nums">
                        {formatTime(timeLeft)}
                    </span>
                </div>
            </motion.div>

            {/* Hero Section */}
            <header className="pt-12 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[150px] -z-10"
                ></motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="mb-10 w-full text-center">
                        <h2 className="text-primary-glow text-[10px] sm:text-[12px] md:text-sm lg:text-base font-black uppercase tracking-[0.2em] sm:tracking-[0.5em] border-b border-primary/30 pb-2 inline-block">¿Empresario y sin DINERO?</h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="max-w-full mx-auto mb-10 px-2">
                        <p className="text-white text-base md:text-xl lg:text-2xl font-extrabold uppercase tracking-[0.05em] sm:tracking-[0.1em] leading-snug">
                            DETÉN LA HEMORRAGIA.<br />
                            <motion.span
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-primary-glow glow-text italic"
                            >ESCALA A MILLONES.</motion.span>
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-8 space-y-1">
                        <h1 className="flex flex-col items-center">
                            <span className="text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tight block">3 FÓRMULAS PROHIBIDAS</span>
                            <span className="text-primary-glow text-xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight block glow-text py-1 text-center w-full max-w-full overflow-hidden text-ellipsis">LIBERA TU FLUJO DE CAJA</span>
                            <span className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight block">DUPLICA TUS GANANCIAS</span>
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-slate-300 text-sm sm:text-base md:text-xl lg:text-2xl mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                        Este es el sistema de implementación inmediata que te obliga a <span className="text-white font-bold">romper tu identidad limitante.</span>
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="relative z-0"
                    >
                        <VSLPlayer
                            videoUrl="/videos/vsl.mp4"
                            onProgress={handleProgress}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {showButton && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="max-w-md mx-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 0, 0, 0.7)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative w-full bg-primary text-white font-black py-5 md:py-7 rounded-xl glow-button uppercase tracking-widest text-sm md:text-base lg:text-lg transition-all shadow-lg"
                                >
                                    ¡QUIERO LIBERAR MI FLUJO DE CAJA AHORA!
                                    <motion.div
                                        animate={{ x: [0, 10, 0], opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2"
                                    >
                                        <span className="material-symbols-outlined">double_arrow</span>
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </header>

            {/* Problems Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="px-6 py-16 bg-dark-grey/40 border-y border-dark-red/30 relative overflow-hidden"
            >
                <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10"></div>
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 uppercase leading-tight">EL CAOS QUE TE MANTIENE EN LA <span className="text-primary glow-text">POBREZA</span></h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1.5 bg-primary-glow mx-auto rounded-full shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                    ></motion.div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        { icon: 'heart_broken', title: 'Hemorragia Silenciosa', desc: 'Tu dinero se escapa en gastos invisibles y una estructura que no escala.' },
                        { icon: 'lock', title: 'La Cárcel del Ego', desc: 'Crees que nadie puede hacerlo como tú y terminas siendo el cuello de botella.' },
                        { icon: 'schedule', title: 'La Esclavitud 24/7', desc: 'Si dejas de trabajar el negocio muere. No tienes una empresa, tienes un auto-empleo agotador.' },
                        { icon: 'warning', title: 'Inestabilidad Crónica', desc: 'Un mes vendes, el otro no. Vives en una montaña rusa de ansiedad financiera.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -5, borderColor: "rgba(255, 0, 0, 0.5)" }}
                            className="p-6 rounded-2xl bg-dark-red/10 border border-dark-red/30 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <motion.span
                                    whileHover={{ rotate: 15 }}
                                    className="material-symbols-outlined text-primary"
                                >{item.icon}</motion.span>
                                <h4 className="text-primary font-black uppercase text-sm">{item.title}</h4>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Pillars Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="px-6 py-16 text-center relative overflow-hidden"
            >
                <div className="absolute -right-20 bottom-0 w-80 h-80 bg-primary/5 blur-[120px] -z-10"></div>
                <motion.h2 variants={itemVariants} className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
                    ¿CÓMO ROMPER EL <span className="text-primary-glow italic glow-text">ESTANCAMIENTO?</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-white/80 mb-10 text-[10px] sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-widest px-4">LOS 3 PILARES DEL MÉTODO NEXOR PARA EL CONTROL TOTAL DE TU NEGOCIO:</motion.p>
                <div className="grid grid-cols-1 gap-6 mb-12 text-left max-w-3xl mx-auto">
                    {[
                        { icon: 'workspace_premium', title: 'Autoridad Inequívoca', desc: 'Posiciónate como la única opción lógica en tu mercado saturado.' },
                        { icon: 'account_balance_wallet', title: 'Flujo de Caja Predictivo', desc: 'Sistemas matemáticos que garantizan ingresos constantes cada mes.' },
                        { icon: 'flight_takeoff', title: 'Libertad de Operación', desc: 'Delegación inteligente y procesos que funcionan sin tu presencia física.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(50, 50, 50, 0.8)" }}
                            className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-dark-grey border border-dark-red/20 transition-all"
                        >
                            <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 glow-shadow">
                                <span className="material-symbols-outlined text-2xl sm:text-3xl">{item.icon}</span>
                            </div>
                            <div>
                                <h4 className="text-primary-glow font-bold text-base sm:text-lg mb-1">{item.title}</h4>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Mentor Section */}
            <section className="px-6 py-20 bg-brand-black border-y border-dark-red/20 relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-primary-glow text-xl sm:text-2xl font-black uppercase tracking-widest glow-text">TU MENTOR</h2>
                        <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full opacity-50"></div>
                    </motion.div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transition-all"></div>
                            <div className="relative size-48 sm:size-64 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                                <img alt="Jonathan Toro Photo" className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500" src="/images/mentor.jpg" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left space-y-6 px-2 max-w-xl"
                        >
                            <h3 className="text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight">
                                JONATHAN TORO <span className="block text-base sm:text-xl lg:text-2xl font-medium text-primary-glow mt-2">Mentor de Negocios Pyme</span>
                            </h3>
                            <div className="space-y-4 text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed font-normal">
                                <p>
                                    <span className="text-primary font-bold">Jonathan Toro</span> es el estratega detrás de negocios que han convertido la operatividad en <span className="text-primary font-bold">máquinas de rentabilidad autónoma</span>. Con el <span className="text-primary font-bold">Método NÉXOR</span>, transmuta la identidad del empresario: de un operario esclavo a un arquitecto de imperios que domina sus márgenes y recupera su tiempo.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="px-6 py-16 bg-dark-grey/20 relative overflow-hidden"
            >
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <span className="text-primary-glow text-[9px] sm:text-[12px] md:text-sm lg:text-base font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] px-5 py-2 border border-primary/30 bg-primary/5 rounded-full">TU PLAN DE ATAQUE</span>
                    <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black mt-8 uppercase">3 PALANCAS DE CONTROL</h2>
                </motion.div>

                <div className="space-y-12 max-w-4xl mx-auto flex flex-col items-center">
                    {[
                        { m: 'M1', title: 'Módulo 1: La Anatomía del Ego', desc: 'Mindset de CEO escalable.' },
                        { m: 'M2', title: 'Módulo 2: El Cash Flow Switch', desc: 'Sistema para encender el flujo de caja predecible.' },
                        { m: 'M3', title: 'Módulo 3: El Embudo Invisible', desc: 'Adquisición de clientes automatizada.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center max-w-md group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, backgroundColor: "#ff0000" }}
                                className="flex size-12 sm:size-16 md:size-20 items-center justify-center rounded-full bg-primary text-white text-sm sm:text-lg md:text-xl font-black glow-shadow border-2 border-primary/50 uppercase cursor-default mb-6 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                            >
                                {item.m}
                            </motion.div>
                            <h4 className="text-primary-glow font-bold uppercase text-base sm:text-xl md:text-2xl tracking-widest mb-4 group-hover:glow-text transition-all">{item.title}</h4>
                            <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Bonos Section */}
            <section className="px-6 py-16 bg-brand-black">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-glow text-lg font-black uppercase tracking-tighter mb-8 text-center glow-text"
                >
                    BONOS DE ACCIÓN RÁPIDA
                </motion.h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                    {[
                        { val: "$47", title: "Plantilla Cash Flow Switch", desc: "Audita tus finanzas en 15 minutos.", icon: "analytics" },
                        { val: "$67", title: "TABLERO DE CONTROL PREDICTIVO", desc: "Monitoreo constante para escalar.", icon: "monitoring" }
                    ].map((bono, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, borderColor: "rgba(255, 0, 0, 0.4)" }}
                            className="p-6 rounded-2xl bg-dark-grey border border-dark-red/30 transition-all shadow-md hover:shadow-primary/10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-primary text-white text-[9px] sm:text-[10px] font-black px-3 py-1 rounded-full uppercase">VALOR: {bono.val} — GRATIS</span>
                                <span className="material-symbols-outlined text-primary">{bono.icon}</span>
                            </div>
                            <h4 className="text-primary-glow font-bold text-lg sm:text-xl mb-2 uppercase tracking-tight">{bono.title}</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">{bono.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final Offer */}
            <AnimatePresence>
                {showButton && (
                    <motion.section
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        className="px-6 py-20 bg-dark-red/5 border-t border-dark-red/30"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-white text-xl sm:text-2xl font-black mb-10 uppercase tracking-tight">INICIA TU TRANSFORMACIÓN</h2>

                            <motion.div
                                whileHover={{ y: -10 }}
                                className="p-6 sm:p-8 rounded-3xl bg-dark-grey border-2 border-primary/40 text-center relative overflow-hidden mb-12 shadow-2xl max-w-md mx-auto"
                            >
                                <div className="absolute -top-10 -right-10 size-32 bg-primary/10 rounded-full blur-3xl"></div>
                                <div className="flex flex-col items-center gap-1 mb-8">
                                    <span className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">VALOR REAL $171</span>
                                    <span className="text-primary-glow text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black glow-text leading-tight my-2">PRECIO HOY $47 USD</span>
                                    <span className="text-neon-green text-[11px] sm:text-[14px] md:text-base lg:text-lg font-black uppercase tracking-widest mt-2 border border-neon-green/30 px-3 py-1 rounded-md bg-neon-green/5">AHORRO $124 USD</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-primary text-white font-black py-5 sm:py-6 rounded-2xl glow-button uppercase tracking-[0.2em] text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                                    >
                                        QUIERO LIBERARME
                                    </motion.button>
                                    <p className="text-slate-200 text-[9px] font-bold uppercase tracking-widest">PAGO ÚNICO • ACCESO DE POR VIDA</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="p-8 rounded-3xl bg-dark-grey border border-dark-red/30 text-center relative overflow-hidden shadow-xl max-w-md mx-auto"
                            >
                                <span className="material-symbols-outlined text-primary text-5xl sm:text-6xl mb-4">verified_user</span>
                                <h3 className="text-white text-xl sm:text-2xl font-extrabold mb-2 uppercase">GARANTÍA DE 7 DÍAS</h3>
                                <p className="text-primary text-[9px] font-black tracking-[0.2em] mb-4 uppercase">RESPALDADO POR HOTMART</p>
                                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                    Si no sientes que tu visión del negocio ha cambiado radicalmente, te devolvemos el <span className="text-primary-glow font-bold">100% de tu dinero</span> sin preguntas.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Footer */}
            <section className="px-6 py-16 bg-brand-black/50">
                <div className="mt-20 space-y-4 max-w-2xl mx-auto">
                    <h3 className="text-white text-xl font-black uppercase text-center mb-8">PREGUNTAS FRECUENTES</h3>
                    {[
                        { q: '¿Necesito tener un negocio ya?', a: 'Sí, este sistema está diseñado para modelos que ya tienen tracción.' },
                        { q: '¿Por qué el precio es tan bajo?', a: 'Queremos democratizar el acceso al Método NEXOR.' },
                        { q: '¿Cuándo recibo el acceso?', a: 'Inmediatamente después del pago.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dark-grey border border-dark-red/20 rounded-2xl p-6 sm:p-8"
                        >
                            <p className="text-primary-glow font-bold mb-3 text-sm sm:text-lg md:text-xl">{item.q}</p>
                            <p className="text-slate-400 text-xs sm:text-base md:text-lg">{item.a}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center pb-12 px-4">
                    <p className="text-metallic-grey text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">© 2024 NEXOR METHOD • JONATHAN TORO • TODOS LOS DERECHOS RESERVADOS</p>
                </div>
            </section>
        </main>
    );
}
