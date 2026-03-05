"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

export function StickyCountdown() {
    const [timeLeft, setTimeLeft] = useState(14 * 60 + 59);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");

    return (
        <div className="sticky-countdown group">
            <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-brand-black group-hover:scale-110 transition-transform" />
                <p className="text-[11px] font-black tracking-[0.15em] text-brand-black uppercase">
                    La oferta termina en:
                </p>
                <span
                    className="text-brand-black font-black tracking-widest text-sm border-b-2 border-brand-black/30 w-12 text-center"
                    aria-live="polite"
                >
                    {minutes}:{seconds}
                </span>
            </div>
        </div>
    );
}
