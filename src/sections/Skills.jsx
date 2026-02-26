import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'Redux', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 92, category: 'Core' },
    { name: 'TailwindCSS', level: 95, category: 'Styling' },
    { name: 'Framer Motion', level: 85, category: 'Animation' },
    { name: 'GSAP', level: 80, category: 'Animation' },
    { name: 'TypeScript', level: 75, category: 'Core' },
    { name: 'Three.js', level: 70, category: 'Animation' },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-32"
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                                My <span className="gradient-text">Skills.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                I've spent the last year refining my craft in building highly interactive and performant web applications. Here's a look at the technologies I use to bring ideas to life.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Frontend', 'Core', 'Styling', 'Animation'].map((cat) => (
                                    <span key={cat} className="text-[10px] uppercase tracking-widest font-black text-white/40 px-3 py-1 border border-white/10 rounded-full">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex justify-between items-end mb-3">
                                        <div>
                                            <span className="text-xs font-mono text-primary uppercase tracking-wider font-bold mb-1 block">
                                                {skill.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </h3>
                                        </div>
                                        <span className="text-sm font-mono text-gray-500">{skill.level}%</span>
                                    </div>

                                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-primary"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-20 p-8 rounded-3xl bg-[#111] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#111] bg-dark-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 font-medium text-center md:text-left">
                                Collaborative worker with experience in <br />
                                <span className="text-white">agile teams and high-pressure environments.</span>
                            </p>
                            <a href="#contact" className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">
                                Hire Me
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

