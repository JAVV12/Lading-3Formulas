'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VSLPlayerProps {
    videoUrl: string;
    posterUrl?: string; // Opcional, si no se da se usa el video mismo
    onProgress?: (state: { playedSeconds: number }) => void;
    autoPlay?: boolean;
}

export default function VSLPlayer({ videoUrl, onProgress }: VSLPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);

    // Seguimiento del progreso
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const currentProgress = (video.currentTime / video.duration) * 100;
            setProgress(currentProgress);
            if (onProgress) {
                onProgress({ playedSeconds: video.currentTime });
            }
        };

        const handlePause = () => setIsPaused(true);
        const handlePlay = () => setIsPaused(false);

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('pause', handlePause);
        video.addEventListener('play', handlePlay);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('play', handlePlay);
        };
    }, [isLoaded, onProgress]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    // Miniatura extraída del video usando el fragmento temporal
    const videoThumbnail = `${videoUrl}#t=0.1`;

    return (
        <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 vsl-border shadow-2xl bg-black group transition-all duration-500 select-none touch-none"
            onContextMenu={(e) => e.preventDefault()}
        >
            {!isLoaded ? (
                /* Preview State (Video Frame as Thumbnail) */
                <div
                    onClick={() => setIsLoaded(true)}
                    className="absolute inset-0 cursor-pointer z-20 flex flex-col items-center justify-center group"
                >
                    {/* Video Frame Overlay */}
                    <div className="absolute inset-0 z-0">
                        <video
                            src={videoThumbnail}
                            className="w-full h-full object-cover opacity-60 grayscale-[0.3] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                            preload="metadata"
                            muted
                            playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                    </div>

                    {/* Play Button UI */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="size-20 sm:size-28 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-primary/50 shadow-[0_0_50px_rgba(255,0,0,0.6)] mb-6 transition-shadow group-hover:shadow-[0_0_80px_rgba(255,0,0,0.8)]"
                        >
                            <span className="material-symbols-outlined text-primary text-5xl sm:text-7xl translate-x-1">play_arrow</span>
                        </motion.div>
                    </div>
                </div>
            ) : (
                /* Active Video State - Restricted Interaction */
                <div className="relative w-full h-full cursor-default" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        onContextMenu={(e) => e.preventDefault()}
                    />

                    {/* UI Overlays */}
                    <AnimatePresence>
                        {isPaused && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 pointer-events-none"
                            >
                                <div className="size-20 sm:size-28 bg-primary/30 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-primary/50 shadow-[0_0_40px_rgba(255,0,0,0.4)]">
                                    <span className="material-symbols-outlined text-primary text-5xl sm:text-7xl translate-x-1">play_arrow</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Non-interactive Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20 overflow-hidden pointer-events-none">
                        <motion.div
                            className="h-full bg-primary"
                            style={{ width: `${progress}%` }}
                            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                        />
                    </div>

                    {/* Hidden interactive layer */}
                    <div className="absolute inset-0 z-10 bg-transparent"></div>
                </div>
            )}
        </div>
    );
}
