import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Handle transparency
        setIsScrolled(latest > 50);

        // Handle show/hide on scroll
        const diff = latest - lastScrollY.current;
        if (latest < 50) {
            setIsVisible(true);
        } else if (diff > 10 && isVisible) {
            setIsVisible(false);
        } else if (diff < -10 && !isVisible) {
            setIsVisible(true);
        }
        lastScrollY.current = latest;
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{
                y: isVisible ? 0 : -100,
                backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'rgba(10, 10, 10, 0)',
                backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 transition-colors"
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between py-4">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-white z-50 group flex items-center gap-1">
                    <span className="text-primary transition-transform group-hover:-translate-x-1">&lt;</span>
                    <span>Pranab</span>
                    <span className="text-primary transition-transform group-hover:translate-x-1">/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Socials / Action */}
                <div className="hidden md:flex items-center gap-5">
                    <a href="https://github.com/pranabsinha" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#contact" className="px-5 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 rounded-full text-xs font-bold transition-all duration-300">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none z-50 p-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-dark-100 border-l border-white/10 z-50 md:hidden flex flex-col p-10"
                        >
                            <div className="flex flex-col gap-6 mt-12">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold text-white hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-auto pt-10 border-t border-white/5 flex gap-6">
                                <a href="https://github.com/pranabsinha" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><Github size={24} /></a>
                                <a href="https://linkedin.com/in/pranab-sinha07/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary"><Linkedin size={24} /></a>
                                <a href="mailto:pranabsinha80@gmail.com" className="text-gray-400 hover:text-white"><Mail size={24} /></a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

