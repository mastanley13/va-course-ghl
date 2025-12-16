import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download } from 'lucide-react';

const ImageViewer = ({ isOpen, onClose, src, alt }) => {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative z-10 max-w-7xl max-h-screen w-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Toolbar */}
                        <div className="absolute top-0 right-0 -translate-y-full mb-4 flex gap-3 p-4">
                            <a
                                href={src}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
                                title="Open full size"
                            >
                                <Download size={20} />
                            </a>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-red-500/20 hover:text-red-400 transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />

                        {alt && (
                            <div className="mt-4 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/5">
                                <p className="text-sm text-slate-300 font-medium">{alt}</p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageViewer;
