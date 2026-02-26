import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Lock, Key } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Charge',
        shortDesc: 'User Management & CRUD System',
        description: 'A comprehensive user management system featuring robust CRUD operations, role-based access control, and complete state management. Integrated with REST APIs for seamless data flow.',
        tech: ['React.js', 'Redux', 'REST APIs', 'TailwindCSS'],
        image: 'https://images.unsplash.com/photo-1620062776856-bbce86a347b7?q=80&w=2670&auto=format&fit=crop',
        link: 'https://cms.aulas.in/login',
        github: null,
        isPrivate: true,
        needsCredentials: true,
        type: 'Company Project'
    },
    {
        id: 2,
        title: 'AI.Brigosha.com',
        shortDesc: 'AI Tools Platform',
        description: 'A sophisticated AI tools platform. Features include an ATS Score Calculator, automated MCQ Generator, Test Case Generator, and Video Transcription tools with complex form handling and file uploads.',
        tech: ['Preact/React', 'Tailwind', 'REST APIs', 'TypeScript'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
        link: 'https://ai.brigosha.com/',
        github: null,
        isPrivate: true,
        needsCredentials: true,
        type: 'Company Project'
    },
    {
        id: 3,
        title: 'Aulas Schedule Module',
        shortDesc: 'Education Management System',
        description: 'An advanced schedule management system tailored for educational interfaces. Includes quiz and resource management, attendance tracking, and intuitive admin workflows.',
        tech: ['React.js', 'Redux', 'Styled Components'],
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop',
        link: 'https://aulas.ai/',
        github: null,
        isPrivate: true,
        needsCredentials: true,
        type: 'Company Project'
    }
];

export const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedId]);

    return (
        <section id="projects" className="py-32 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                            Selected <span className="gradient-text">Projects.</span>
                        </h2>
                        <p className="text-gray-400 max-w-lg text-lg">
                            Showcasing digital products from my professional career at Brigosha Technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="https://github.com/pranabsinha"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors duration-300"
                        >
                            Explore full archive <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-container-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            className="group relative bg-[#111] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/50 transition-colors duration-500 will-change-transform"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    layoutId={`card-image-${project.id}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {project.isPrivate && (
                                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                                        <Lock size={10} className="text-primary-light" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Proprietary</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 2).map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/50 px-2 py-1 border border-white/10 rounded-full font-mono">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 2 && (
                                        <span className="text-[10px] text-white/30 self-center">+{project.tech.length - 2} more</span>
                                    )}
                                </div>
                                <motion.h3
                                    className="text-2xl font-bold text-white mb-2 leading-tight"
                                    layoutId={`card-title-${project.id}`}
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    {project.shortDesc || project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        />

                        <motion.div
                            layoutId={`card-container-${selectedId}`}
                            className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl flex items-center justify-center text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {(() => {
                                const project = projects.find(p => p.id === selectedId);
                                return (
                                    <>
                                        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                            <motion.img
                                                layoutId={`card-image-${project.id}`}
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="md:w-1/2 p-8 md:p-14 overflow-y-auto">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                                                    {project.type}
                                                </span>
                                            </div>

                                            <motion.h2
                                                layoutId={`card-title-${project.id}`}
                                                className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter"
                                            >
                                                {project.title}
                                            </motion.h2>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-xs font-mono text-primary-light px-3 py-1 bg-primary/5 border border-primary/20 rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-gray-400 text-lg leading-relaxed mb-6"
                                            >
                                                {project.description}
                                            </motion.p>

                                            {project.needsCredentials && (
                                                <div className="flex items-start gap-3 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl mb-8">
                                                    <Key size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                                                    <p className="text-sm text-yellow-500/80 leading-snug">
                                                        This is a private enterprise application. The live link will require internal credentials to access.
                                                    </p>
                                                </div>
                                            )}

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="flex flex-col sm:flex-row gap-4"
                                            >
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 ${project.link === '#' ? 'bg-white/5 cursor-not-allowed opacity-50' : 'bg-primary hover:bg-primary-dark'} text-white rounded-xl font-bold transition-all duration-300`}
                                                >
                                                    {project.link === '#' ? 'Link Restricted' : 'Live Site'} <ExternalLink size={20} />
                                                </a>

                                                {project.github ? (
                                                    <a href={project.github} className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all duration-300">
                                                        Github <Github size={20} />
                                                    </a>
                                                ) : (
                                                    <div className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/5 text-gray-500 rounded-xl font-bold cursor-not-allowed">
                                                        Private Repo <Lock size={20} />
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};


