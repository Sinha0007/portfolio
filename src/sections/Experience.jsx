import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "Associate Software Engineer",
        company: "Brigosha Technologies",
        period: "Sept 2024 – Present",
        description: "Crafting modern web interfaces and scalable frontend modules. Working closely with design teams to implement high-fidelity animations and optimized user journeys.",
        skills: ["React.js", "Redux", "Framer Motion", "GSAP"]
    },
    {
        id: 2,
        role: "Software Engineering Intern",
        company: "Alpha Digital",
        period: "Jan 2024 – Aug 2024",
        description: "Engineered responsive UI components for data-heavy dashboards. Gained deep understanding of component-based architecture and state management.",
        skills: ["JavaScript", "HTML/CSS", "React Hooks"]
    }
];

export const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section id="experience" ref={containerRef} className="py-32 relative z-10">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        Professional <span className="gradient-text">Journey.</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        My career path and experiences in the tech industry.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Subtle Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
                    <motion.div
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary -translate-x-1/2 origin-top"
                        style={{ scaleY: pathLength }}
                    />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Box */}
                                <div className="hidden md:block w-full md:w-1/2" />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                                >
                                    <div className="relative group">
                                        <div className="mb-2">
                                            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-bold">
                                                {exp.period}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg text-gray-400 font-medium mb-4">
                                                {exp.company}
                                            </h4>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed mb-6 text-base md:text-lg">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                            {exp.skills.map((skill) => (
                                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-gray-400 border border-white/5 uppercase tracking-wider">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Mobile Timeline dot */}
                                        <div className="absolute -left-[3.25rem] md:left-auto md:right-auto md:group-odd:-right-[3.15rem] md:group-even:-left-[3.35rem] top-2 w-4 h-4 rounded-full bg-dark border-2 border-primary z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform duration-500 group-hover:scale-150" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

