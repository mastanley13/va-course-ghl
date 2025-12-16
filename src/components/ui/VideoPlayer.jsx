import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const STORAGE_PREFIX = 'ghl-media-progress:';

const formatTime = (seconds) => {
    const totalSeconds = Math.floor(seconds || 0);
    const mins = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
};

const useResumeState = (mediaRef, src) => {
    const storageKey = useMemo(() => `${STORAGE_PREFIX}${src}`, [src]);

    useEffect(() => {
        const media = mediaRef.current;
        if (!media) return undefined;

        const handleLoaded = () => {
            const stored = window.localStorage.getItem(storageKey);
            if (stored) {
                const parsed = Number(stored);
                if (!Number.isNaN(parsed)) {
                    media.currentTime = parsed;
                }
            }
        };

        const handleTimeUpdate = () => {
            window.localStorage.setItem(storageKey, media.currentTime.toString());
        };

        media.addEventListener('loadedmetadata', handleLoaded);
        media.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            media.removeEventListener('loadedmetadata', handleLoaded);
            media.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [mediaRef, storageKey]);

    return storageKey;
};

const useLazyVisible = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return { containerRef, isVisible };
};

export const VideoPlayer = ({ src, poster, title }) => {
    const mediaRef = useRef(null);
    const { containerRef, isVisible } = useLazyVisible();
    const storageKey = useResumeState(mediaRef, src);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const media = mediaRef.current;
        if (!media) return undefined;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleDuration = () => setDuration(media.duration);

        media.addEventListener('play', handlePlay);
        media.addEventListener('pause', handlePause);
        media.addEventListener('loadedmetadata', handleDuration);

        return () => {
            media.removeEventListener('play', handlePlay);
            media.removeEventListener('pause', handlePause);
            media.removeEventListener('loadedmetadata', handleDuration);
        };
    }, []);

    const resetProgress = () => {
        const media = mediaRef.current;
        if (!media) return;
        media.currentTime = 0;
        window.localStorage.removeItem(storageKey);
    };

    const togglePlayback = () => {
        const media = mediaRef.current;
        if (!media) return;
        if (media.paused) {
            void media.play();
        } else {
            media.pause();
        }
    };

    return (
        <div
            ref={containerRef}
            className="group overflow-hidden rounded-xl border border-slate-800/80 bg-surface/50 shadow-xl"
        >
            <div className="relative aspect-video bg-slate-950">
                {isVisible ? (
                    <video
                        ref={mediaRef}
                        src={src}
                        poster={poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                        onClick={togglePlayback}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-500">
                        Loading media...
                    </div>
                )}

                <button
                    type="button"
                    onClick={togglePlayback}
                    className="absolute inset-0 z-10 m-auto h-12 w-12 rounded-full bg-black/60 text-white backdrop-blur transition hover:scale-105 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-slate-200">
                <div>
                    <p className="font-semibold text-white">{title || 'Course media'}</p>
                    <p className="text-xs text-slate-400">Resume supported • {duration ? formatTime(duration) : 'Loading'} total</p>
                </div>
                <button
                    type="button"
                    onClick={resetProgress}
                    className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                    <RotateCcw size={14} />
                    Reset
                </button>
            </div>
        </div>
    );
};

export const AudioPlayer = ({ src, title }) => {
    const mediaRef = useRef(null);
    const { containerRef, isVisible } = useLazyVisible();
    const storageKey = useResumeState(mediaRef, src);

    const resetProgress = () => {
        const media = mediaRef.current;
        if (!media) return;
        media.currentTime = 0;
        window.localStorage.removeItem(storageKey);
    };

    return (
        <div
            ref={containerRef}
            className="flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-surface/50 p-4 shadow-xl"
        >
            <div className="flex items-center justify-between gap-3 text-slate-200">
                <div>
                    <p className="font-semibold text-white">{title || 'Audio resource'}</p>
                    <p className="text-xs text-slate-400">Tap play to resume where you left off.</p>
                </div>
                <button
                    type="button"
                    onClick={resetProgress}
                    className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                    <RotateCcw size={14} />
                    Reset
                </button>
            </div>
            {isVisible ? (
                <audio ref={mediaRef} src={src} controls preload="metadata" className="w-full" />
            ) : (
                <div className="w-full rounded-lg bg-slate-900 px-4 py-6 text-center text-sm text-slate-400">
                    Loading audio...
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
