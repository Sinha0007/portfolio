import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile-studio.png';

export const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const stats = [
        { label: 'Years Experience', value: '1+', color: 'text-primary' },
        { label: 'Projects Completed', value: '10+', color: 'text-accent' },
        { label: 'Lines of Code', value: '50k+', color: 'text-primary-light' },
    ];

    return (
        <section id="about" ref={containerRef} className="py-32 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div style={{ opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                                Bridging the gap between <br />
                                <span className="gradient-text">design & engineering.</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                                <p>
                                    I'm a Frontend Developer based in Bangalore, currently building high-performance educational tools at <span className="text-white font-medium">Brigosha Technologies</span>.
                                </p>
                                <p>
                                    My approach is simple: I believe that code should be as expressive as the design it represents. I specialize in building <span className="text-white font-medium">React ecosystems</span> that are not only functional but delightful to use.
                                </p>
                                <p>
                                    I don't just write code; I craft digital experiences with a relentless focus on performance, accessibility, and high-fidelity animations.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-8 mt-12">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className={`text-4xl font-black ${stat.color}`}>{stat.value}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1 leading-tight">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2 relative group">
                        <motion.div
                            style={{ y }}
                            className="aspect-square rounded-3xl overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
                            <img
                                src={profileImg}
                                alt="Pranab Sinha"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

