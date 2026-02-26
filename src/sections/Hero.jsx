import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import * as THREE from 'three';

// Optional Three.js Background Component
const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap for performance
        mountRef.current.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800; // Reduced for performance
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const material = new THREE.PointsMaterial({
            size: 0.005,
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthTest: false // Better for performance in background
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);
        camera.position.z = 2;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            particlesGeometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-50"></div>;
};

export const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.8 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <ParticleBackground />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl will-change-transform"
                >
                    <motion.div variants={itemVariants} className="inline-block glass px-6 py-2 rounded-full mb-6 border-white/10">
                        <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent">
                            Let's craft amazing web experiences
                        </span>
                    </motion.div>

                    <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6">
                        Hi, I'm <span className="gradient-text">Pranab</span>
                        <br />
                        <span className="text-white/90">Frontend Developer</span>
                    </h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build exceptional and accessible digital experiences. Focused on animating interfaces and crafting rich web applications.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-transparent border border-white/10 glass hover:bg-white/5 text-white rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-primary via-white to-transparent"
                    animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

        </section>
    );
};
