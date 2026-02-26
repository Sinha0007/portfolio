import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark"
            exit={{
                y: '-100%',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    className="overflow-hidden mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black gradient-text tracking-tighter">
                        PRANAB
                    </h1>
                </motion.div>

                <div className="flex flex-col items-center gap-2">
                    <div className="text-gray-500 font-mono text-sm tracking-widest flex items-center gap-2">
                        <span>INITIALIZING</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ...
                        </motion.span>
                    </div>

                    <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden mt-4">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="mt-2 text-[10px] font-mono text-primary-light font-bold">
                        {progress}%
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
    );
};

