import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socials = [
        { icon: <Github size={20} />, href: 'https://github.com/pranabsinha', label: 'Github' },
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/pranab-sinha07/', label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="w-full py-20 border-t border-white/5 relative bg-dark z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start">
                        <motion.span
                            className="text-2xl font-black gradient-text mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Pranab.
                        </motion.span>
                        <p className="text-gray-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
                            Frontend Developer focused on building high-performance web experiences with modern technologies.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex gap-6">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: '#3b82f6' }}
                                    className="text-gray-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <div className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-black">
                            Connect with me
                        </div>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all group"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-500 text-[11px] uppercase tracking-wider font-medium">
                        &copy; {new Date().getFullYear()} Pranab Kumar Sinha. Built with React & Framer Motion.
                    </div>
                    <div className="flex gap-8">
                        <a href="#about" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-wider transition-colors">About</a>
                        <a href="#projects" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-wider transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-wider transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

